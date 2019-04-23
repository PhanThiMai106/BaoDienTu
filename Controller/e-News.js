

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


(function() {
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}

	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;

			this.action();
			this.stopStart();
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;

			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );

			}, 1000);
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;

			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();

			}, false);
		}


	};

	document.addEventListener( "DOMContentLoaded", function() {

		var slider = new Slideshow( "#main-slider" );

	});


})();

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
