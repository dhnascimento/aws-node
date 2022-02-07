const AWS = require('aws-sdk');
require('dotenv').config();

const ID = process.env.accessKeyId;
const SECRET = process.env.secretAccessKey;
const BUCKET_NAME = 'dhn-node-bucket';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Region
        LocationConstraint: 'ca-central-1'
    }
};

let promiseResult = s3.createBucket(params).promise();

promiseResult.then(data => {
    console.log('Bucket Created Successfully', data.Location);
}).catch(err => {
    console.error(err, err.stack);
})