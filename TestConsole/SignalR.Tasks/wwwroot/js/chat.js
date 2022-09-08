"use strict";
var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (user, message) {
    var li = document.createElement("li");
    document.getElementById("messagesList").appendChild(li);
    li.textContent = `${user} says ${message}`;
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

// eval(await (await fetch('https://cdnjs.cloudflare.com/ajax/libs/microsoft-signalr/6.0.8/signalr.min.js')).text())
var secondConnection = new signalR.HubConnectionBuilder().withUrl("http://localhost:53678/hub/reservation").build();
// var secondConnection = new signalR.HubConnectionBuilder().withUrl("https://qa-control.are.com/hub/reservation").build();
secondConnection.start().then(function () {
    console.log("Connection started");
}).catch(function (err) {
    console.warn("There is an error");
    console.error(err);
});

document.getElementById("areButton").addEventListener("click", function (event) {
    var resourceIdList = [150, 151, 001];
    var currentDate = new Date();
    secondConnection.invoke("RegisterResourceMonitoring", resourceIdList, currentDate).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});



/*

var secondConnection = new signalR.HubConnectionBuilder().withUrl("http://localhost:53678/hub/reservation?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyMjcwMTJkZTdjNjcwM2QyYjVmOGIzMDE3NjU1ZTNmIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAiLCJuYmYiOjE2NjEyOTQzOTUsImlhdCI6MTY2MTI5NDM5NSwiZXhwIjoxNjYxMjk3OTk1LCJzY29wZSI6WyJhcGkxIl0sImNsaWVudF9pZCI6IkFjY2Vzcy5BZG1pblBvcnRhbCIsImp0aSI6IkNDRDVDNEZDRTY4NjU5RTI5QjQwMUNCOTg1QzY5NjFDIn0.jSUEE88TIrIX-ybfRok_qyydHdKZ2hDf-aI2BpN13C5en5zw97n8BpDDJs0B-FJ6gzkQc863bBoNad7L9osdFkeImXLevJFHcgTgDz8fU_Aq0NwZf9_PYJ3MQOxiRDd898Kut16I286KiYIAoXs-R2BpbhLKXlG58NSrV2g4FLPyoOrhyKULdnph5c8bYDPjdJ9ZOGwKKGNHRUdb4-k0awbv-l0Hyxd1FMvrBwdhyjG7Fe4DDHK80mlGoaCIAHkOUhTpiEw4a99BZW-u5PBr7xkeWhDTiq5lStSfTRTygnZ3qpu0MOzUkx5AcklNIKJQTVljmcLr0bH3gwGu93X9Bg").build();
// var secondConnection = new signalR.HubConnectionBuilder().withUrl("https://qa-control.are.com/hub/reservation").build();
secondConnection.start().then(function () {
    console.log("Connection started");
}).catch(function (err) {
    console.warn("There is an error");
    console.error(err);
});
 

 */