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

const downloadFile = (filePath, bucketName, key) => {
    // Setting up S3 parameters
    const params = {
        Bucket: bucketName,
        Key: key
    };

    // Get the object
    s3.getObject(params, function (err, data) {
        if (err) {
            throw err;
        }
        fs.writeFileSync(filePath, data.Body);
        console.log('File downloaded successfully!');
        console.log(data);
    });
};

downloadFile('testDownloaded.pdf', BUCKET_NAME, 'test.pdf');