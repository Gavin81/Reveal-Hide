const button = document.querySelector('reveal');
const Nikola = document.querySelector('Tesla');

const pressButton = document.querySelector('.pressButton');
const pressMe = document.querySelector('#pressMe');


$('.reveal').click(function(){
	$('.Tesla').slideToggle(900);
});





// NIKOLA TESLA REVEAL FUNCTION
// $(document).ready(function () {
// 	$(".reveal").click(function () {
// 		$(".Nikola").slideToggle(1000);
// 	});
// });



//THE VOLTAIRE QUOTE REVEAL BUTTON
const $button = $('<button>?</button>');
$('.Voltaire').append($button);

$('.Voltaire span').hide();

$('.Voltaire button').click(function () {
	$('.Voltaire span').show();

	$('.Voltaire button').hide();
});





// const $one = $('<button>Is reincarnation true/fact?</button>');
// $('.one').append($one);

// $('.one span').hide();

// $('.one button').click(function () {
// 	$('.one span').show();

// 	$('.one button').hide();
// });


// const $two = $('<button>Can we prove reincarnation to be fact/true?</button>');
// $('.two').append($two);
// $('.two span').hide();

// $('.two button').click(function () {
// 	$('.two span').show();
// 	$('.two button').hide();
// });



// const $three = $('<button>How do we learn or discover our past lives?</button>');
// $('.three').append($three);
// $('.three span').hide();

// $('.three button').click(function () {
// 	$('.three span').show();
// 	$('.three button').hide();
// });



// const $four = $('<button>What is the science behind reincarnation?</button>');
// $('.four').append($four);
// $('.four span').hide();

// $('.four button').click(function () {
// 	$('.four span').show();
// 	$('.four button').hide();
// });



// const $five = $('<button>Did the church take reincarnation out of the bible?</button>');
// $('.five').append($five);
// $('.five span').hide();

// $('.five button').click(function () {
// 	$('.five span').show();
// 	$('.five button').hide();
// });



// const $six = $('<button>When we die, is that it? The end?</button>');
// $('.six').append($six);
// $('.six span').hide();

// $('.six button').click(function () {
// 	$('.six span').show();
// 	$('.six button').hide();
// });



// const $seven = $('<button>Are there arguments against reincarnation?</button>');
// $('.seven').append($seven);
// $('.seven span').hide();

// $('.seven button').click(function () {
// 	$('.seven span').show();
// 	$('.seven button').hide();
// });




function myFunction(){
	var x = document.getElementById("Nikola");
	if (x.style.display === "none"){
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}





// $(document).ready(function(){
// 	// $('#hide').click(function(){
// 	// 	$('.Nikola').hide();
// 	// });

// 	$('#reveal').click(function(){
// 		$('.Nikola').toggle();
// 	});

// });




// pressButton.addEventListener('mouseover', () => {
// 	pressButton.style.backgroundColor = 'turquoise';

// 	pressMe.addEventListener('click', () => {
// 		pressMe.style.backgroundColor = 'aqua';
// 		pressMe.style.color = 'red';
// 		pressMe.style.border = '5px dashed #0095e6';
// 	});

// });




