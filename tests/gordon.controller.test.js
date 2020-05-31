const gordoncontroller = require('../controllers/gordon.controller');

test('Get returns gordan name and description', () => {
  const req = () => {};
  const res = {
    json: (v) => v,
  };
  const answ = {
    name: 'Gordon',
    description: 'A comp sci student',
  };

  const gordan = gordoncontroller.get(req, res);

  expect(gordan).toEqual(answ);
});
