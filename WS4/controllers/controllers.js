var fakedb = require('../models/db');

module.exports.fetchAllUser = function(req, res) {
  res.render('../views/user_template', {
    users: fakedb
  });
}

module.exports.fetchOneUser = function (req, res) {
  const user = fakedb[req.params.id];

  res.render('../views/user_template', {
    users: [user]
  });
}
