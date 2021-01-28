const {
  getUser
  } = require("./user.service");
  module.exports =  {
    getUser: (req, res) => {
      getUser((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          message: results
        });
      });
    }
    };