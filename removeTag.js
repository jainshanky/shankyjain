var event = new Event('RemoveTag');

function removeTag() {
    var ancLinks = document.getElementsByTagName('a');
    if (ancLinks && ancLinks.length >= 0) {
        for (var i = 0; i < ancLinks.length; i++) {
            if (ancLinks[i].title.indexOf("web hosting") > 0 && ancLinks[i].title.indexOf("000webhost") > 0) {
                ancLinks[i].remove();
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    removeTag();
});

window.addEventListener("RemoveTag", function(event) {
    removeTag();
});