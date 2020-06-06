import https from "./httpService";
import { apiUrl } from "../config.json";
import { openNotification } from "../components/custom/";

export function getUser() {
  return https.get(apiUrl + "user");
}

export function addUser(data) {
  return https.post(apiUrl + "user/register", data).then((res) => {
    if (res.data.status === 202) {
      window.location.reload();
    } else if (res.data.status === 404) {
      openNotification("info", "User already exist");
    }
  });
}

export function registerUser(data, history) {
  return https.post(apiUrl + "user/register", data).then((res) => {
    if (res.data.status === 202) {
      openNotification("success", "Succesfully registered");
      history.replace("/");
    } else if (res.data.status === 404) {
      openNotification("info", "User already exist");
    }
  });
}

export function deleteUser(dataId) {
  return https.delete(apiUrl + `user/delete/${dataId}`).then((res) => {
    if (res.data.status === 202) {
      window.location.reload();
    }
  });
}

export function editUser(data) {
  return https.put(apiUrl + "user/edit", data).then((res) => {
    if (res.data.status === 200) return window.location.reload();
  });
}

export function editCabinet(data) {
  return https.put(apiUrl + "user/cabinet", data).then((res) => {
    if (res.data.status === 200) {
      return window.location.replace("/");
    } else {
      openNotification("error", "Error while updating User name");
    }
  });
}
