const isRequestSuccess = (status) => {
  return status >= 200 && status <= 299;
};

const fetchUserInfo = async (userId) => {
  const basicInfoName = document.getElementById("basic-info-name");
  const basicInfoAge = document.getElementById("basic-info-age");
  const aboutMeContent = document.getElementById("about-me-content");
  const avatar = document.getElementById("avatar-image");
  const response = await fetch(`http://localhost:8080/users/${userId}`);
  if (isRequestSuccess(response.status)) {
    const data = await response.json();
    basicInfoName.innerText = data.name;
    basicInfoAge.innerText = `${data.age}YO`;
    aboutMeContent.innerText = data.description;
    avatar.setAttribute("src", data.avatar);
  }
};

const fetchUserEducationInfo = async (userId) => {
  const response = await fetch(
    `http://localhost:8080/users/${userId}/educations`
  );
  const data = await response.json();
  const educationList = document.getElementById("education-list");
  data.forEach((education) => {
    const newEducationNode = document.createElement("li");
    newEducationNode.innerHTML = `
      <div class="education-item-container">
        <h2 class="education-item-year">${education.year}</h2>
        <div class="education-item-content">
        <h3 class="education-item-title">${education.title}</h3>
        <p class="education-item-description">${education.description}</p>
      </div>
    `;
    educationList.appendChild(newEducationNode);
  });
};
export { fetchUserInfo, fetchUserEducationInfo };
