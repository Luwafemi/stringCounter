$(document).ready(function () {
  $(".btn").on("click", function () {
    $("#mainbox").fadeToggle(500).fadeToggle(1000);

    alert(
      "Thank you!\nThe length of your string is " +
        $("#mainbox").val().length +
        "."
    );
    $("#mainbox").val("");
  });
});