// Type for Resume Data
type ResumeData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  skills: string[];
  experience: string;
  education: string;
}

// Form and Resume Section References
const form = document.getElementById("mainForm") as HTMLFormElement;
const resumeSection = document.getElementById("resumeSection") as HTMLElement;

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Collect data from the form
  const formData = new FormData(form);
  const resumeData: ResumeData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    address: formData.get("address") as string,
    about: formData.get("about") as string,
    skills: (formData.get("skills") as string).split(",").map(skill => skill.trim()),
    experience: formData.get("experience") as string,
    education: formData.get("education") as string,
  };

  // Generate resume
  generateResume(resumeData);
});

// Function to generate and display the resume
function generateResume(data: ResumeData) {
  resumeSection.innerHTML = `
    <h2>${data.name}</h2>
    <p >Email: ${data.email}</p>
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
