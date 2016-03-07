/**
 * Created by Ken on 3/6/2016.
 */

$(document).ready(function() {
    $("a").click(function() {
        $(this).prev().toggleClass();
        if($(this).prev().attr("class") != "hide") {
            this.text = "Show less";
        }
        else {
            this.text = "Show more";
        }

    });

});