// // get reference to the form and display
// const form = document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
// const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
// const shareableLinkContainer = document.getElementById('shareable-link') as HTMLAnchorElement;
// const shareableLinkContainer = document.getElementById('download-pdf') as HTMLButtonElement;
// // Handle form submission
// form.addEventListener('submit', (event: Event) => {
//     event.preventDefault(); // prevent page reload
//     // collect input values
//     const username = (document.getElementById('username') as HTMLInputElement).value
//     const name = (document.getElementById('name') as HTMLInputElement).value
//     const email = (document.getElementById('email') as HTMLInputElement).value
//     const phone = (document.getElementById('phone') as HTMLInputElement).value
//     const education = (document.getElementById('education') as HTMLTextAreaElement).value
//     const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
//     const skills = (document.getElementById('skills') as HTMLTextAreaElement).value
// // data save in local storage
// const resumeData = {
//     name,
//     email,
//     phone,
//     education,
//     experience,
//     skills
// };
// localStorage.setItem(username, JSON.stringify(resumeData));
//     // Generate the resume contect dymacially
//     const resumeHTML = `
//     <h2><b>Editable Resume</b></h2>
//     <h3>Personal Information</h3>
//     <p><b>Name:</b><span contenteditable="true">${name}</span></p>
//     <p><b>email:</b><span contenteditable="true">${email}</span></p>
//     <p><b>phone:</b><span contenteditable="true">${phone}</span></p>
//     <h3>Education</h3>
//     <p contenteditable="true">${education}</p>
//     <h3>Experience</h3>
//     <p contenteditable="true">${experience}</p>
//     <h3>Skills</h3>
//     <p contenteditable="true">${skills}</p>
//     `;
//     // Display  generated resume
//     resumeDisplayElement.innerHTML = resumeHTML;
//     // generate shareable URL username only
//     const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
//     //display the shareable link
//     shareableLinkContainer.style.display = 'block';
//     shareableLinkElement.href = shareableURL;
//     shareableLinkElement.textContent = shareableURL;
// });
// // Handle PDF download
// downloadPdfButton.addEventListener('click', () => {
//     window.print();
// });
// // prefill the form based on the username in the URL
// window.addEventListener("DOMContent" , () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const username = urlParams.get('username');
//     if (username) {
//         const savedResumeData = localStorage.getItem(username);
//         if(savedResumeData) {
//             const resumeData = JSON.parse(savedResumeData);
//             (document.getElementById('username') as HTMLInputElement).value = username;
//             (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
//             (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
//             (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
//             (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
//             (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
//             (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
//         }
//     }
// });
// Get references to the form and display elements
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save data in local storage
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generate the resume content dynamically
    var resumeHTML = "\n        <h2><b>Editable Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        \n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate the shareable URL with the username
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
