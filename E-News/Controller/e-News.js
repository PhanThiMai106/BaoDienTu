

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
  document.location='home.html';
  return false;
}
function politic(){
    document.getElementById('category').style.display = 'block';
  document.getElementById('category').innerHTML= 'Viet Nam News > Politics&Laws';
  document.location='e-News-1.html';
  return false;

}
function economy(){
  document.getElementById('category').style.display = 'block';

  document.getElementById('category').innerHTML= 'Viet Nam News > Economy';
  document.location='e-News-1.html';
  return false;
}
function life(){
  document.getElementById('category').style.display = 'block';

  document.getElementById('category').innerHTML= 'Viet Nam News > Life&Style';
  document.location='e-News-1.html';
  return false;
}
function sport(){
  document.getElementById('category').style.display = 'block';


  document.location='e-News-1.html';
  document.getElementById('category').innerHTML= 'Viet Nam News > Sports';
  return false;
}
function environment(){
  document.getElementById('category').style.display = 'block';

  document.getElementById('category').innerHTML= 'Viet Nam News > Environment';
  document.location='e-News-1.html';
  return false;
}




window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    if (document.body.scrollTop >= 1000 || document.documentElement.scrollTop >= 1000) {
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


window.addEventListener("resize", myFunction);

function myFunction() {
  var w = window.innerWidth;
  var menu1 = document.getElementById("menu");
  var menu2 = document.getElementById("vnnews-nav-mobile");
  var rightColumn = document.getElementById("rightcolumn");
  var leftcolumn = document.getElementById("leftcolumn");
 
  if(w < 1000){
  menu1.style.display = "none";
   menu2.style.display = "block";

  }

  else{
    menu1.style.display = "block";
    menu2.style.display = "none";

 
  }

  if(w < 900){

    rightColumn.style.display = "none";
    leftcolumn.style.width = "100%";
  }
  if(w>=900){
    rightColumn.style.display = "block";
    leftcolumn.style.width = "60%";
  }
}



function xemchitiet(){
  document.location='e-News-detail.html';
  return true;
}


function user(){
  document.location='e-News-admin_user.html';
  return true;
}


function category(){
  document.location='e-News-admin_category.html';
  return true;
}


function artical(){
  document.location='e-News-admin_articals.html';
  return true;
}


var arrTabs = new Array("tab1", "tab2");
var currentTab = "tab1";
function showTabMRight(tab) {
    // set current tab
    currentTab = tab;
    // disable all tab
    for (var i = 0; i < arrTabs.length; i++) {
        document.getElementById(arrTabs[i]).className = "";
        document.getElementById(arrTabs[i] + "Content").style.display = "none";
    }
    // show current tab
    document.getElementById(currentTab).className = "act-tab-sidebar";
    document.getElementById(currentTab + "Content").style.display = "block";
}
