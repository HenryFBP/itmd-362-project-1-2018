$('document').ready(function() {
  console.log("Doc is ready!")
  
  
})


$('#sign-up').on("submit", function(e) {
  e.preventDefault();
  
  window.alert('Thank you, ' + $('#email').val() + ".")
  
  $('html').append("SUBMITTED?!?!")
})
