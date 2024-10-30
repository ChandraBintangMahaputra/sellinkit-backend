module.exports = {
    sellinkit: {
        name: process.env.sellinkit_database_name,
        username: process.env.sellinkit_database_user,
        password: process.env.sellinkit_database_password,
        host: process.env.sellinkit_database_host,
        dialect: process.env.sellinkit_database_dialect,
        port: process.env.sellinkit_database_port,
        logging: false
    },
    server: {
        port: process.env.Port
    },
    security: {
        salt: process.env.sellinkit_salt
    }
}