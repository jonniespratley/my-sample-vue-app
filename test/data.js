
const path = require('path');
const fs = require('fs');



const data = require('./data/cars.json');

for (var i = 0; i < data.length; i++) {
  data[i]._id = 'car-' + data[i].id;
  console.log('udpated', i);
}
if(data.length > 0){
  fs.writeFileSync(path.resolve(__dirname, './data/cars.json'), JSON.stringify(data));
}
