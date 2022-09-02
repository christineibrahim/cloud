require ('dotenv').config();

export const config = {
  "aws": {
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
    "aws_access_key_id": process.env.AWS_ACCESS_KEY_ID,
    "aws_secret_access_key": process.env.AWS_SECRET_ACCESS_KEY,
  },
  "jwt": {
    "secret": "$7r029P@s$R86AzbY#8814"
  },
}
