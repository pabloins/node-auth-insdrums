const passport = require("passport");
const { login } = require("../services/auth.service");

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await login(username, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const loginAzure = (req, res, next) => {
  passport.authenticate("azuread-openidconnect", { failureRedirect: "/" })(req, res, next);
};

const callbackAzure = (req, res, next) => {
  passport.authenticate("azuread-openidconnect", { failureRedirect: "/" }, (err, user) => {
    if (err) return next(err);

    if (!user) return res.redirect("/");

    req.logIn(user, (err) => {
      if (err) return next(err);

      res.redirect("/");
    });
  })(req, res, next);
};

const logoutAzure = (req, res) => {
  req.logout();
  res.redirect("/");
};

module.exports = {
  loginUser,
  loginAzure,
  callbackAzure,
  logoutAzure,
};
