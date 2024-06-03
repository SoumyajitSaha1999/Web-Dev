$("div").css({
    width: "100px",
    height: "100px",
    background: "cyan",
})

// $("div").click(function(){
//     alert("div clicked");
// })

// The syntax of on is pretty much similar to add event listener that we had in JS
// $("div").on("click", function() {
//     alert("Div clicked");
// })

// Now you want when the div is clicked the width of div increase 10px
$("div").on("click", function() {
    var element = $(this);
    element.width(element.width() + 10 + "px")
})


// $("a").on("click", function() {
//     alert("anchor tag clicked")
// })

// After OK the alert message it is taking you to the Google.com and that is the defalut behavior of anchor tag. Now you want to suppress this default behavior
$("a").on("click", function(event) {
    event.preventDefault();
    alert("anchor tah clicked")
})