const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../connection');

Router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM emails', (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});
Router.put('/', (req, res) => {
  const emails = req.body.updatedEmails;

  emailsId = emails.map(email => {
    return `'${email.id}'`;
  });
  mysqlConnection.query(
    `UPDATE emails set status='Rejected' where id  IN(${emailsId})`,
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = Router;
