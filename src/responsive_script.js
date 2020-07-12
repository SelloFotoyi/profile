$(function() {
    $("#twitterIcon").mouseenter(function () {

        $("#twitterIcon").attr("src", "src/twitter_blue.png");
        $(`#twitterIcon`).css({"width": "20px", "height": "20px"});

    });
    $("#twitterIcon").mouseleave(function () {
        $("#twitterIcon").attr("src", "src/twitter_black.png");
        $("#twitterIcon").attr("title", "Twitter");
        $(`#twitterIcon`).css({"width": "20px", "height": "20px"});
    });

    $("#linkedInIcon").mouseenter(function () {

        $("#linkedInIcon").attr("src", "src/linkedIn_blue.png");
        $(`#linkedInIcon`).css({"width": "20px", "height": "20px"});

    });
    $("#linkedInIcon").mouseleave(function () {
        $("#linkedInIcon").attr("src", "src/linkedIn_black.png");
        $("#linkedInIcon").css({"width": "20px", "height": "20px"});
    });

    $("#githubIcon").mouseenter(function () {

        $("#githubIcon").attr("src", "src/github_blue.svg");
        $(`#githubIcon`).css({"width": "20px", "height": "20px"});

    });
    $("#githubIcon").mouseleave(function () {
        $("#githubIcon").attr("src", "src/github_black.png");
        $("#githubIcon").css({"width": "20px", "height": "20px"});
    });

    $("#openSideNav").mouseenter(function () {
        $("#openSideNav").css("cursor","pointer");
        $("#openSideNav").css("cursor","pointer");
    });

    $("#openSideNav").on("click",function () {
       $("#openSideNav").hide();
       $("#sideNav").animate({
          width: "100%"
       },500);
    });

    $("#navX").on("click", function () {
        $("#sideNav").animate({
            width: "0"
        },500);
        $("#openSideNav").show();
    });

    $("#toSKills").on("click", function () {
        $("#sideNav").animate({
            width: "0"
        },500);

        $('document','body').animate({
            scrollTop: $("#skills").offset().top
        },1000);

        $("#openSideNav").show();
    });

    let musicAppImage = $("<div></div>").html($("#musicAppImage").html());
    $("#musicAppImage").mouseenter(function(){
        $(this).html($("#musicAppDetail").html());
    });

    $("#musicAppImage").mouseleave(function(){
        $(this).html(musicAppImage.html());
    });
});