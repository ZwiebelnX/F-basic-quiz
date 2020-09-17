import "./style/index.scss";
import { fetchUserEducationInfo, fetchUserInfo } from "./scripts/fetchData";

const pathArray = window.location.pathname.split("/");
let userId = pathArray.pop();
const path = pathArray.pop();
if (!/\d+/.test(userId) || path !== "users") {
  // TODO feedback: 如果出问题，建议报错
  userId = 1;
}

// TODO feedback: 为什么需要then？
fetchUserInfo(userId).then();
fetchUserEducationInfo(userId).then();
