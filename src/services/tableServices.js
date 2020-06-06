import https from "./httpService";
import { apiUrl } from "../config.json";
import { openNotification } from "../components/custom";

export function getTable() {
  return https.get(apiUrl + "table");
}

export function deleteItems(dataId) {
  return https.delete(apiUrl + `table/delete/${dataId}`).then(res => {
    if (res.data.status === 200) {
      window.location.reload();
    } else if (res.data.status === 404) {
      openNotification("error", "Can't delete table");
    }
  });
}
export function addTables(data) {
  return https.post(apiUrl + "table/add", data).then(res => {
    if (res.data.status === 200) {
      window.location.reload();
    } else if (res.data.status === 404) {
      openNotification("error", "Table already exist", "Check table Column");
    }
  });
}

export function editTables(data) {
  return https.put(apiUrl + "table/edit", data).then(res => {
    if (res.data.status === 200) {
      window.location.reload();
    }
  });
}
