const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const passport = require("passport");
const OIDCStrategy = require("passport-azure-ad").OIDCStrategy;

const secretKey = process.env.SECRET_KEY;

const options = {
  identityMetadata: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/v2.0/.well-known/openid-configuration`,
  clientID: process.env.AZURE_AD_CLIENT_ID,
  clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
  responseType: "code",
  responseMode: "query",
  redirectUrl: "http://localhost:8080/api/v1/auth/openid/return",
  allowHttpForRedirectUrl: true,
  passReqToCallback: false,
  scope: ["profile", "offline_access", "https://graph.microsoft.com/mail.read"],
};

passport.use(new OIDCStrategy(options, (iss, sub, profile, accessToken, refreshToken, done) => {
  if (!profile.oid) return done(new Error("No OID found"), null);

  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

const initializePassport = () => {
  return [
    passport.initialize(),
    passport.session(),
  ];
};

const login = async (username, password) => {
  try {
    if (!username || !password) {
      throw new Error("Username and password are required");
    }

    const user = await User.findOne({ where: { username } });

    if (!user) throw new Error("User not found");

    const isMatch = await user.comparePassword(password);

    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ username: user.username }, secretKey, {
      expiresIn: "1h",
    });

    return token;
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Error during login: " + error.message);
  }
};

module.exports = { initializePassport, login };
