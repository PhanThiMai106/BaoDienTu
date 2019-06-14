

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
    var today = new Date();
    var date = today.getDate()  + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    document.getElementById("dateTime").innerHTML = date;
}


