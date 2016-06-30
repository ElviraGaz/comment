var main = function() {
"use strict";
$(".comment-input").on("click", function(event){
$(".comments").append("<p>Это новый комментарий</p>");
});
};
$(document).ready(main);