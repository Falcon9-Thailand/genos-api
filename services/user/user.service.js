require("dotenv").config();
var pg = require('pg');
pg.connect(process.env.DATABASE_URL, function(err, client, done) {
   console.log(err+"!!!!!!!!!!!!!!!");
   module.exports = {
    getUser: callBack => {
      client.query('SELECT * FROM test1', function(err, result) {
        done();
        if(err) return console.error(err);
        console.log(result.rows);
      });
    },
  }
    
});
