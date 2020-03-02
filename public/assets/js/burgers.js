// The list for devoured items
var listDevoured



//Adds a burger
function addBurger(event) {
    //prevents the DOM from the default response
    event.preventDefault();
    var newBurger = {
        burger_name: $("#name").val(),
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("added new burger");
            location.reload();
        }
    );
}



//Devoured burgers
function devourBurger(event) {
    var id = $(this).data("id");

    var isDevoured = {
        devoured: true
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevoured
    }).then(
        function() {
            console.log("Changed burger to " + isDevoured);
            location.reload();
        }
    )
}

$(document).ready(function() {
    $(document).on("click", ".devour-it", devourBurger);
    $(document).on("click", '#burger-submit', addBurger);

console.log("CONNECTED");

});