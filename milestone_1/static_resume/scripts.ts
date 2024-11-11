// scripts.ts
const skillsButton = document.getElementById("skillsButton") as HTMLButtonElement;
const skillsList = document.getElementById("skillsList") as HTMLUListElement;

skillsButton.addEventListener("click", () => {
  if (skillsList.classList.contains("hidden")) {
    skillsList.classList.remove("hidden");
    skillsButton.textContent = "Hide Skills";
  } else {
    skillsList.classList.add("hidden");
    skillsButton.textContent = "Show Skills";
  }
});
