

var loadDay =  function (i){

    if(i === 1)
{  alert(1);
          return Monday;
   }   else if(i === 2)
           return Tuesday;
    else if(i == 3)
           return Wednestday ;
    else if(i == 4)
           return Thursday;
    else if(i == 5)
           return Friday;
    else if(i == 6)
           return Saturday;
    else
           return Sunday;


}

function loadDate() {
  var weekday = new Array(7);
   weekday[0] = "Sunday";
   weekday[1] = "Monday";
   weekday[2] = "Tuesday";
   weekday[3] = "Wednesday";
   weekday[4] = "Thursday";
   weekday[5] = "Friday";
   weekday[6] = "Saturday";

    var today = new Date();

     var n = weekday[today.getDay()];
    var date =  n + ',' + today.getDate()  + ' - ' + (today.getMonth() + 1) + ' - ' + today.getFullYear();
    document.getElementById("dateTime").innerHTML = date;
}



function ShowLoginForm(){

  document.getElementById('box').style.display = 'block';
  document.getElementById('main').style.display = "none";

}

function Login(){
  document.getElementById('box').style.display = "none";
  document.getElementById('main').style.display = "block";



}

function ShowSignUpForm(){
  document.getElementById('signIn').style.display = "block";
  document.getElementById('main').style.display = "none";

}

function SignUp(){
  document.getElementById('signIn').style.display = "none";
  document.getElementById('main').style.display = "block";

}

function home(){
  document.getElementById('category').style.display = 'none';
}
function politic(){
    document.getElementById('category').style.display = 'block';
  document.getElementById('category').innerHTML= 'Viet Nam News > Politics&Laws';
}
function economy(){
  document.getElementById('category').style.display = 'block';

  document.getElementById('category').innerHTML= 'Viet Nam News > Economy';
}
function life(){
  document.getElementById('category').style.display = 'block';

  document.getElementById('category').innerHTML= 'Viet Nam News > Life&Style';
}
function sport(){
  document.getElementById('category').style.display = 'block';

  document.getElementById('category').innerHTML= 'Viet Nam News > Sports';
}
function environment(){
  document.getElementById('category').style.display = 'block';

  document.getElementById('category').innerHTML= 'Viet Nam News > Environment';
}




window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    if (document.body.scrollTop >= 2000 || document.documentElement.scrollTop >= 2000) {
      document.getElementById("footer").style.display = "block";
    }else{
      document.getElementById("footer").style.display = "none";

    }
    document.getElementById("stickyMenu").style.display = "block";
  } else {
    document.getElementById("stickyMenu").style.display = "none";
  }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
