$(document).ready(function () {
    // Logo
    var $logo = $('#logo');
    var $hellologo = $('#helloworld');
    if (location.href.indexOf("#") != -1) {
        if (location.href.substr(location.href.indexOf("#")) != '#about') {
            $logo.show();
        }
        else {
            $hellologo.show();
        }
    }

    // Show logo 
    $('#tab-container .tab a').click(function () {

        $logo.slideDown('slow');
        $hellologo.slideUp('slow');

    });
    
    // Hide logo
    $('#tab-about').click(function () {
        $logo.slideUp('slow');
        $hellologo.slideDown('slow');
    });

    function animMeter() {
        $(".meter > span").each(function () {
            $(this)
                .data("origWidth", $(this).width())
                .width(0)
                .animate({
                    width: $(this).data("origWidth")
                }, 1200);
        });
    }

    animMeter();

    $('#tab-container').easytabs({
        animate: true,
        updateHash: true,
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        animationSpeed: 800,
        tabActiveClass: 'active'
    }).bind('easytabs:midTransition', function (event, $clicked, $targetPanel) {
        if ($targetPanel.selector == '#resume') {
            animMeter();
        }
    });
});


function ShowEmail(e, target) {
    e = e || window.event;
    if (target.text() == "Click to reveal")
        e.preventDefault()
    let m = "s1111i111t111e1@1r1111a11f11a11t1j1a111h1111111.1c11o111m".replaceAll("1", "")
    target.text(m)
    target.attr("href", "m1a1i1l1t11o1:1".replaceAll("1", "") + m)
}

