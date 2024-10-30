const Sequelize = require("sequelize");

const sequelizesellinkit = new Sequelize(
    process.env.sellinkit_database_name,
    process.env.sellinkit_database_user,
    process.env.sellinkit_database_password,
    {
        host: process.env.sellinkit_database_host,
        dialect: process.env.sellinkit_database_dialect,
        port: process.env.sellinkit_database_port,
        define: {
            timestamps: false,
            timezone: "+07:00"
        },
        logging: false,
        timezone: "+07:00",
        operatorAliases: 0
    }
)


sequelizesellinkit.authenticate()
    .then(() => {
        console.log('[ok] DB Connected')
    })
    .catch(err => {
        console.error('[ERROR] DB Connection Error')
    });

module.exports = {
    sequelizesellinkit
}