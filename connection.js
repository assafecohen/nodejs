const mysql = require('mysql');

let mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodedb',
  multipleStatements: true
});
mysqlConnection.connect(error => {
  if (!error) {
    console.log('connected');
  } else {
    console.log('Connection failed');
  }
});

module.exports = mysqlConnection;
