const fs = require("fs");
const path = require("path")
const Sequelize = require("sequelize")
const config = require("./config")

const modelsellinkit = path.join(__dirname, "../models/sellinkit");
const configsellinkit = new Sequelize(
    config.sellinkit.name,
    config.sellinkit.username,
    config.sellinkit.password,
    {
        logging: config.sellinkit.logging,
        dialect: config.sellinkit.dialect,
        host: config.sellinkit.host,
        port: config.sellinkit.port,
        define:{
            timestamps: false,
            timezone: "+07:00"
        },
        timezone: "+07:00",
        operatorsAliases: 0
    }
)

const db = {};
let model;

fs.readdirSync(modelsellinkit)
    .filter(file => {
        return file.indexOf(".") !== 0 && file.indexOf(".map") === -1;
    })
    .forEach(file => {
        model = require(path.join(modelsellinkit, file))(configsellinkit, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(name => {
    if("associate" in db[name]){
        db[name].associate(db)
    }
});

module.exports = db;