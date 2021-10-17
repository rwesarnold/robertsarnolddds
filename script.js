document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const work = document.getElementById("work").value;
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const time = document.getElementById("time").value;

  if (name === "") {
    let resp = "";
    resp += '<div class="container>';
    resp += '<div class="row">';
    resp += '<div class="col-md">';
    resp += "<br>"
    resp += "<p>Please leave your full name so we can contact you.</p>";
    resp += '</div>';
    resp += '</div>';
    document.getElementById("resp").innerHTML = resp;
    return;
  }
  if (number === "") {
    let resp = "";
    resp += '<div class="container>';
    resp += '<div class="row">';
    resp += '<div class="col-md">';
    resp += "<br>"
    resp += "<p>Please leave your phone number so we can contact you.</p>";
    resp += '</div>';
    resp += '</div>';
    document.getElementById("resp").innerHTML = resp;
    return;
  }
  if (work === "") {
    let resp = "";
    resp += '<div class="container>';
    resp += '<div class="row">';
    resp += '<div class="col-md">';
    resp += "<br>"
    resp += "<p>Please describe the work you would like to have done.</p>";
    resp += '</div>';
    resp += '</div>';
    document.getElementById("resp").innerHTML = resp;
    return;
  }
  if (day === "") {
    let resp = "";
    resp += '<div class="container>';
    resp += '<div class="row">';
    resp += '<div class="col-md">';
    resp += "<br>"
    resp += "<p>Please provide a day.</p>";
    resp += '</div>';
    resp += '</div>';
    document.getElementById("resp").innerHTML = resp;
    return;
  }
  if (month === "") {
    let resp = "";
    resp += '<div class="container>';
    resp += '<div class="row">';
    resp += '<div class="col-md">';
    resp += "<br>"
    resp += "<p>Please provide a month.</p>";
    resp += '</div>';
    resp += '</div>';
    document.getElementById("resp").innerHTML = resp;
    return;
  }
  if (year === "") {
    let resp = "";
    resp += '<div class="container>';
    resp += '<div class="row">';
    resp += '<div class="col-md">';
    resp += "<br>"
    resp += "<p>Please provide a year.</p>";
    resp += '</div>';
    resp += '</div>';
    document.getElementById("resp").innerHTML = resp;
    return;}
  if (time === "") {
    let resp = "";
    resp += '<div class="container>';
    resp += '<div class="row">';
    resp += '<div class="col-md">';
    resp += "<br>"
    resp += "<p>Please provide a time.</p>";
    resp += '</div>';
    resp += '</div>';
    document.getElementById("resp").innerHTML = resp;
    return;
  }


  const url = "https://calendarific.com/api/v2/holidays?" + "&api_key=8840719cc3c44fe5b708e18e51b6d8a5bccb2c62" + "&country=US" + "&type=national" +"&day=" + day + "&month=" + month + "&year=" + year;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let resp = "";
      if (json.response.holidays.length >= 1) {

        holiday = json.response.holidays[0].name

        resp += '<div class="container>';
        resp += '<div class="row">';
        resp += '<div class="col-md">';
        resp += "<br>"
        resp += "<p>Request could not be processed because date selected is " + holiday + " and staff will not be in office.</p>";
        resp += '</div>';
        resp += '</div>';

        document.getElementById("resp").innerHTML = resp;
      }
      else {

        resp += '<div class="container>';
        resp += '<div class="row">';
        resp += '<div class="col-md">';
        resp += "<br>"
        resp += "<p>Thank you " + name + ". You will be contacted by one of our staff within two work days to ensure your request was processed correctly.</p>"
        resp += "<p>Requested work: " + work + "</p>"
        resp += "<p>Date selected: " + month + "/" + day + "/" + year + "</p>"
        resp += "<p>Time selected: " + time + "</p>"
        resp += '</div>';
        resp += '</div>';

        document.getElementById("resp").innerHTML = resp;
      }
    });
});
