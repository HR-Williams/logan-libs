$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    // const adjectiveInput = $("input#adjective").val();
    // const adjective2Input = $("input#adjective2").val();
    // const codeSubjectInput= $("input#codeSubject").val();
    // const nounInput = $("input#noun").val();
    // const noun2Input = $("input#noun2").val();
    // const exclamationInput = $("input#exclamation").val();
    // const noun3Input = $("input#noun3").val();
    // const exclamation2Input = $("input#exclamation2").val();
    // const adjective3Input = $("input#adjective3").val();

    let madArray = ["adjective", "adjective2", "codeSubject", "noun", "noun2", "exclamation", "noun3", "exclamation2", "adjective3"]

    madArray.forEach(function(word) {
      let input = $("#" + word).val();
      $("." + word).append(input);
    })

    // $(".adjective").text(adjectiveInput);
    // $(".adjective2").text(adjective2Input);
    // $(".codeSubject").text(codeSubjectInput);
    // $(".noun").text(nounInput);
    // $(".noun2").text(noun2Input);
    // $(".exclamation").text(exclamationInput);
    // $(".noun3").text(noun3Input);
    // $(".exclamation2").text(exclamation2Input);
    // $(".adjective3").text(adjective3Input);

    $("#story").show();

   

  });
});