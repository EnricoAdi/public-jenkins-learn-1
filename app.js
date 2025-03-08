const luxon = require('luxon');
const dt = luxon.DateTime.local();
const param = process.argv[2];
console.log('Hello Docker 2 '+ dt.toLocaleString());
console.log('this is jenkins '+param);