$(document).ready(function(){
  // <!-- TODO get the change color JQ to work -->
    //; animate
    $("#animate").click(function(){
        $(this).animate({
            "height": "200px",
            "width": "50px"
        });
    });

    // with time parameter
    $("#animate-time").click(function(){
        $(this).animate({
            "height": "200px",
            "width": "50px"
        }, 500);// this is the time meter
    });

    // with callback
    $("#animate-callback").click(function(){
        $(this).animate({
            "height": "200px",
            "width": "60px"
        }, 500, function(){
            $(this).animate({"background-color": "red"});
        })
    });    
    $("#animate-callback").click(function(){
        $(this).animate({
            "height": "60px",
            "width": "300px"
        }, 2500);
    });
        $("#animate-callback").click(function(){
        $(this).animate({
            backgroundColor: "red"
        }, 260);
    });
    // considering defining your callback function earlier in your js file to 
    //clean up your code    
    function changeColor(){
        $(this).animate({"background-color": "red"});
    }
    

    
});
