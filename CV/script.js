document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("mail").addEventListener("click", function() {
        var range = document.createRange();
        range.selectNodeContents(this);

        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");

        var message = document.createElement("div");
        message.innerHTML = "Copiado al portapapeles";
        message.classList.add("message");
        document.body.appendChild(message);

        message.classList.add("show");
        
        setTimeout(function() {
        message.classList.remove("show");

        setTimeout(function(){
        message.remove();
        }, 500);
        }, 2000);
    });

    $(document).ready(function() {
      $(".tituloColumna").click(function() {
        $(this).next(".contenidoColumna").slideToggle("slow");
      });
    });

});