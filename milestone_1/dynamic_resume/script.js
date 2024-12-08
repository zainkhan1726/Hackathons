"use strict";
// Form and Resume Section References
const form = document.getElementById("mainForm");
const resumeSection = document.getElementById("resumeSection");
// Event listener for form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Collect data from the form
    const formData = new FormData(form);
    const resumeData = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        address: formData.get("address"),
        about: formData.get("about"),
        skills: formData.get("skills").split(",").map(skill => skill.trim()),
        experience: formData.get("experience"),
        education: formData.get("education"),
    };
    // Generate resume
    generateResume(resumeData);
});
// Function to generate and display the resume
function generateResume(data) {
    resumeSection.innerHTML = `
    <h2>${data.name}</h2>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    <p>Location: ${data.address}</p>
    <h3>About Me</h3>
    <p>${data.about}</p>
    <h3>Skills</h3>
    <ul>${data.skills.map(skill => `<li>${skill}</li>`).join("")}</ul>
    <h3>Experience</h3>
    <p>${data.experience}</p>
    <h3>Education</h3>
    <p>${data.education}</p>
  `;
}
