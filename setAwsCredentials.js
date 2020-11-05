
require('dotenv').config()
const AWS = require('aws-sdk')
// const fetch = require('node-fetch')

const sts = new AWS.STS({apiVersion: '2011-06-15'})

// const sso = new AWS.SSO({
// 	apiVersion: '2019-06-10',
// 	region: 'eu-central-1',
// })

// var params = {
// 	DurationSeconds: '33600',
// 	SerialNumber: '',
// 	TokenCode: '334410',
//   };

//   sts.getSessionToken(params, function(err, data) {
// 	if (err) console.log(err, err.stack); // an error occurred
// 	else     console.log(data);           // successful response
//   });

// fetch(process.env.GET_TOKEN_URL, {
// 	method: 'POST',
// 	headers: { 'Content-Type': 'application/json' },
// 	body: JSON.stringify({
// 		clientId: process.env.USERNAME,
// 		clientSecret: process.env.PASSWORD,
// 		code: process.env.CODE,
// 		deviceCode: process.env.CODE,
// 		grantType: 'implicit',
// 		// redirectUri: "string",
// 		// refreshToken: "string",
// 		// scope: [ "string" ],
// 	})
// })
// 	.then(res => res.json()) // expecting a json response
// 	.then(json => console.log(json));

// const ssoParams = {
// 	accessToken: '', /* required */
// 	accountId: '', /* required */
// 	roleName: '' /* required */
//   };
  
//   sso.getRoleCredentials(ssoParams, function(err, data) {
// 	if (err) console.log(err, err.stack); // an error occurred
// 	else     console.log(data);           // successful response
//   });


// const stsParams = {
// 	DurationSeconds: 3600, 
// 	PrincipalArn: '', 
// 	RoleArn: process.env.ROLE_ARN, 
// 	SAMLAssertion: ''
// }
// sts.assumeRoleWithSAML(stsParams, function(err, data) {
// 	if (err) console.log(err, err.stack); // an error occurred
// 	else     console.log(data);           // successful response
// });


var params = {
	RoleArn: process.env.ROLE_ARN, /* required */
	RoleSessionName: process.env.ROLE_SESSION_NAME, /* required */
}

sts.assumeRole(params, function(err, data) {
	if (err) console.log(err, err.stack) // an error occurred
	else console.log(data)           // successful response
  });


