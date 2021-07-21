$(function(){

  $('[data-toggle="tooltip"]').tooltip()

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var gato = this.hash;
      $('html, body').animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;

      });
    }
  });

  $(".card-img-top").click(function(){
  $(".card-body").toggle();

  });







});
