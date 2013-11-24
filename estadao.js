Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}


jQuery(document).ready(function(){
    var mask = document.getElementById("pw-mask");
    var content = document.getElementById("pw-content");
    var page = document.body.parentNode;
    
    function freeWilly(){
        mask.remove();
        content.remove();
        jQuery("html").css({
            "overflow"  : "auto",
            "overflowX" : "auto",
            "overflowY" : "auto"
        });
        console.log("Willy is fucking free ;)");
    }
    
    freeWilly();
});


