import { isLoggedIn, removeToken } from "../services/auth";

function Logout() {
  if (isLoggedIn()) {
    removeToken();
  }
  window.location.href = "/login";
}

export default Logout;
