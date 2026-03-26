function showMessage(message) {
    alert(message);
}

function goToPage(page) {
    window.location.href = page;
}

function showDate() {
    var output = document.getElementById("today-display");
    if (output) {
        output.textContent = "Today's date is " + new Date().toDateString();
    }
}

function viewProduct(productName) {
    alert(productName + " is one of our featured fashion house products.");
}

function showProductCount() {
    var cards = document.querySelectorAll(".product-card").length;
    var output = document.getElementById("product-count");
    if (output) {
        output.textContent = "There are " + cards + " featured products on this page.";
    }
}

function showMember(memberName) {
    alert(memberName + " is part of the Board of Trustees.");
}

function highlightTrustees() {
    var members = document.querySelectorAll(".member");
    for (var i = 0; i < members.length; i++) {
        members[i].style.border = "2px solid black";
        members[i].style.padding = "10px";
    }
    var note = document.getElementById("trustee-note");
    if (note) {
        note.textContent = "All trustees have been highlighted.";
    }
}

function countEvents() {
    var total = document.querySelectorAll("#events-list p").length;
    var output = document.getElementById("event-count");
    if (output) {
        output.textContent = "There are " + total + " upcoming events listed.";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var appointmentForm = document.getElementById("appointment-form");
    if (appointmentForm) {
        appointmentForm.addEventListener("submit", function (event) {
            event.preventDefault();
            var name = document.getElementById("full-name").value;
            var service = document.getElementById("service").value;
            var result = document.getElementById("appointment-result");
            result.textContent = name + ", your " + service + " request has been received.";
            appointmentForm.reset();
        });
    }
});
