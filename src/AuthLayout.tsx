import { Outlet } from "react-router";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { closeSnackbar } from "./redux/slices/SnackbarSlice";
import { Alert, Snackbar } from "@mui/material";
import { useAppSelector } from "./redux/store";

export default function AuthLayout() {
  const { open, type, message } = useAppSelector((state) => state.snackbar);
  const dispatch = useDispatch();
  return (
    <>
      <Outlet />
      <Footer />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => dispatch(closeSnackbar())}
      >
        <Alert
          // onClose={handleClose}
          severity={type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
