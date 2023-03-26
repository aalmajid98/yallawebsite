//translate user given name to arabic
var userText = document.getElementById("nameText");
var bttn = document.getElementById("trSubmit");

google.load("language", "1")
function translate(name) {
    google.language.translate(name, "en","ar", function(output) {
    alert(output.translation);
    });
}
google.setOnLoadCallback(translate(userText));
bttn.onclick = function() {
    translate(userText.value);
};

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

document.addEventListener("DOMContentLoaded", function() {
    const getDataBtn = document.getElementById("getData");
    const resultDiv = document.getElementById("result");

    if (getDataBtn) {
        getDataBtn.addEventListener("click", async() => {
           try {
               const response = await fetch("http://localhost:3000/api/data");
               const data = await response.json();
               resultDiv.innerHTML = data.message;
            }  catch (error) {
                console.log("Error fetching data:", error);
                resultDiv.textContent = "Error fetching data";
            }
        });
    }
});