const { findAllUsers, findUserById } = require("../service/users");

async function getAllUsers(req, res) {
  const users = await findAllUsers();
  return res.json(users);
};

async function getUserById(req, res) {
    const { id } = req.params;
    const user = await findUserById(id);
    return res.json(user);
};

module.exports = {
    getAllUsers,
    getUserById
};