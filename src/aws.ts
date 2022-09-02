import AWS = require('aws-sdk');
import { config } from './config/config';

const c = config.aws;

//Configure AWS
if(c.aws_profile !== "DEPLOYED") {
  var credentials = new AWS.SharedIniFileCredentials({profile: c.aws_profile});
  AWS.config.credentials = credentials;
}

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: c.aws_region,
  accessKeyId: c.aws_access_key_id,
  secretAccessKey: c.aws_secret_access_key,
  params: {Bucket: c.aws_media_bucket}
});

export function getGetSignedUrl( key: string ){
    const signedUrlExpireSeconds = 60 * 5
    const url = s3.getSignedUrl('getObject', {
      Bucket: c.aws_media_bucket,
      Key: key,
      Expires: signedUrlExpireSeconds
    });
    return url;
}
