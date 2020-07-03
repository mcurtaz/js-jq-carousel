$(document).ready(function(){

  $(".slider-wrapper .fa-chevron-right").click( // al click sulla freccia a destra richiamo la funzione immagine successiva
    function() {
      nextImg();
    });

  $(".slider-wrapper .fa-chevron-left").click(function(){ // al click sulla freccia a sinistra richiamo la funzione immagine precedente
    prevImg()
  });

  $(document).keydown(function(){ // keydown funge da eventlistener su i tasti della tastiera in posizione down (premuti) keyup sui tasti rilasciati una volta premuti
    console.log(event.which);
    if(event.which == 39){ //alla pressione del tasto codificato con 39 che sarebbe la freccia destra richiamo la funzione immagine successiva
      nextImg();
    } else if (event.which == 37){ //alla pressione del tasto codificato con 37 che sarebbe la freccia sinistra richiamo la funzione immagine precedente
      prevImg();
    }
  });

});


// ----------------- FUNCTION --------------

// funzione che scorre avanti l'immagine e muove il pallino della nav
function nextImg() {
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
}

// funzione che scorre indietro l'immagine e muove il pallino della nav

function prevImg() {

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

}
