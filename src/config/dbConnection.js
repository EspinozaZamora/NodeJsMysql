
//const express = require('express');

const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '161.35.116.243',
    user: 'root',
    password: '0809mega',
    database: 'BDSpotify'
  });
  

}






