import httpService from "./httpService";
import { apiUrl } from "../config.json";
import { openNotification } from "../components/custom";

export function getOrder() {
  return httpService.get(apiUrl + "order");
}

export function Order(data) {
  return httpService.post(apiUrl + "order/add", data).then((res) => {
    if (res.data.status === 200) {
      window.location.reload();
    } else if (res.data.status === 404) {
      openNotification(
        "error",
        "Tabel already reserved",
        "Check Info or Connection"
      );
    }
  });
}

export function DelteOrder(data) {
  return httpService.delete(apiUrl + `order/delete/${data}`).then((res) => {
    if (res.data.status === 200) {
      window.location.reload();
    } else if (res.data.status === 404) {
      openNotification("error", "Error while deleting", "Check connection");
    }
  });
}

export function updateOrder(data) {
  return httpService.put(apiUrl + "order/update", data).then((res) => {
    if (res.data.status === 200) {
      window.location.reload();
    } else if (res.data.status === 404) {
      openNotification(
        "error",
        "Can't modify Ordered Items",
        "Check Connection "
      );
    }
  });
}
