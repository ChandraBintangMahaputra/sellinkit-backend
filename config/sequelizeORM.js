const fs = require("fs");
const path = require("path")
const Sequelize = require("sequelize")
const config = require("./config")

const modelmoneynote = path.join(__dirname, "../models/moneynote");
const configmoneynote = new Sequelize(
    config.moneynote.name,
    config.moneynote.username,
    config.moneynote.password,
    {
        logging: config.moneynote.logging,
        dialect: config.moneynote.dialect,
        host: config.moneynote.host,
        port: config.moneynote.port,
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

fs.readdirSync(modelmoneynote)
    .filter(file => {
        return file.indexOf(".") !== 0 && file.indexOf(".map") === -1;
    })
    .forEach(file => {
        model = require(path.join(modelmoneynote, file))(configmoneynote, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(name => {
    if("associate" in db[name]){
        db[name].associate(db)
    }
});

module.exports = db;