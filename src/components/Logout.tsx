import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { rootApi } from "../services/rootApi";
import { logout } from "../redux/slices/AuthSlice";
import { clearUserData } from "../redux/slices/UserSlice";

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    navigate("/login");
    dispatch(rootApi.util.resetApiState());
    dispatch(logout());
    dispatch(clearUserData());
  };
  return <p onClick={handleLogout}>Đăng Xuất</p>;
}
