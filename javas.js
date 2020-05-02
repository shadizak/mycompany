'use strict';
var fullName

function getName(){
    fullName = prompt ("Enter Your Full Name");
    document.write('<h3> Name: '+fullName+'</h3>');
}

function getAge(){
    fullName = prompt ("Enter Your Age");
    document.write('<h3> Age: '+fullName+'</h3>');
}

function getEmail(){
    fullName = prompt ("Enter Your Email");
    document.write('<h3>Email: '+fullName+'</h3>');
}
 
function userOrder(){
  var userOrder = prompt('What would you like to order? hotel or house');
  var item = '';

  while(userOrder !== 'hotel' && userOrder !== 'house' ){
    userOrder = prompt('What would you like to order? hotel or house');
  }

  var itemNum = prompt('haw many item do you want to print');
  for(var i = 0; i< itemNum;i++){
    if(userOrder === 'hotel'){
       
      item = item + '<img src="images/hotel.png" >';

    }else if(userOrder === 'house'){
     
      item = item + '<img src="images/h.jpg" >';
    }
  }
  return item;
}

// if (hourNow > 18) {
//     greeting = 'Good evening, ';
//   } else if (hourNow > 12) {
//     greeting = 'Good afternoon, ';
//   } else if (hourNow >= 0) {
//     greeting = 'Good morning,';
//   } else {
//     greeting = 'Hi';
//   }

// document.write('<h3>'+greeting + fName +"<br>"+'First Name: '+fName  +"<br>"+'Last Name: ' +lName +"<br>"+ 'Mobile Number '+ mobile+ +"<br>"+'Email '+ email+'</h3>');
