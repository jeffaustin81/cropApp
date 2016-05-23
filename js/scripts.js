$(document).ready( function(){
  var countyListItem = $('nav ul li:first-child');
  var cropListItem = $('nav ul li:last-child');

  $(countyListItem).append('<p>Multnomah County</p>');
  $(cropListItem).append('<p>Apples</p>');
});
