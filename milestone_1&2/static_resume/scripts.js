"use strict";
// scripts.ts
const skillsButton = document.getElementById("skillsButton");
const skillsList = document.getElementById("skillsList");
skillsButton.addEventListener("click", () => {
    if (skillsList.classList.contains("hidden")) {
        skillsList.classList.remove("hidden");
        skillsButton.textContent = "Hide Skills";
    }
    else {
        skillsList.classList.add("hidden");
        skillsButton.textContent = "Show Skills";
    }
});
