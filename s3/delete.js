const fs = require('fs');
require('dotenv').config();
const AWS = require('aws-sdk');

const ID = process.env.accessKeyId;
const SECRET = process.env.secretAccessKey;
const BUCKET_NAME = 'dhn-node-bucket';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const deleteFile = (bucketName, key) => {
    // Setting up S3 paramaters
    const params = {
        Bucket: bucketName,
        Key: key,
    };

    // Delete the object
    let promiseResult = s3.deleteObject(params).promise();

    promiseResult.then(data => {
        console.log(`File deleted successfully! ${data}`);
    }).catch(err => {
        console.log(err, err.stack);
    });
}

deleteFile(BUCKET_NAME, 'test2.pdf');