const { v4: uuidv4 } = require("uuid");

let users = require("../models/users.model");

//get users
const getUsers = (req, res) => {
  res.status(200).json({ users });
};

//create users
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(users);
};

//update users
const updateUser = (req, res) => {
  const id = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === id)
    .map((selectedUser) => {
      selectedUser.username = username;
      selectedUser.email = email;
    });
  res.status(200).json(users);
};

//delete users
const deleteUser = (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id !== id);
  res.status(200).json(users);
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
