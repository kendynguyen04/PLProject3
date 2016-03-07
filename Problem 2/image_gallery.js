
$(document).ready(function() {
    $("a").click(function(evt) {
        evt.preventDefault();
        document.getElementById('caption').innerHTML = $(this).attr("title");
        document.getElementById('image').src = $(this).attr("href");
    });
});