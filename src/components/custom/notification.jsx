// Third Part
import { notification } from "antd";

// Functional Component
const openNotification = (type, message, description) => {
  notification[type]({
    message: message,
    description: description,
    duration: 2,
  });
};
export { openNotification };
