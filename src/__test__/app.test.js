import fetchMock from "fetch-mock";
import { fetchUserEducationInfo, fetchUserInfo } from "../scripts/fetchData";

fetchMock.mock("http://localhost:8080/users/1", {
  id: 1,
  name: "chen",
  age: 22,
  avatar: "https://www.baidu.com",
  description: "mock test",
});
fetchMock.mock("http://localhost:8080/users/1/educations", [
  {
    id: 1,
    userId: 1,
    description: "education test 1",
    year: 2005,
    title: "education 1",
  },
  {
    id: 2,
    userId: 1,
    description: "education test 2",
    year: 2009,
    title: "education 2",
  },
]);

beforeEach(() => {
  document.body.innerHTML = `
    <div>
        <span id="basic-info-name">
        <span id="basic-info-age"></span>
        <p id="about-me-content" class="about-me-content"></p>
        <ul id="education-list"></ul>
    </div>
  `;
});

// TODO feedback: 测试未通过
test("should call fetch user info api", async () => {
  await fetchUserInfo(1);

  expect(document.getElementById("basic-info-age").innerText).toEqual("22YO");
  expect(document.getElementById("basic-info-name").innerText).toEqual("chen");
  expect(document.getElementById("about-me-content").innerText).toEqual(
    "mock test"
  );
});

test("should call fetch user education info api", async () => {
  await fetchUserEducationInfo(1);

  expect(
    document.getElementById("education-list").lastChild.textContent
  ).toContain("2005");
  expect(
    document.getElementById("education-list").lastChild.textContent
  ).toContain("education 1");
  expect(
    document.getElementById("education-list").lastChild.textContent
  ).toContain("education test 1");

  expect(
    document.getElementById("education-list").lastChild.textContent
  ).toContain("2009");
  expect(
    document.getElementById("education-list").lastChild.textContent
  ).toContain("education 2");
  expect(
    document.getElementById("education-list").lastChild.textContent
  ).toContain("education test 2");
});
