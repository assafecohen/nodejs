// const mysql = require('mysql');
// console.log(mysql);
// console.log('hello world');

// //Create A Connection

// const con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'nodedb'
// });

//Connect To Mysql

// con.connect(err => {
//   if (err) throw err;
//   console.log('Connected to database');

//   con.query('CREATE DATABASE nodeDB', (err, result) => {
//     if (err) throw err;
//     console.log('Database Created');
//   });

// Create Table
// const sql = `CREATE TABLE emails (
//                         id  VARCHAR(255)  NOT NULL PRIMARY KEY,
//                         selected BOOLEAN,
//                         requestedTime VARCHAR(255),
//                         requestedBy VARCHAR(255),
//                         sender VARCHAR(255),
//                         subject VARCHAR(255),
//                         recipeint VARCHAR(255),
//                         categorizedAs VARCHAR(255),
//                         status VARCHAR(255))`;
// con.query(sql, (err, result) => {
//   if (err) throw err;
//   console.log('Table has been created...');
// });

//Alter Table
// const sql =
//   'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';
// con.query(sql, (err, result) => {
//   if (err) throw err;
//   console.log('ourTable has been altered');
// });

//Insert into
// const sql =
//   "INSERT INTO customers (name,email) VALUES ('Marry COhen', 'Marry.cohen@gmail.com')";
// con.query(sql, (err, result) => {
//   if (err) throw err;
//   console.log('Data inserted into table...');
// });

// Insert many
// const sql = `INSERT INTO emails (id,selected, requestedTime,requestedBy,sender,subject,recipeint, categorizedAs,status) VALUES ?`;
// const values = [
//   [
//     'SD7878a123C',
//     false,
//     '03/03/2020 09:40:32',
//     'Requester',
//     'assafe.cohen@gmail.com',
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laboriosam',
//     'Requester',
//     'Phsihing',
//     'Approved'
//   ],
//   [
//     'SD228asDSAC',
//     false,
//     '03/03/2020 09:40:32',
//     'Requester',
//     'assafe.cohen@gmail.com',
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laboriosam',
//     'Requester',
//     'Phsihing',
//     'Approved'
//   ],
//   [
//     'SD71221sDSAC',
//     false,
//     '03/03/2020 09:40:32',
//     'Requester',
//     'assafe.cohen@gmail.com',
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laboriosam',
//     'Requester',
//     'Phsihing',
//     'Approved'
//   ],
//   [
//     'SD75342DSAC',
//     false,
//     '03/03/2020 09:40:32',
//     'Requester',
//     'assafe.cohen@gmail.com',
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laboriosam',
//     'Requester',
//     'Phsihing',
//     'Approved'
//   ]
// ];
// con.query(sql, [values], (err, result) => {
//   if (err) throw err;
//   console.log('Record inserted' + result.affectedRows);
// });
// });
