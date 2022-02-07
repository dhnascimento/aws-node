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

const uploadFile = (fileName, bucketName) => {
    // Read content of file
    const fileContent = fs.readFileSync(fileName);
    // Setting up S3 upload parameters
    const params = {
        Bucket: bucketName,
        Key: 'test2.pdf',
        Body: fileContent
    };
    // Uploading file to the bucket
    let promiseResult = s3.upload(params).promise();

    promiseResult.then(data => {
        console.log(`File uploaded succesfully! ${data.Location}`);
    }).catch(err => {
        console.error(err, err.stack);
    });
};

uploadFile('s3/Daniel Nascimento Resume.pdf', BUCKET_NAME);