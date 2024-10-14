module.exports = {
    moneynote: {
        name: process.env.moneynote_database_name,
        username: process.env.moneynote_database_user,
        password: process.env.moneynote_database_password,
        host: process.env.moneynote_database_host,
        dialect: process.env.moneynote_database_dialect,
        port: process.env.moneynote_database_port,
        logging: false
    },
    server: {
        port: process.env.Port
    },
    security: {
        salt: process.env.moneynote_salt
    }
}