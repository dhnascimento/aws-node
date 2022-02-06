const fs = require('fs');
const AWS = require('aws-sdk');

const ID = process.env.accessKeyId;
const SECRET = process.env.secretAccessKey;
const BUCKET_NAME = 'dhn-node-bucket';
