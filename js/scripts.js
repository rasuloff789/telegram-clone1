$(document).ready(function(){
  $("#chat-item").click( () => {
    $("#chat-item").toggleClass('bg-info');
    $("#done").addClass('d-inline-block');
    $("#done").toggleClass('text-white');
    $("#done").toggleClass('text-success');
    $("#time").toggleClass('text-white');
    $("#time").toggleClass('text-secondary');
    $("#chatname").toggleClass('text-white');
    $("#mute").toggleClass('text-white');
    $("#mute").toggleClass('text-secondary');
    $("#chat-author").toggleClass('text-white');
    $("#chat-author").toggleClass('text-dark');
    $("#chat-text").toggleClass('text-white');
    $("#chat-text").toggleClass('text-secondary');
    $("#pushpin").toggleClass('text-white');
    $("#pushpin").toggleClass('text-secondary');
    $("#pushpin").toggleClass('border-white');
    $("#pushpin").toggleClass('border-secondary');
  })
  $("p").dblclick(function(){
    $("#pushpin").toggleClass('d-inline-block')
  });
  $('.chat-item').children().each(function () {
    $(this).attr('disabled', 'disabled');
});


$('.chat-item').children().attr('disabled', 'disabled');

$('.chat-item').children().attr('disabled', true);

$('.chat-item').children().attr('disabled', 'true');
});





