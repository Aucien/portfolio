const gordon = {
  name: 'Gordon',
  description: 'A comp sci student',
};

function get(req, res) {
  res.json(gordon);
}

function post(req, res) {
  res.json(gordon);
}

module.exports = {
  get,
  post,
};
