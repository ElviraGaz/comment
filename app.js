var main = function() {
"use strict";

    var addComment = function(event){
        if($(".comment-input input").val()!=="") {
            var $new_comment = $("<p>").text($(".comment-input input").val());
            $(".comments").append($new_comment);
            $(".comment-input input").val("");
        }
    };

$(".comment-input button").on("click", addComment);
    $(".comment-input").on("keypress", function (event) {
        if(event.keyCode===13)
            addComment();

    });
};
$(document).ready(main);