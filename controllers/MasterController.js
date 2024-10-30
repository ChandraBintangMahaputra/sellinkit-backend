var models = require('../config/sequelizeORM')
var sequelizeQuery = require('../config/sequelizeQuery')
var api = require('../tools/common')
var moment = require('moment')

function get_authorization(req, res) {

    sequelizeQuery.sequelizesellinkit.query(
      ` select 
          a.email
        from mst_authorization a`, {
        type: sequelizeQuery.sequelizesellinkit.QueryTypes.SELECT
      }
    ).then(function (data) {
      if(data.length > 0){
        api.ok(res, data)
      } else {
        api.error(res, "record not found", 200)
      }
      }
    
    ).catch((e) => {
      api.error(res, e, 500)
      console.error(e)
    })
  }


module.exports = {
    get_authorization
}