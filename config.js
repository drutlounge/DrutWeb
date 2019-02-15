//Returns the config for a specific environment


var environments = {};

/*
Settings:

Port        - the port the server will run on
Env         - the name of the environment
Ip          - The IP to attach to
Secured     - Enable HTTPS
KeepHTTPOn  - Enable HTTP
*/

//Staging
environments.staging = {
    'httpport'  :   8080,
    'httpsport': 8081,
    'env'   :   'staging',
    'ip'    :   '0.0.0.0',//should be localhost/private
'secured'   :   false,//doesn't need to be secured in local development
'keephttpon':   true,//When false the HTTP server will not run if the HTTPS server is running
'certloc' : './https/cert.pem',//HTTPS Certificate, leave default if none
'keyloc' : './https/key.pem'//HTTPS private key, leave default if none
};

//Production
environments.production = {
    'httpport'  :   80,
    'httpsport': 443,
    'env'   :   'production',
    'ip'    :   '123.456.789.012',//should be a public IP - not 0.0.0.0
'secured'   :   true,
'keephttpon':   true,
'certloc' : './https/cert.pem',
'keyloc' : './https/key.pem'
};

//START OF CUSTOM CONFIGS





//END OF CUSTOM CONFIGS

//Export environment (depending on how the script was launched)
var curEnv  =   typeof(process.env.NODE_ENV)    ==  'string'    ?   process.env.NODE_ENV.toLowerCase()  :   '';//Grab the environment varialbe NODE_ENV and store it in curEnv in lower case, if it doesn't exist leave it blank
var using   =   typeof(environments[curEnv])    ==  'object'    ?   environments[curEnv]    :   environments.staging;//If there is no env or it isn't in our env list then swap to staging, else use that environment config

module.exports =   using;