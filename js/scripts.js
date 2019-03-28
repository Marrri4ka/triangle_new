
//BUSINESS LOGIC
var checkTriangle = function(a, b, c) {
  var triangleType;
  if(a === b && b === c && a === c){
    triangleType = 'equilateral';
  } else if (a+b<=c || a+c<=b || a+c<=b){
    triangleType = "invalid";
  } else if(a === b || b === c || a === c){
    triangleType = 'isosceles';
  } else {
    triangleType = 'scalene';
  }
  return triangleType;
};

//UI LOGIC
$(document).ready(function(){
  $("#btn").click(function(){

    var sideA = parseInt($('#side-a').val());
    var sideB = parseInt($('#side-b').val());
    var sideC = parseInt($('#side-c').val());

    if(isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
      $("#result").text("Please enter a number!");
    } else {
      $('#result').text('Your triangle type is: ' + checkTriangle(sideA, sideB, sideC) + '!');
    }
  });
});
