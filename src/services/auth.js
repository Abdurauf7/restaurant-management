import jwtDecode from "jwt-decode";
import https from "./httpService";
import { apiUrl, admin, user, name } from "../config.json";
import { openNotification } from "../components/custom";

export function login(values, history) {
  return https.post(apiUrl + "user/login", values).then(res => {
    localStorage.setItem(admin, res.data.admin);
    localStorage.setItem(user, res.data.user);
    localStorage.setItem(name, res.data.data);
    if (res.data.status === 200) {
      history.replace("/admin");
      openNotification("success", `${res.data.data} Successfully logged in`);
    } else if (res.data.status === 302) {
      history.replace("/user");
      openNotification("success", `${res.data.data} Successfully logged in`);
    } else if (res.data.status === 401) {
      return openNotification(
        "error",
        "Email or Password is not valid",
        "Please retype Email or Password"
      );
    } else if (res.data.status === 404) {
      return openNotification(
        "error",
        "Email or Password is not valid",
        "Please retype Email or Password"
      );
    }
  });
}

export function getAdmin() {
  try {
    const jwt = localStorage.getItem(admin);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
export function getUser() {
  try {
    const jwt = localStorage.getItem(user);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
