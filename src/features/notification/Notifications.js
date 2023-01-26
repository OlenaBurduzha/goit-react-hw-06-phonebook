import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "./redux/notification.slice";

export const Notifications = () => {
  const visible = useSelector((state) => state.notifications.visible);
  const message = useSelector((state) => state.notifications.message);
  const dispatch = useDispatch();

  return (
    <Snackbar
      open={visible}
      autoHideDuration={6000}
      onClose={() => dispatch(hideNotification())}
    >
      <Alert
        onClose={() => dispatch(hideNotification())}
        severity="success"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
