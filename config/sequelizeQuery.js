const Sequelize = require("sequelize");

const sequelizemoneynote = new Sequelize(
    process.env.moneynote_database_name,
    process.env.moneynote_database_user,
    process.env.moneynote_database_password,
    {
        host: process.env.moneynote_database_host,
        dialect: process.env.moneynote_database_dialect,
        port: process.env.moneynote_database_port,
        define: {
            timestamps: false,
            timezone: "+07:00"
        },
        logging: false,
        timezone: "+07:00",
        operatorAliases: 0
    }
)


sequelizemoneynote.authenticate()
    .then(() => {
        console.log('[ok] DB Connected')
    })
    .catch(err => {
        console.error('[ERROR] DB Connection Error')
    });

module.exports = {
    sequelizemoneynote
}