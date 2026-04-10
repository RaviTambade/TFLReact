// asyncFunction.test.js
const fetchData = require('./apiservice');

test('fetches data correctly', async () => {
  const ExpectedData=[{"email": "abhay.navale@gmail.com", "id": 1, "name": "Abhay Navale"}, {"email": "shubham.teli@gmail.com", "id": 2, "name": "Shubham Teli"}, {"email": "rutuja.tambade@gmail.com", "id": 3, "name": "Rutuja Tambade"}, {"email": "disha.satpute@gmail.com", "id": 4, "name": "Disha Satpute"}, {"email": "tejas.pawale@gmail.com", "id": 5, "name": "Tejas Pawale"}, {"email": "pragati.bangar@gmail.com", "id": 6, "name": "Pragati Bangar"}, {"email": "sanika.bhor@gmail.com", "id": 7, "name": "Sanika Bhor"}];

  const data = await fetchData();
  expect(data).toEqual(
    ExpectedData);
});
