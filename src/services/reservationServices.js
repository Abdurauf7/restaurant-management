import httpService from "./httpService";
import { apiUrl } from "../config.json";
import { openNotification } from "../components/custom";

export function getReservation() {
  return httpService.get(apiUrl + "reservation");
}

export function addReservation(data) {
  return httpService.post(apiUrl + "reservation/add", data).then(res => {
    if (res.data.status === 200) {
      window.location.reload();
    } else if (res.data.status === 404) {
      openNotification(
        "error",
        "Table already reserved",
        "Check reserved table"
      );
    }
  });
}

export function deleteReservationItem(item) {
  return httpService.delete(apiUrl + `reservation/delete/${item}`).then(res => {
    if (res.data.status === 200) {
      window.location.reload();
    } else if (res.data.status === 404) {
      openNotification(
        "error",
        "Reserved Table not exist",
        "Check reserved table"
      );
    }
  });
}

export function EditReservation(data) {
  return httpService.put(apiUrl + "reservation/edit", data).then(res => {
    if (res.data.status === 200) {
      window.location.reload();
    } else if (res.data.status === 404) {
      openNotification("error", "Editable Table not Exist", "Check connection");
    }
  });
}
