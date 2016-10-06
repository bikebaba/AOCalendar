/**
 * Created by bhuvanapalli on 6/30/16.
 */
var server = require("./server");
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var path = require('path');
var url = require("url");


var port = 12000;

app.use(bodyParser.json())


app.get('/', function(req, res) {
    console.log("in the start");
    console.log("in the start");
    server.home(res, req);
    //res.send("GetInfo");
});

app.get('/authorize', function(req, res) {
    console.log("authorize");
    server.authorize(res, req);
    //res.send("GetInfo");
});
app.get('/login', function(req, res) {
    console.log("login");
    server.authorize(res, req);
    //res.send("GetInfo");
});


app.post('/helloagain', function(req, res) {
    console.log("Post Hello again");

    var request = require("request");

    var options = { method: 'POST',
        url: 'http://localhost:' + port + '/hello',
        headers:
        { 'postman-token': '7abaa02a-3a65-e9c4-baf5-b62557044205',
            'cache-control': 'no-cache' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log("AAAAAAAA");
        console.log("body");
        console.log(body);
        res.send(body);
    });

});


app.post('/hello', function(req, res) {
    console.log(req.body);
    console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUU");
    res.send(req.body);
});
app.get('/getEmail', function(req, res) {
    console.log("getEmail");
    server.getEmail(res, req);
    //res.send("GetInfo");
});
app.get('/getCalendar', function(req, res) {
    console.log("getCalendar");
    server.getCalendar(res, req);
    //res.send("GetInfo");
});


app.post('/createEventwithoutToken', function(req, res) {

    req.query.refresh_token = 'AQABAAAAAADRNYRQ3dhRSrm-4K-adpCJOcgKWcwfAwnjzaBCsjeVjaRiaP8C_PR3sfbLi1D8curiaARNRFu69Zlgb0C_XRPtSysQeOZUlEA-8ojvdXBVHLY7hm1T9O8e2TN8IYZpMXata8-8CeYK77XzCH7Xe9VFbKsTbxWDLbonHd9j0eHkF1_e41vGQOqXYbMiPyNYUlbaIGGne2M5_swRiyeCotIEhDfFOcRNupkoObY37S7C444-AT4oUOfL6oEXAq--FyS4cTUjKHw6GVRWjInB0_uE8tODdK96NbAV09NIzS9xwp1-AZngBoBKG-mfmhR8gWdsDscbRs6BHqj_xrf9JoQ52p801U_omxUqHAXDyjv_VRvECT5a_NU5a2XdENOj42CtOc7csNmDsVoBzvA0FgRV9n9k4zjG8J3Cw349vgR3JTFrkVv9XefPAkNUTBZ7Ut5wGje0EoApC43w1MVuWtuiBvRCC3qA7qZIoeH8snrAs3WDMQjwOIwF5AuvJUYlMAAFQ7K_47DPtUaPtJ7B4WncNxFkPn9sRSQ6kKp2yaJpNRZROBjqisdnh0BQPHxgghCAIIhjiyvV9MvUyMuokPf5oySc0nvyzaWWmcP6zJqN3vz9n9fSl6fRWvAlAr_AgPPVFUoqw1T_rqOkZFaJUinL14yFi2oaSZ3Rv4-xd-ltTnm90lwHP-GERJZEB8ssQ7sEMDwf4Tu1uxACPgv1DFUs1NPPodwv94DeYLw_dK0ewZNLu-jYpn2GOny2pC7hhFiRHwYdHvzQMABKxY8ztngl5EmBRrZlovGzIZ-mdiL3uiAA';
    req.query.grant_type='refresh_token';
    server.createEventwithoutToken(res, req);

    //res.send("GetInfo");
});

app.post('/createEvent', function(req, res) {


    console.log("createEvent");
    server.createEvent(res, req);
    //res.send("GetInfo");
});

app.get('/getnewtoken', function(req, res) {

    server.getNewToken(res, req);
});

app.get('/getNextGenCalendarData', function(req, res) {

    console.log("getNextGenCalendarData");
    server.getNextGenCalendarData(res, req);
});


app.listen(port);

console.log("Server has started. Listening on port: " + port + "...");
