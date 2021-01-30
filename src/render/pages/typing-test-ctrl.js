$("#real-reset-button").on("click", () => {
    console.log("aqui")
    $(".typing-test-active-bar").animate({ left: "0px" });
});

$("#space-reset-button").on("click", () => {
    $(".typing-test-active-bar").animate({ left: "50.3%" }); 
});