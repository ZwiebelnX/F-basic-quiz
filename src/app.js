import "./style/index.scss";
import { fetchUserEducationInfo, fetchUserInfo } from "./scripts/fetchData";

let userId = window.location.pathname.split("/").pop();
if (!/\d+/.test(userId)) {
  userId = 1;
}

fetchUserInfo(userId).then();
fetchUserEducationInfo(userId).then();
