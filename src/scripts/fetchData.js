const isRequestSuccess = (status) => {
  return status >= 200 && status <= 299;
};

const fetchUserInfo = async (userId) => {
  const basicInfoName = document.getElementById("basic-info-name");
  const basicInfoAge = document.getElementById("basic-info-age");
  const aboutMeContent = document.getElementById("about-me-content");
  const response = await fetch(`http://localhost:8080/users/${userId}`);
  if (isRequestSuccess(response.status)) {
    const data = await response.json();
    basicInfoName.innerText = data.name;
    basicInfoAge.innerText = `${data.age}YO`;
    aboutMeContent.innerText = data.description;
  }
};

const fetchUserEducationInfo = async (userId) => {
  const response = await fetch(
    `http://localhost:8080/users/${userId}/educations`
  );
  const data = await response.json();
  console.log(data);
};
export { fetchUserInfo, fetchUserEducationInfo };
