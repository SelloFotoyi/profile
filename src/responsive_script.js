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
    });

    $("#openSideNav").on("click",function () {
       $("#openSideNav").hide();
       $("#sideNav").css("visibility","visible");
    });

    $("#navX").on("click", function () {
        $("#sideNav").css("visibility","hidden");
        $("#openSideNav").show();
    });
});