let intervalId;
document.addEventListener("DOMContentLoaded", function() {
    intervalId = setInterval(createSonar, 500); // Create a new sonar every 500ms
    setTimeout(stopAnimation, 5000); // Stop after 5 seconds
});

function createSonar() {
    const sonar = document.createElement("div");
    sonar.classList.add("sonar");
    document.querySelector(".sonar-container").appendChild(sonar);
    setTimeout(() => {
        sonar.remove(); // Remove the sonar element after animation completes
    }, 5000); // Remove after 5 seconds (adjust based on animation duration)
}

function stopAnimation() {
    clearInterval(intervalId); // Clear the interval to stop creating new sonars
}


