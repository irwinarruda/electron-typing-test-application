const myAccountButton = $("#my-account");
const typingTestButton = $("#typing-test");
const configsButtom = $("#configs");

myAccountButton.on("click", (event) => {
    $("#root").load("pages/my-account.html").hide().fadeIn("slow");
    $(event.target).attr("class", "active");
    typingTestButton.removeAttr("class");
    configsButtom.removeAttr("class");
    $(".menu-container").animate({left: '-100%'});
});

typingTestButton.on("click", (event) => {
    $("#root").load("pages/typing-test.html").hide().fadeIn("slow");   
    $(event.target).attr("class", "active");
    myAccountButton.removeAttr("class");
    configsButtom.removeAttr("class");
    $(".menu-container").animate({left: '-100%'});
});

configsButtom.on("click", (event) => {
    $("#root").load("pages/configs.html").hide().fadeIn("slow");
    $(event.target).attr("class", "active");
    myAccountButton.removeAttr("class");    
    typingTestButton.removeAttr("class");
    $(".menu-container").animate({left: '-100%'});
});

$(document).on("mousemove", (event) => {
    const browserWidth = $(window).width();
    if(browserWidth < 900 && browserWidth - event.pageX >= 0.87 * browserWidth) {
        $(".menu-arrow").fadeIn(300);
    } else {
        $(".menu-arrow").fadeOut(300);
    }
});

$(".menu-arrow").on("click", () => {
    $(".menu-container").animate({left: '0px'});
});

$(".x-symbol").on("click", () => {
    $(".menu-container").animate({left: '-100%'});
});
