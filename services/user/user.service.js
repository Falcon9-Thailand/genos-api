const pool = require("../../config/database");
module.exports = {
  getUser: callBack => {
    pool.query(
      'SELECT id,name,lastname FROM test1',
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    )
  },
}