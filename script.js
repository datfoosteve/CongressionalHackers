let $searchBtn = $("#searchBtn")
let $searchText = $("#searchText")

$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#searchText" ).autocomplete({
      source: availableTags
    });
  } );


  $( function() {

    $( "#format" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
  } );  

$searchBtn.on('click', function (event) {
    event.preventDefault();
    let $target = $(event.target)
    let $search = $target.siblings($searchText).val()
    localStorage.setItem("search", $search);
    window.location.replace("search-results.html")
});

// Below is for search bar on search-results.hmtl
// searchItem() {
    
//     let $search = localStorage.getItem("search")
//     $searchText.text = $search
    
//     fetch()

// }
