# link to the endpoint for a running elastic beanstalk
http://udagram-chib-app-dev-dev.us-east-1.elasticbeanstalk.com/

# with image_url query parameter
http://udagram-chib-app-dev-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=kitten-report.jpg

# Authentication
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNocmlzdGluZSIsInBhc3N3b3JkIjoiUW05YSUyMjMjb3I2IiwiaWF0IjoxNjYyMDY1MTgyfQ.0umjOYMLsiJNRgPxUPaja0pZGb7Rx2WO0C2ccpWVEJY

# AWS Items Used Names:
Elastic Beanstalk = udagram-chib-app-dev-dev
Application Name = udagram-chib-app-dev
AWS S3 bucket = udagram-s3-dev
IAM = udagram-iam2-dev
IAM role = udagram_role_dev
IAM user group = udagram-grp-dev
IAM policy = udagram_policy_s3_dev

Test Image in S3 bucket = kitten-report.jpg

## Udagram Image Filtering Microservice Project includs:
	
	# 1- Two main get methods
	1. [filteredimage]
	Main TODO validate, call filterImageFromURL, send the resulting and deletes image (without authorization )
	2. [filteredimagewithauth]
	Same as filteredimage TODO but with authorization 
	3. [gettoken]
	Get method to get JWT token passed on static values to simulate requireAuth
	4. [checkstaticheadertoken]
	Get method to test values returns from gettoken get method
	
	# 2- Postman test cases 
	1. [http://{{HOST}}/filteredimage?image_url=kitten-report.jpg]
	Tests main TODO filteredimage
	2. [http://{{HOST}}/filteredimage?image_url=kitten-report.jpg]
	Tests filteredimagewithauth get method
	3. [http://{{HOST}}/gettoken]
	Tests gettoken get method
	4. [http://{{HOST}}/checkstaticheadertoken]
	Tests checkstaticheadertoken get method

	# 3- ScreenShots
	1. [Elastic Beanstalk]
		1- elasticbeanstalk.png
		2- elasticbeanstalk.png
	2. [S3]
		3- S3.png
		4- S3_UploadedFile.png
	3. [Running Samples]
		5- running.png
		6- running.png
	4. [Postman Tests]
		7- Postman_Tests.png
		8- Postman_filteredimage_Test.png
		9- Postman_Execute_Tests.png