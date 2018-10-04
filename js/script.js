/* Window Load functions */

$(window).on('load',function(){
    setTimeout(function(){
        $('.main_banner .top_banner .left_section').addClass('active')
    },150);
    setTimeout(function(){
        animation_text()
        $('.main_banner .top_banner .right_section,.main_banner .top_banner .right_section .bottom_part').addClass('active')
    },350)
    setTimeout(function(){
        $('.main_banner .top_banner .right_section h1 a.btn').addClass('active')
    },500)
});


$(document).ready(function(){

});

$(window).resize(function(){

})


/* animate */
$(document).ready(function(){
    (function($) {
        $.fn.visible = function(partial) {

            var $t            = $(this),
                $w            = $(window),
                viewTop       = $w.scrollTop(),
                viewBottom    = viewTop + $w.height(),
                _top          = $t.offset().top,
                _bottom       = _top + $t.height(),
                compareTop    = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
        };
    })(jQuery);
    var win = $(window);
    var allMods = $(".made_with_member .member .box");
    var allMods1 = $(".mehr_img .und_bg");
    var allMods2 = $(".main_banner .mob_set");
    var allMods3 = $(".main_banner .mob_set .left_bottom h2");
    var allMods4 = $(".main_banner .mob_set .left_bottom h3");
    var allMods5 = $(".main_banner .stories .right");
    var allMods6 = $(".main_banner .your_readers .slider1 h2");
    var allMods7 = $(".main_banner .your_readers .slider2 #port");
    var allMods8 = $(".main_banner .your_readers .slider2 h2");
    var allMods9 = $(".main_banner .your_readers .slider2 .s_img img");
    var allMods10 = $(".main_banner .sofa .text_sofa h5");
    var allMods11 = $(".main_banner .sofa .text_sofa h2");
    var allMods12 = $(".main_banner .feed .left h5");
    var allMods13 = $(".main_banner .feed .left h2");
    var allMods14 = $(".main_banner .feed .left p");
    var allMods15 = $(".main_banner .feed .right .anim_wrap");
    var allMods16 = $(".erreichen .left h2");
    var allMods17 = $(".erreichen .left h6");
    var allMods18 = $(".erreichen .left p");
    var allMods19 = $(".erreichen .right .anim_wrap");
    var allMods20 = $(".vortel .section h3");
    var allMods21 = $(".made_with h2");
    var allMods22 = $(".made_with p");
    var allMods23 = $(".vortel .section h3");    
    var allMods24 = $(".made_with h6");    


    win.scroll(function(event) {
        allMods.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods1.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods2.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods3.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods4.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods5.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods6.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods7.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods8.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods9.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods10.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods11.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods12.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods13.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods14.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods15.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods16.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods17.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods18.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });


    win.scroll(function(event) {
        allMods19.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods20.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods21.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods22.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

    win.scroll(function(event) {
        allMods23.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });
    
    win.scroll(function(event) {
        allMods24.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function(){
                    el.addClass("come-in"); 
                },i*200);
            } 
        });
    });

});



if($(window).width() <768){
    var n = new SplitText(document.querySelector(".main_banner .top_banner .right_section h1"), {
        type: "chars, lines"
    })

    function reorderArray(e, t) {
        var r, n = [];
        switch (t) {
            case 0:
                n = e;
                break;
            case 1:
                for (r = 0; r < e.length; r++) n.unshift(e[r]);
                break;
            case 2:
                r = Math.ceil(e.length / 2);
                for (var i = r - 1; i >= 0;) n.push(e[i--]), r < e.length && n.push(e[r++]);
        }
        return n
    }
    var u = []
    for (var t = 0; t < n.lines.length; t++) {
        var r = n.lines[t].querySelectorAll("div"),
            i = reorderArray(r, Math.floor(3 * Math.random()));
        u.push(i)
    }
}


function animation_text(){
    $('.main_banner .top_banner .right_section h1 div div').each(function(i){
        TweenMax.to($(this), 1, {
            opacity: 1,
            delay:0.1*i
        });

    });
}

/* full screen mobile */
/*
$('.main_banner .full_screen').clone().prependTo(".main_banner .stories");
var _full_screen_ = 0
_full_screen_ = $('.main_banner .full_screen').outerHeight()
var _x_ = $('.main_banner .stories .full_screen').offset().top + (_full_screen_-150);
$(window).scroll(function(){
    wintop = $(window).scrollTop()
    if(wintop > _x_){
        $('.main_banner .stories .full_screen').addClass('sticky')
    }
    else{
        $('.main_banner .stories .full_screen').removeClass('sticky')
    }
});

var h = $('.main_banner .stories .full_screen').height();
$('.main_banner .stories').css('padding-top',h);
*/

//.main_banner .stories













