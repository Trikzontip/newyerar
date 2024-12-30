function fadeSceneChange(currentSceneId, nextSceneId) {
    const currentScene = document.getElementById(currentSceneId);
    const nextScene = document.getElementById(nextSceneId);

    // Add fade-out effect to the current scene
    currentScene.classList.add("fade-out");

    // Wait for the fade-out animation to complete
    setTimeout(() => {
        currentScene.style.display = "none"; // Hide the current scene
        currentScene.classList.remove("fade-out"); // Reset fade-out class

        // Display and fade-in the next scene
        nextScene.style.display = "flex";
        nextScene.classList.add("fade-in");

        // Remove the fade-in class after animation completes
        setTimeout(() => {
            nextScene.classList.remove("fade-in");
        }, 1000); // Match the duration of the fade-in animation in CSS
    }, 1000); // Match the duration of the fade-out animation in CSS
}

function chap1scene1chng() {
    fadeSceneChange("c1sc1", "c1sc2");
}

function chap1scene2chng() {
    fadeSceneChange("c1sc2", "c1sc3");
}
function redirectToPage(page) {
    window.location.href = page;
}