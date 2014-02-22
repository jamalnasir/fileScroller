$(function() {

    $totalFiles = $("#items li").length;
    
    $("#items ul").css("width",$totalFiles*136+"px");

    $curPosition = 0;
    $first = $("#items li:first");
    $last = $("#items li:last");

    if ($("#items li").length > 2) {
        $current = $("#items li:eq(2)");
        $curPosition = 3;
    } else {
        $current = $("#items li:eq(0)");
        $curPosition = 1;
    }

    $('.current').addClass('normal').removeClass('current');
    $($current).addClass('current').removeClass('normal');

    $("#prev").click(function() {
        if (!$current.is($($last))) {
            $("#items li a").animate({"left": "-=70px"}, 500, "linear");
            $next = $($current).next();
            $next.addClass("current").removeClass('normal');
            $($current).removeClass("current").addClass('normal');
            $current = $(".current");
            $curPosition += 1;
        }

    });

    $("#next").click(function() {
        if (!$current.is($($first))) {
            $("#items li a").animate({"left": "+=70px"}, 500, "linear");
            $prev = $($current).prev();
            $prev.addClass("current").removeClass('normal');
            $($current).removeClass("current").addClass('normal');
            $current = $(".current");
            $curPosition -= 1;
        }
    });

});