const bcrypt = require('bcryptjs');

module.exports.users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('adminadmin', 10),
    isAdmin: true,
  },
  {
    name: 'matan3sh',
    email: 'matan3sh@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Test',
    email: 'test@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];
