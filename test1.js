/**
 * Created by Shiv Bhuvanapalli on 9/25/2016.
 */
var http = require("http");

var options = {
    "method": "POST",
    "hostname": "localhost",
    "port": "9090",
    "path": "/cmecfservices/rest/schedulecomposite/calendarevent?Authentication__UserToken=1706638-1593851312872125088-1610556436283164691.1900643103058461034&Authentication__UserIPAddressText=156.132.32.168",
    "headers": {
        "content-type": "application/json",
        "accept": "application/json",
        "authorization": 'Basic ' + new Buffer( 'Sysadmin Rieman:Test2013!').toString('base64')
    }
};

console.log(options);

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});
jsonString = JSON.stringify({ CalendarData:
{ calendarEvents:
{ endDate: '2016-09-27T10:30:00-04:00',
    eventAccessGroupList:
        [ { accessGroupID: '68578', accessType: '118' },
            { accessGroupID: '68578', accessType: '97' },
            { accessGroupID: '68578', accessType: '101' } ],
    eventDefinitionDTO:
    { CalendarDefinitionID: '16154',
        OwnerPersonReferenceRepresentation: null,
        CalendarDefinitionCode: 'q',
        SelectCategoryDescriptionText: 'Appointment',
        PrimaryLabel: 'Private',
        SecondaryLabel: 'Appointment',
        FillColor: 'FFFFFF',
        CalendarDocketingReferenceReferenceRepresentation: null,
        DisplayMode: '1',
        RecordModificationTracking:
        { RecordCreatedDate: { DateTime: '2016-09-22T10:12:44-04:00' },
            RecordCreatorRepresentation:
            { ReferenceID: '3',
                ReferenceLink: '/cmecfservices/rest/person/3' } } },
    eventReportable: 'false',
    eventResourceDtoList:
    { categoryId: '0',
        resourceId: '1706638',
        timeblockslotResourceType: 'Person' },
    eventSubjectText: 'My Super Awesome Adventure Time!',
    eventType: 'Personal',
    override: 'false',
    partialRecord: 'false',
    personID: '1706638',
    privateFlag: 'false',
    repeatCriteria: { timeBlockConstructID: '' },
    scheduleNewRepeatBehavior: 'false',
    startDate: '2016-09-27T10:00:00-04:00' } } });

console.log("jsonString");
console.log(jsonString);

req.write(jsonString);
req.end();