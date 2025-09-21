import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { closeSnackbar } from "./redux/slices/SnackbarSlice";
import { Alert, Snackbar } from "@mui/material";
import { useAppSelector } from "./redux/store";
import ScrollToTop from "./components/ScrollToTop";

export default function RootLayout() {
  const { open, type, message } = useAppSelector((state) => state.snackbar);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Snackbar
        open={open}
        autoHideDuration={4000}
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
      <ScrollToTop />
    </>
  );
}
