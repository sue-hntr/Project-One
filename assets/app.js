  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD1nyE-SfenxVwBoxuoL92zFCEsZb0GUqo",
    authDomain: "studybuddy-bc331.firebaseapp.com",
    databaseURL: "https://studybuddy-bc331.firebaseio.com",
    projectId: "studybuddy-bc331",
    storageBucket: "studybuddy-bc331.appspot.com",
    messagingSenderId: "21013901811"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();

  // Initial Values
  var name = "";
  var streetAddress = "";
  var cityAddress = "";
  var state = "";
  var zip = "";
  var hours = "";

  // Capture Button Click
  $("#enterform").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#name").val().trim();
    streetAddress = $("#street_address").val().trim();
    cityAddress = $("#city_address").val().trim();
    state = $("#state_address").val().trim();
    zip = $("#zip_code_address").val().trim();
    hours = $("#hoursAvailable").val().trim();

    // Code for handling the push
    database.ref().push({
      name: name,
      Street: streetAddress,
      City: cityAddress,
      State: state,
      Zip: zip,
      Hours: hours,
      infoadded: firebase.database.ServerValue.TIMESTAMP
    });
    console.log(city);
  });

  // Firebase watcher .on("child_added"
  database.ref().on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv);
    console.log(sv.streetAddress);
    console.log(sv.cityAddress);
    console.log(sv.state);
    console.log(sv.zip);
    console.log(sv.hours);

    // Change the HTML to reflect
    // $("#name-display").text(sv.name);
    // $("#email-display").text(sv.email);
    // $("#age-display").text(sv.age);
    // $("#comment-display").text(sv.comment);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });







// $(document).ready(function() {
    
    //clearing out the time in the time once the time limit has been met the database
    
    //this is what will make the timer go down when the user clicks it which will start the timer from the submit button from the front screen

    //This is what will happen when the user pushes the button and page/timer for what user put in for time will start to count down
//     $("#start").on("click", function() {
//         $("start").hide();
//         start(i=0);
//     })

//     //Timer on the page that will start going down but will be hidden in backgroudn
//     function run() {
//         intervalId = setInterval(decrement, 1000);
//     }

//     function decrement() {
//         number--;
//         console.log(run);


//     }

// })