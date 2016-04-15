jQuery(document).ready(function(){

    (function (){
        var toremove = [
            document.getElementById("signwall"),
            document.getElementById("pw-mask"),
            document.getElementById("pw-content")];

        toremove.forEach(function(e){
            if(e) e.parentNode.removeChild(e);
        });
        console.log("Willy is fucking free ;)");
    })();

    document.body.parentNode.style = "";
    
});


