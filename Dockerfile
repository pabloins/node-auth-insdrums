# Use the official MySQL image from Docker Hub
FROM mysql:latest

# Set environment variables
ENV MYSQL_DATABASE=mydatabase \
    MYSQL_ROOT_PASSWORD=admin123

# Copy SQL scripts to initialize the database
# COPY 1schema.sql /docker-entrypoint-initdb.d/
# COPY 2data.sql /docker-entrypoint-initdb.d/
