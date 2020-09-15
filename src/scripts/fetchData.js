const fetchUserInfo = async (userId) => {
  const response = await fetch(`http://localhost:8080/users/${userId}`);
  const data = await response.json();
  document.getElementById("basic-info-name").innerText = data.name;
  document.getElementById("basic-info-age").innerText = `${data.age}YO`;
};

const fetchUserEducationInfo = async (userId) => {
  const response = await fetch(
    `http://localhost:8080/users/${userId}/educations`
  );
  const data = await response.json();
  console.log(data);
};

export { fetchUserInfo, fetchUserEducationInfo };
