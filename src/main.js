// //BUSINESS LOGIC
//
// //UI LOGIC
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import './styles.css';
var Triangle = require('./triangle.js').triangleModule;

$(document).ready(function() {
  $("#btn").click(function() {

    var sideA = parseInt($('#side-a').val());
    var sideB = parseInt($('#side-b').val());
    var sideC = parseInt($('#side-c').val());

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
      $("#result").text("Please enter a number!");
    } else {
      var triangle = new Triangle(sideA, sideB, sideC);
      $('#result').text('Your triangle type is: ' + triangle.checkTriangle() + '!');
    }
  });
});
