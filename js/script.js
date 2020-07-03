$(document).ready(function(){
  console.log($(".slider-wrapper .fa-chevron-right"));

  $(".slider-wrapper .fa-chevron-right").click(
    function (){

      var imgActive = $(".images img.active"); // cerco l'immagine attualmente attiva e salvo "l'indirizzo"
      var pallinoActive = $(".slider-wrapper .nav .fa-circle.active"); //replico praticamente le stesse istruzioni per spostare la classe active che colora i pallini della nav


      imgActive.removeClass("active"); // tolgo la classe active
      pallinoActive.removeClass("active");

      if (imgActive.hasClass("last")){
        $(".images img.first").addClass("active") //se l'immagine attiva ha la classe last "classe segnaposto per l'ultima immagine" do classe active all'immagine con classe "first" (classe segnaposto per la prima immagine)
        $(".slider-wrapper .nav .fa-circle.first").addClass("active");
      } else{
        imgActive.next("img").addClass("active"); // altrimenti do classe active all'immagine successiva (funzione next di jquery)
        pallinoActive.next().addClass("active");
      }
    });

    $(".slider-wrapper .fa-chevron-left").click(
      function (){

        var imgActive = $(".images img.active"); // cerco l'immagine attualmente attiva e salvo "l'indirizzo"
        var pallinoActive = $(".slider-wrapper .nav .fa-circle.active"); //replico praticamente le stesse istruzioni per spostare la classe active che colora i pallini della nav

        imgActive.removeClass("active"); // tolgo la classe active
        pallinoActive.removeClass("active");

        if (imgActive.hasClass("first")){

          $(".images img.last").addClass("active") //se l'immagine attiva ha la classe first per tornare indietro di una devo passare active all'ultima immagine con classe "last"
          $(".slider-wrapper .nav .fa-circle.last").addClass("active");

        } else{

          imgActive.prev("img").addClass("active"); // altrimenti do classe active all'immagine precedente (funzione prev di jquery)
          pallinoActive.prev().addClass("active");
        }
      });

});
