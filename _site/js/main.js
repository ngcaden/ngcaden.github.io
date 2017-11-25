function equalHeight() {
    var welcomeColumn = document.getElementById("welcome-column");
    var eventColumn = document.getElementById("event-column");
    eventColumn.style.height = welcomeColumn.offsetHeight + "px";
};