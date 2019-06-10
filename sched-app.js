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

var currentTime = moment();

database.ref('train-schedule').on('child_added', function (snapshot) {
    var newTrainRow = $("<tr>").append(
        $("<td>").text(snapshot.val().trainName),
        $("<td>").text(snapshot.val().destination),
        $("<td>").text(snapshot.val().frequency),
        $("<td>").text(snapshot.val().nextArrival),
        $("<td>").text(snapshot.val().timeUntil)
    );
    $("#train-table > tbody").append(newTrainRow);
});


$('.add-train-button').click(function (event) {
    var trainName = $('.train-name-input').val().trim();
    var destination = $('.destination-input').val().trim();
    var frequency = $('.frequency-input').val().trim();
    var nextArrival = moment($('.arrival-input').val().trim(), "hh:mm A").format("HH:mm");
    var timeUntil = moment(nextArrival, "HH:mm").fromNow();

    var trainRecord = {
        trainName: trainName,
        destination: destination,
        frequency: frequency,
        nextArrival: nextArrival,
        timeUntil: timeUntil
    };

    database.ref('train-schedule').push(trainRecord);

    $('.train-name-input').val("");
    $('.destination-input').val("");
    $('.frequency-input').val("");
    $('.arrival-input').val("");
});





