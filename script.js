function prepend() {
    var text = $("#prependText").val();
    if (text.length > 0) {
        var newP = document.createElement("p");
        newP.innerHTML = text;
        $("#tasks").prepend(newP);
        $("#prependText").val("");
    }
}

$("#prependBtn").on("click", prepend);