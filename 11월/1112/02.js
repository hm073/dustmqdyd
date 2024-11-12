$(document).ready( function() {

    $(function() {
        const $menu = $('#top_menu ul li');
        const $contents = $('#contents > div');

        $menu.click(function(){
            x.preventDefault();
            // $menu.removeClass('on');
            // $(this).addClass('on');
            $(this).addClass('on').siblings().removeClass('on');
        })
    })
}); //end