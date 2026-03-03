window.addEventListener("DOMContentLoaded", function () {

    const target = document.getElementById("copyright");

    if (!target) return;

    fetch("fragments/_copyright.html")
        .then(response => response.text())
        .then(data => {
            target.innerHTML = data;
        })
        .catch(error => console.log("Error loading copyright:", error));

});