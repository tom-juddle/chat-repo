// CLICK FOSTER SCREEN 7 TRANSITION

// SCREEN 7 CHAT PROCESS

$('div.foster').click(function () {
  $('div#deviceScreen6').animate({ 'left': '-640px' }, 400);
  $('div#deviceScreen7').show(0).animate({ 'left': '0' }, 400);
});

$('div.bubble button').click(function () {
  $(this).addClass('active').delay(1000).removeClass('active');
});

var message = $('#message').val();
var replies = [
  'Hi Jonathan, nice to meet you as well.', 
  'I' / 'll just get the job details and send them over',
  'Hi Julie, Juddle here, would you like to send Jonathan the Job Details?',
  'Hi Jonathan, Here are the Job Details: Job Title: Barista Company: Starbucks Location: Islington High St<br> Pay Rate: £7.10 p/h<br>Start Date: Friday 4th August 2017<br>Start Time: 9:00pm',
  'Amazing, do you have a CV you can send over?',
  'Hi Jonathan, Juddle here, would you like to send Julie your CV?',
  'Would you be available for a shift tomorrow?',
  'Hi Julie, Juddle here, would you like to send Jonathan a formal Job Offer?',
  'Hi I’d like to offer you the job of: Barista<br>Job Start Date: Wednesday 29th May at 6am<br>Pay Rate: £7.10 p/h<br><br>Would you like to accept the job?',
  'Congratulations Jonathan, you’ve got the job, go to your job feed to start the job'
];

/*
  show = time in seconds to show.
  hide = time in seconds to hide.
  initialDelay = time in seconds to delay after pressing enter.
  position = left or right.
  typingBubble = true or false to show the animation bubble.
  person = Jon, Julie, or Juddle
  bubbleDelay = time in seconds to keep the bubble animation
*/

function chat(show, hide, initialDelay, position, typingBubble, person, bubbleDelay, message) {

  //for(i=0; i < message; i++){
  
    $('#chatWindow').append(
      //'<div id="chatContainer' + i + '"' + '>',
      '<div class=' + person + 'Profile' + '></div>',
      '<div class="chat-bubble ' + position + '">',
      '<div class="loading hideBubble">',
      '<div class="dot one"></div>',
      '<div class="dot two"></div>',
      '<div class="dot three"></div>',
      '</div>',
      '</div>',
      '<div class="bubble">' + message + '</div>',
      '</div>',
      '<div class="clear"></div>'
    );

  $('.bubble').addClass(person + 'Bubble');

  $('div.' + person + 'Profile').hide(hide).delay(initialDelay).show(show);
  $('div.' + person + 'Bubble').hide(hide).delay(initialDelay).show(show);
  $("div.loading").hide(hide).delay(initialDelay).show(show);


  //$('.chatContainer').append('<div class="jonProfile"></div>').delay(initialDelay);


  // typing bubble

  if (chat.typingBubble == true) {
    $('div.loading').removeClass('hideBubble');
    $('div.loading').addClass('showBubble');
  }
  else {
    $('div.loading').addClass('showBubble');
    $('div.loading').addClass('hideBubble');
  }
}

$(document).keypress(function (e) {

  /*for (i = 0; i < message; i++) {
    return i;
  }

  for (r = 0; r < message; r++) {
    return r;
  }*/
  console.log($('#message').val());
  if (e.which === 13) {
    chat(0, 0, 0, 'left', false, 'jon', $('#message').val());
   

    if (message.includes('julie') && (message.includes('nice') && (message.includes('meet') ))) {
      chat(0, 0, 3000, 'right', false, 'julie', 3000, replies[0]);
      $('#message').val('');
    }

    if (message.includes('more') && (message.includes('about') && (message.includes('role')))){
      chat(0, 0, 3000, 'right', false, 'julie', 3000, replies[1]);
    }
  }

  
});

$('div.footerChat').click(function () {
  $('div#deviceScreen6').hide(0);
  $('div#deviceScreen8').show(0);
});

$('div.footerSearch').click(function () {
  $('div#deviceScreen8').hide(0);
  $('div#deviceScreen6').show(0);
});2