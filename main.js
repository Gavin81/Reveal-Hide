const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
  accordion.addEventListener('click', e => {
    let accordionBtn = accordion.querySelector('button');
    accordion.classList.toggle('active');
    if (accordionBtn.textContent === '+') {
      accordionBtn.textContent = '-';
    } else {
      accordionBtn.textContent = '+';
    }
  })
})



// NIKOLA TESLA HIDE/REVEAL FUNCTION
const button = document.querySelector('.reveal');
const Nikola = document.querySelector('.Nikola-area');

$(function() {
    $('.reveal').click(function() {
 	  $('.Nikola-area').slideToggle(1500);
  });
});



// button.addEventListener('click', (event) => {
//   const reveal = document.querySelector('.reveal');
//   const Nikola = document.querySelector('.Nikola-area');
//   if (reveal.style.display === 'none') {
//     // reveal.style.display = 'block';
//     Nikola.slideToggle(1000);
//   } else {
//     reveal.style.display = 'none';
//   }
// });


// NIKOLA TESLA REVEAL FUNCTION
// $(document).ready(function () {
// 	$(".reveal").click(function () {
// 		$(".Nikola-area").slideToggle(1000, linear);
// 	});
// });



//-------------------------------------------
//THE VOLTAIRE QUOTE REVEAL BUTTON
const $button = $('<button>?</button>');
// $('.Voltaire').append($button);

// $('.Voltaire span').hide();

// $('.Voltaire button').click(function () {

// 	$('.Voltaire span').show();
// 	// $('.Voltaire button').hide();

// });


// function myReveal() {
//   let x = document.getElementById('Voltaire');
//   // let span = document.getElementByTagName('span');
//   if ( x.style.display === 'none' ) {
//     x.style.display = 'block';
//   } else {
//     x.style.display = 'none';
//   }
// }


// const accordions = document.querySelectorAll('.accordion');
// accordions.forEach(accordion => {
//   accordion.addEventListener('click', e => {
//     let accordionBtn = accordion.querySelector('button');
//     accordion.classList.toggle('active');
//     if (accordionBtn.textContent === '+') {
//       accordionBtn.textContent = '-';
//     } else {
//       accordionBtn.textContent = '+';
//     }
//   })
// })


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




// JAVASCRIPT CODE FOR THE GAME.js FILE
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase ul');
const phrases = ['Reincarnation', 'Movies', 'Slapstick', 'Respect', 'Money', 'Time and effort'];
let missed = 0;
const startBtn = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const hearts = document.querySelectorAll('.tries img');


startBtn.addEventListener('click', () => {
  document.getElementById('overlay').style.display = "none";
});



// Generate a random number and then use that random number as an index to grab
// one of the phrases from the array.
// Using the random number to return an item from the phrases array instead of just
// the random number.

  const getRandomPhraseAsArray = (arr) => {
  // Produces a single random number based on the length of the array.
  const whichOne = Math.floor(Math.random() * arr.length);

  // Chooses the single random phrase from the array using whichOne as an index position.
  const thisOne = arr[whichOne];

  // Splits the phrase into an array of letters
  return thisOne.split('');
}
const randomPhrase = getRandomPhraseAsArray(phrases);



const addPhraseToDisplay = (arr) => {
  for ( let i = 0; i < arr.length; i++ ) {
    const li = document.createElement('li');
    li.textContent = arr[i];
    if (li.textContent !== ' '){
      li.className = 'letter';
    } else {
      li.className = 'space';
    }

    phrase.append(li);
  }
}

addPhraseToDisplay(randomPhrase);


// Create checkLetter function
const checkLetter = (button) => {
  let li = document.querySelectorAll('.letter');
  let match = null;
  for ( let i = 0; i < li.length; i++) {
    if (button.textContent === li[i].textContent.toLowerCase()){
      li[i].classList.add("show");
      match = li[i].textContent;
    }
  }
  return match;
}



const checkWin = () => {
  const liLetter = document.querySelectorAll('.letter');
  const liShow = document.querySelectorAll('.show');
  const result = document.querySelector('.title');
  if ( liLetter.length === liShow.length ){
    overlay.classList.add('win');
    result.textContent = "You've Won";
    overlay.style.display = 'flex';
    startBtn.textContent = 'Re-start Game';
  } else if (missed > 4) {
    overlay.classList.add('lose');
    result.textContent = "Oh Dear, Game Over";
    overlay.style.display = 'flex';
    startBtn.textContent = 'Re-start Game';
  }
}



// Add Event listener To Keyboard
qwerty.addEventListener('click', (event) => {
  if ( event.target.tagName === "BUTTON" ) {
    
    //console.log(event.target.textContent);
    // let button = document.querySelector('button');
    
    let button = event.target;
    event.target.classList.add('chosen');
    // button.classList.add('chosen');
    //const checkLetter = checkLetter('letter');
    const letterFound = checkLetter(button);
    //missed++;
  }
  if ( letterFound === null ){
    const hearts = document.querySelectorAll('.tries img');
    hearts[missed].src = 'img/lostHeart.jpg';
    missed ++;
    button.disabled = true;
  }
  checkWin();

});



overlay.addEventListener('click', (event) => {
  if (event.target.textContent === "Re-start Game"){
    missed = 0;
    phrase.innerHTML = '';
    const randomPhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(randomPhrase);

    for (let i = 0; i < hearts.length; i++) {
      hearts[i].src = 'img/liveHeart.jpg';
    }

    const buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('chosen');
      buttons[i].disabled = false;
    }
  }
});