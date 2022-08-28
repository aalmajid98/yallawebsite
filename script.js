//translate user given name to arabic
var userText = document.getElementById("nameText");
var bttn = document.getElementById("trSubmit");

google.load("language", "1")
function translate(name) {
    google.language.translate(name, "en","fr", function(output) {
    alert(output.translation)
    })
}
google.setOnLoadCallback(translate(userText));

bttn.onclick = translate(userText);

//typing animation
const text = document.querySelector(".typeWord");

const textLoad = () => {
    setTimeout(() => {
    text.textContent = "الكون";
    }, 0);
    setTimeout(() => {
    text.textContent = "الحب";
    }, 2000);
    setTimeout(() => {
    text.textContent = "الأحلام";
    }, 4000);
}

textLoad();
setInterval(textLoad, 6000);
