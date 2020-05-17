const users = [
  {
    id: 0,
    name: 'Gordon',
    description: 'is a compsci student',
  },
  {
    id: 1,
    name: 'Thuan',
    description: 'is a compsci student',
  },
];

function getAll(req, res) {
  res.json(users);
}

function getUserById(req, res) {
  const user = users.find((u) => u.id == req.params.id);
  res.json(user);
}

function getUserByName(req, res) {
  const user = users.find((u) => u.name == req.params.name);
  res.json(user);
}

module.exports = {
  getAll,
  getUserById,
  getUserByName,
};
