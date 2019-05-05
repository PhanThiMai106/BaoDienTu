

function showTask(n) {
  var x = document.getElementsByClassName("CKEditor");
 

for (var i = 0; i < x.length; i++) {
   x[i].style.display = "none";  
   }
  x[n-1].style.display = "block";  
}

function previewFile(){
  var preview = document.querySelector('img'); //selects the query named img
  var file    = document.querySelector('input[type=file]').files[0]; //sames as here
  var reader  = new FileReader();

  reader.onloadend = function () {
      preview.src = reader.result;
  }

  if (file) {
      reader.readAsDataURL(file); //reads the data as a URL
  } else {
      preview.src = "";
  }
}

previewFile();  //calls the function named previewFile()