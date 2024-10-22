//side-bar
$("h5.acc").on("click", function() {
    $(".inner1").animate({"width": "toggle"}, {
        duration: 300,
        step: function(now) {
            $(".open-btn").css("left", now + "px");
        }
    });
});

// let containerWidth=$('.inner1').innerWidth() //w+p
// console.log(containerWidth);
// $('section.side-bar button.btn').animate({left:`-${containerWidth}`} , 1000)
// $('h5.acc').click(function(){
//     if($('section.side-bar button.btn').css('left')=='0px'){
//         $('section.side-bar button.btn').animate({left:`-${containerWidth}`} , 1000)
//     }
//     else{
//         $('section.side-bar button.btn').animate({left:0} , 1000)
//     }
// });

//close-icon
$(".btn-close").click(function(){
    $(".inner1").fadeOut(500);
    $(".open-btn").animate({"left": "0px"}, 500)
});

// $(".btn-close").click(function(){
//     $(".inner1").animate({"width": "0"}, {
//         duration: 500,
//         complete: function() {
//             $(this).hide(); // Hide after animation completes
//         }
//     });
//     $(".open-btn").animate({"left": "0px"}, 500);
// });

//singer-slideup
$("h2").click(function(){
    $(".p").not($(this).siblings(".p")).slideUp();
    $(this).siblings(".p").slideToggle(500);  
});

//timer-builtin-library
function makeTimer() {

    var endTime = new Date("30 October 2024 9:56:00 GMT+01:00");			
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html(days + "<span> D</span>");
        $("#hours").html(hours + "<span> H</span>");
        $("#minutes").html(minutes + "<span> M</span>");
        $("#seconds").html(seconds + "<span> S</span>");		

}

setInterval(function() { makeTimer(); }, 1000);

//textarea-maxlength
$('textarea').on('input', function(){
    const textAreaLength = $('textarea').val().length; // Get the length of the textarea input
    const remainingCalc = 100 - textAreaLength; // Calculate remaining characters
    $('.char').html(remainingCalc); // Update the display
})

//spinner
// $(window).on('load', function(){
//     $('.loadingScreen').fadeOut(1000);
//     $('body').css('overflow', 'visible');
// })

$(window).on('load', function() {
    $('.loadingScreen').fadeTo(1000, 0, function() {
        $(this).hide(); // Hide after fading out
    });
    $('body').css('overflow', 'visible');
});
