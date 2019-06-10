var firebaseConfig = {
    apiKey: "AIzaSyADxBsudSvGdB0FDaISjStNkQbAIFKu_bs",
    authDomain: "sampleproject-56c75.firebaseapp.com",
    databaseURL: "https://sampleproject-56c75.firebaseio.com",
    projectId: "sampleproject-56c75",
    storageBucket: "sampleproject-56c75.appspot.com",
    messagingSenderId: "173658908293",
    appId: "1:173658908293:web:fecab368393df3e1"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

database.ref('train-schedule').on('value', function (snapshot) {
    var trainString = JSON.stringify(snapshot.val());
    $('.current-train-schedule').html('');
    $('.current-train-schedule').append(trainString);
});


$('.add-train-button').click(function (event) {
    var trainName = $('.train-name-input').val().trim();
    var destination = $('.destination-input').val().trim();
    var frequency = $('.frequency-input').val().trim();
    var nextArrival = $('.arrival-input').val().trim();
    var timeUntil = "";

    var trainRecord = {
        trainName: trainName,
        destination: destination,
        frequency: frequency,
        nextArrival: nextArrival,
        timeUntil: 00
    };

    database.ref('train-schedule').push(trainRecord);

    $('.train-name-input').val("");
    $('.destination-input').val("");
    $('.frequency-input').val("");
    $('.arrival-input').val("");
});

var newTrainRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(frequency),
    $("<td>").text(nextArrival),
    $("<td>").text(timeUntil),
);

$("#train-table > tbody").append(newTrainRow);

