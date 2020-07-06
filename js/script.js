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


  // ---------------  BONUS -------------

  $(".nav i").click( function(){
    console.log($(this).index());
    var indice = $(this).index(); //salvo l'indice del pallino cliccato in una variabile. In teoria la funzione index restituisce l'indice di un elemento html tipo array. un numero che indentifica nell html in che posizione l'elemento selezionato è rispetto ai suoi fratelli. si parte a contare da 0

    //rimuovo la classe active da immagine e pallino attualmente attivi
    $(".images img.active").removeClass("active");
    $(".slider-wrapper .nav .fa-circle.active").removeClass("active");

    // do la classe active al pallino cliccato
    $(this).addClass("active");

    //$(".images img").eq(indice).addClass("active");
    // eq seleziona un elemento per indice. quindi dandogli l'indice del pallino cliccato seleziona l'immagine con indice corrispondente

    // altro modo per selezionare l'immagine è il selettore css nth-child. per dare una variabile al posto di nth si mette tra virgolette (per interrompere la stringa) e tra due "+"

    $(".images > img:nth-child(" + (indice + 1) + ")").addClass("active"); // +1 perchè indice parte da 0 mentre nth-child conta da 1

    // si può utilizzare anche .get() che funziona come .eq() ma .get() restituisce solo il tag html .eq() restituisce un oggetto jquery (su cui quindi si possono fare al tre operazioni). Per fare altre operazioni su tag trovati con .get() bisognerebbe rimetterli in $().

    //$(".images img").get(indice).addClass("active");
    
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
