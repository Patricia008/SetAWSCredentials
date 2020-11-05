# SetAWSCredentials
Script to login to aws and get temporary credentials and token, then add them to credentials file

## Usage

### Set the variables

#### ROLE_ARN
Login to awsapps.com and go to IAM roles. Find the one corresponding to your user's account id(can be seen in the header) and take its ARN.

#### ROLE_SESSION_NAME
Find it in the header bar, in the 'Federated Login' field, after the slash. Usually the email address

Run with
```npm run set-credentials```
