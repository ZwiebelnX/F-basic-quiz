import "./style/index.scss";
import { fetchUserInfo } from "./scripts/fetchData";

let userId = window.location.pathname.split("/").pop();
if (!/\d+/.test(userId)) {
  userId = 1;
}

fetchUserInfo(userId).then();
