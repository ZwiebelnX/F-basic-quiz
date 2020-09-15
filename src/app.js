import "./style/index.scss";
import { fetchUserEducationInfo, fetchUserInfo } from "./scripts/fetchData";

const pathArray = window.location.pathname.split("/");
let userId = pathArray.pop();
const path = pathArray.pop();
if (!/\d+/.test(userId) || path !== "users") {
  userId = 1;
}

fetchUserInfo(userId).then();
fetchUserEducationInfo(userId).then();
