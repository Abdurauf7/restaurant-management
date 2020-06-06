import https from "./httpService";
import { apiUrl } from "../config.json";
import { openNotification } from "../components/custom/";

export function getDishes() {
  return https.get(apiUrl + "dish");
}

export function addDishes(values) {
  const body = { ...values };
  return https.post(apiUrl + "dish/add", body).then(res => {
    if (res.data.status === 202) {
      return window.location.reload();
    } else if (res.data.status === 404) {
      return openNotification(
        "error",
        "This item already exist",
        "Check column table"
      );
    }
  });
}

export function deleteDishes(dishId) {
  https.delete(apiUrl + `dish/delete/${dishId}`).then(res => {
    if (res.data.status === 200) {
      return window.location.reload();
    }
  });
}

export function updateDishes(data) {
  https.put(apiUrl + "dish/edit", data).then(res => {
    return window.location.reload();
  });
}
