const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "Habib Shah",
    email: "something@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Sarkar Hossain",
    email: "anything@yahoo.com",
  },
];

module.exports = users;
