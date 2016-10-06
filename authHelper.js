/**
 * Created by bhuvanapalli on 6/30/16.
 */

var credentialsoteemo = {
    clientID: 'd2eaab89-3b0f-4645-866e-9c76c8687a3f',
    client_secret: 'TSjczjul2Tx1Vkw0H4fRzEExwU9nr+xsEQ+3vjs1v3U=',
    clientSecret: 'TSjczjul2Tx1Vkw0H4fRzEExwU9nr+xsEQ+3vjs1v3U=',
    //site: "https://login.microsoftonline.com/common",
    site: "https://login.microsoftonline.com/e56175a2-be3d-4f27-832f-8e3d901f3274",
    //authorizationPath: "/oauth2/v2.0/authorize",
    authorizationPath: "/oauth2/authorize",
    //tokenPath: "/oauth2/v2.0/token"
    tokenPath: "/oauth2/token"
}


var credentials = {
    clientID: 'f19d3c30-0660-4f7f-96df-6dc78a686633',
    client_secret: '2xizpbwJKnXEv4HGzaZFF9r2hT/lz/P/dbqBF3nhPSA=',
    clientSecret: '2xizpbwJKnXEv4HGzaZFF9r2hT/lz/P/dbqBF3nhPSA=',
    //site: "https://login.microsoftonline.com/common",
    site: "https://login.microsoftonline.com/7e7701a8-2613-4c2f-980c-5dd3076b7a6f",
    //authorizationPath: "/oauth2/v2.0/authorize",
    authorizationPath: "/oauth2/authorize",
    //tokenPath: "/oauth2/v2.0/token"
    tokenPath: "/oauth2/token"
}
var oauth2 = require("simple-oauth2")(credentials);

var redirectUri = "http://localhost:12000/login";

// The scopes the app requires
var scopes = [ "openid",
    "profile", "Directory.AccessAsUser.All"];

function getAuthUrl() {
    params = {
        redirect_uri: "http://localhost:11000/login",
        clientID: credentials.clientID,
        client_id: credentials.clientID,
        client_secret: credentials.client_secret,
        clientSecret: credentials.client_secret
        //scope: scopes.join(' ')
    };
    console.log(oauth2);
    var returnVal = oauth2.authCode.authorizeURL(params);
    console.log("Generated auth url: " + returnVal);
    console.log("Generated auth url: " + returnVal);
    return returnVal;
}

function createEventwithoutToken(req, res){

    // First get New Token
    var request = require("request");
    console.log("req");
    console.log(req.body.eventType);
    console.log("IN getnewtoken");
    //console.log(req.query.refresh_token);
    req.query.refresh_token = "AQABAAAAAADRNYRQ3dhRSrm-4K-adpCJSBTzkr1lIJUiRN-48OYJYymH5rvbSb-dgcjhn9hAAx95e8zhiVI1JPPZYfP8jgeB3z6dMXs1Pk5QQs8jht8vReTU1VTYzgyLhscLNZYJbbQdPDuzGbB28GkbwQ0gs0KFRYXirWCmuKke-IhAxSiEnAAI_CCpWPbQlVyva_Gfe1dsbqDNwASv5F3nvI3IXgdx7nrgWdTlifOW9QS76zjNVueLzJ1J5B-n2Ve1rcvDw036SUNwVgztXjTv8Q2x8mRLgtmcRnd5rKt3LFJ-DekRHz3jF1TqIfF0nR7cOiFImsCOwYrU4uiZLjcbAjKhcOwl018VArISfAPcxRvcW1p03sUcScWxG7MchsOYPmNjUVuk793uLNO7MdOg4LUeNqtpWK6DPoAnDCA-w79vWK9C3fIZz82_50DZJ8LlGtnxXoz4n_1bjOph096LtXFl3gx70d9To4IRs2WfPcmoGf_qlOPDANU_0RqOIxPkl4ofNnu6DGFP6yiuzqt_mZTDtdJfycFxyuGBM4UtXKEMIybeJp08RVoSWDOGrPIwUa_6O3WArVZdhP1X6c8UixHInaOIsutdE8LL801ThSO1K9vXn7dGm0mMXeB2BarVgapM5qja5EIlR6i_TpmwFYXyUG3fRafZmeAlf9XUD-e_1EKbfXP-cCkOVYCGpb7nUdZRq2rSU8Rwgoivw3TI8Dw5U3EZIAA";
    var options = {method: 'POST',
        //url: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
        //url : 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
        url: 'https://login.microsoftonline.com/7e7701a8-2613-4c2f-980c-5dd3076b7a6f/oauth2/token',
        form:
        {grant_type: 'refresh_token',
            //refresh_token: 'AAABAAAAiL9Kn2Z27UubvWFPbm0gLYrVyYqIHJkS-Aq8MnoCdMJQkLyFJRDXOuz-M98HfUATtVAwBO2AG40xZXBrb7jcS1Bq2ZmQoVc-IHtWcJ7TQlrcWqojPwHuKMKrYlE7S3xqZT9x8-LZQ2QxNrcg5ZW5c9Vly1H_4sIYvkVjd8nNBkE7lC8vI89LnhOi44_P-4y-ZBPuAsr8zgccD6bABQQvRAauEE6L_kkuiWw-U-JfwsSTC_CltdyNINbPO7L-uIzJMaj-0Tblt_3kcmMELaaOXjlOf-1xZ8y9NnQRD2ugxZOsrRpo0BopftaxJNl6Aeac9ZQPFvyZK3jNcs5I6rQsZzokjsahRX_uyXqntfqm8ftGaufp2GOa9QD2XdHK8WmJsniUOlFIpWLdAhZv5tHJMAJSZ61fkNRrcf_ayiSp_Ud5rSdW5QBGlmgeYgs8DS-mN-ZpkHi8gqKx_ZRsGNUQnaade3d3u5_T-t71pxZ093uSCwwTeRsAixA0vIxPgj4QMs1aqIghij8ZrYuzo0LkW9nKBYsedIm5FXN1ugr1cDz1OhoJfk220y55-Jhdb55jc4iwDZPzImlfOhivIaKi5MRTUzRuD9lZUMzo69aXvecgAA',
            refresh_token: req.query.refresh_token,
            client_id: credentials.clientID, //'0aca55fd-3cd9-40a6-aa78-ae6fcd1ab359',
            //client_secret: credentials.clientSecret //'F7dKfSa372ryjyskvxbQS4C9FAJVBNnfRIHwdOQLd2w=',
            clientID: credentials.clientID,
            client_secret: credentials.client_secret,
            clientSecret: credentials.client_secret
        }};

    request(options, function(error, response, body) {
        if (error)
            throw new Error(error);

        //At this point, the token is ready to be sent to create the event


        /********************************************/
        var http = require("https");
        //console.log("req.headers");
        //console.log(JSON.parse(body).token_type);
        req.headers.authorization = JSON.parse(body)["access_token"];
        //console.log(req.headers);
        var options = {
            "method": "POST",
            "hostname": "graph.microsoft.com",
            "port": null,
            "path": "/v1.0/me/events",
            "headers": {
                "content-type": "application/json",
                "authorization": "Bearer " + req.headers.authorization,
                "cache-control": "no-cache"
            }
        };

        if (req.body.eventType == 'Personal') {
            options.path = "/v1.0/me/calendars/AQMkAGIzYTViZjgzLWYzN2QtNDUwMi1hMTM2LTNhNjk0MzJlNGQ3MwBGAAADolT90U35WEqIgZEtrX96eQcAbDi5PtVI3UuU5SGDPugV1QAAAgEGAAAAbDi5PtVI3UuU5SGDPugV1QAAAaJmFgAAAA==/events/"
        }

        //console.log("options");
        //console.log(options);
        var request1 = http.request(options, function (response1) {
            var chunks = [];

            console.log("XX");
            response1.on("data", function (chunk) {
                chunks.push(chunk);
                console.log("AA");
            });

            response1.on("end", function () {
                var body1 = Buffer.concat(chunks);
                console.log("ZZ");
                //console.log(chunks);
                //console.log(body1.toString());
                res.writeHead(200, {"Content-Type": "Application/json"});
                res.write(body1.toString());
                res.end();
            });
        });


        request1.write(JSON.stringify(req.body));
        request1.end();

    });

}

function getNewToken(req, res){
    var request = require("request");
    console.log("IN getnewtoken");
    console.log(req.query.refresh_token);
    req.query.refresh_token = "AQABAAAAAADRNYRQ3dhRSrm-4K-adpCJSBTzkr1lIJUiRN-48OYJYymH5rvbSb-dgcjhn9hAAx95e8zhiVI1JPPZYfP8jgeB3z6dMXs1Pk5QQs8jht8vReTU1VTYzgyLhscLNZYJbbQdPDuzGbB28GkbwQ0gs0KFRYXirWCmuKke-IhAxSiEnAAI_CCpWPbQlVyva_Gfe1dsbqDNwASv5F3nvI3IXgdx7nrgWdTlifOW9QS76zjNVueLzJ1J5B-n2Ve1rcvDw036SUNwVgztXjTv8Q2x8mRLgtmcRnd5rKt3LFJ-DekRHz3jF1TqIfF0nR7cOiFImsCOwYrU4uiZLjcbAjKhcOwl018VArISfAPcxRvcW1p03sUcScWxG7MchsOYPmNjUVuk793uLNO7MdOg4LUeNqtpWK6DPoAnDCA-w79vWK9C3fIZz82_50DZJ8LlGtnxXoz4n_1bjOph096LtXFl3gx70d9To4IRs2WfPcmoGf_qlOPDANU_0RqOIxPkl4ofNnu6DGFP6yiuzqt_mZTDtdJfycFxyuGBM4UtXKEMIybeJp08RVoSWDOGrPIwUa_6O3WArVZdhP1X6c8UixHInaOIsutdE8LL801ThSO1K9vXn7dGm0mMXeB2BarVgapM5qja5EIlR6i_TpmwFYXyUG3fRafZmeAlf9XUD-e_1EKbfXP-cCkOVYCGpb7nUdZRq2rSU8Rwgoivw3TI8Dw5U3EZIAA";
    var options = {method: 'POST',
        //url: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
        //url : 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
        url: 'https://login.microsoftonline.com/7e7701a8-2613-4c2f-980c-5dd3076b7a6f/oauth2/token',
        form:
        {grant_type: 'refresh_token',
            //refresh_token: 'AAABAAAAiL9Kn2Z27UubvWFPbm0gLYrVyYqIHJkS-Aq8MnoCdMJQkLyFJRDXOuz-M98HfUATtVAwBO2AG40xZXBrb7jcS1Bq2ZmQoVc-IHtWcJ7TQlrcWqojPwHuKMKrYlE7S3xqZT9x8-LZQ2QxNrcg5ZW5c9Vly1H_4sIYvkVjd8nNBkE7lC8vI89LnhOi44_P-4y-ZBPuAsr8zgccD6bABQQvRAauEE6L_kkuiWw-U-JfwsSTC_CltdyNINbPO7L-uIzJMaj-0Tblt_3kcmMELaaOXjlOf-1xZ8y9NnQRD2ugxZOsrRpo0BopftaxJNl6Aeac9ZQPFvyZK3jNcs5I6rQsZzokjsahRX_uyXqntfqm8ftGaufp2GOa9QD2XdHK8WmJsniUOlFIpWLdAhZv5tHJMAJSZ61fkNRrcf_ayiSp_Ud5rSdW5QBGlmgeYgs8DS-mN-ZpkHi8gqKx_ZRsGNUQnaade3d3u5_T-t71pxZ093uSCwwTeRsAixA0vIxPgj4QMs1aqIghij8ZrYuzo0LkW9nKBYsedIm5FXN1ugr1cDz1OhoJfk220y55-Jhdb55jc4iwDZPzImlfOhivIaKi5MRTUzRuD9lZUMzo69aXvecgAA',
            refresh_token: req.query.refresh_token,
            client_id: credentials.clientID, //'0aca55fd-3cd9-40a6-aa78-ae6fcd1ab359',
            //client_secret: credentials.clientSecret //'F7dKfSa372ryjyskvxbQS4C9FAJVBNnfRIHwdOQLd2w=',
            clientID: credentials.clientID,
            client_secret: credentials.client_secret,
            clientSecret: credentials.client_secret
        }};


    //console.log("Req:   " + util.inspect(req.headers["x-forwarded-for"], false, null));
    //console.log("Res:   " + JSON.stringify(res));
    console.log(options);
    request(options, function(error, response, body) {
        if (error)
            throw new Error(error);
        res.setHeader('Content-Type', 'application/json');
        res.send(body);
    });

}
function getTokenFromCode(auth_code, callback, response) {
    var token;
    //scopes[4] = "offline_access";
    console.log("gettokenfromcode");

    oauth2.authCode.getToken({
        code: auth_code,
        //resource: "https://outlook.office.com/",
        resource: "https://graph.microsoft.com/", //https://shivoteemo.onmicrosoft.com/O365CourtsCalendar",
        redirect_uri: redirectUri,
        //scope: scopes.join(' '),
        client_id: credentials.clientID, //'0aca55fd-3cd9-40a6-aa78-ae6fcd1ab359',
        //client_secret: credentials.clientSecret //'F7dKfSa372ryjyskvxbQS4C9FAJVBNnfRIHwdOQLd2w=',
        clientID: credentials.clientID,
        client_secret: credentials.client_secret,
        clientSecret: credentials.client_secret
    }, function (error, result) {
        if (error) {
            console.log("Access token error: ", error);
            callback(response, error, null);
        }
        else {
            token = oauth2.accessToken.create(result);
            console.log("Token ");
            console.log(token.token.access_token);
            console.log("Refresh ");
            console.log(token.token.refresh_token);
            callback(response, null, token);
        }
    });
}

function getEmailFromIdToken(id_token) {
    // JWT is in three parts, separated by a '.'
    var token_parts = id_token.split('.');

    // Token content is in the second part, in urlsafe base64
    var encoded_token = new Buffer(token_parts[1].replace("-", "_").replace("+", "/"), 'base64');

    var decoded_token = encoded_token.toString();

    var jwt = JSON.parse(decoded_token);

    // Email is in the preferred_username field
    return jwt.preferred_username
}



exports.getEmailFromIdToken = getEmailFromIdToken;
exports.getTokenFromCode = getTokenFromCode;
exports.getAuthUrl = getAuthUrl;
exports.getNewToken = getNewToken;
exports.createEventwithoutToken = createEventwithoutToken;
