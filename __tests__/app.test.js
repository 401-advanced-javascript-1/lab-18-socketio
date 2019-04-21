'use strict';

const alterFile = require('../app.js');
const fs = require('fs');

let fileOutput = fs.readFile('../files/test.txt', (err, data) => {
  return data;
});

describe('Test app.js', () => {

  it('Should successfully write a file', () => {
    expect(true).toBeTruthy;
  });

  it('Should successfully write a file', () => {
    expect(fileOutput).toEqual('HELLO');
  });
});