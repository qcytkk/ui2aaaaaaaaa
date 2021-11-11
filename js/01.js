$(function () {
    $("#aa").click(function () {
        $("#aa").removeClass("aatr15").addClass("aatr90");

        $("#le1 img").animate({
            width: "940px",
            height: "940px",
            top: "0px",
            left: "-20px"
        }, 120);
        $("#ri1 img").animate({
            width: "940px",
            height: "940px",
            top: "0px",
            right: "-100px"
        }, 120);
        // $("#le1").animate({ width: "35%" }, 800)
        setTimeout(function () {
            $("#le1").animate({ width: "35%" }, 320);
        }, 300);

        $("#le1").removeClass("le1c1");
        $("#le1").addClass("le1c2");
        $("#ri1").removeClass("ri1c1");
        $("#ri1").addClass("ri1c2");

        $("#aa").animate(function () {
            $("#aa").removeClass("aatr15").addClass("aatr90");
        }, 300);

        setTimeout(function () {
            $("#aa").animate({ left: "-350px" }, 300);
        }, 300);

        // setTimeout()延迟方法函数的执行
    })
})