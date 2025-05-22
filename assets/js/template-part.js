// header part

function loadHeader() {
    fetch("/header.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then((data) => {
            document.getElementById("headerPart").innerHTML = data;
        })
        .catch((error) => console.error("Error loading header:", error));
}

// Load the header when the DOM is fully load3
document.addEventListener("DOMContentLoaded", loadHeader);

// footer part
function loadFooter() {
    fetch("/footer.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then((data) => {
            document.getElementById("footerPart").innerHTML = data;
        })
        .catch((error) => console.error("Error loading footer:", error));
}

// Load the footer when the DOM is fully load3
document.addEventListener("DOMContentLoaded", loadFooter);
