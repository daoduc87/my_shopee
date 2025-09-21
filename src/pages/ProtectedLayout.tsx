import { useEffect, type ReactNode } from "react";
import { useGetMeQuery } from "../services/rootApi";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "../redux/slices/AuthSlice";
import { Outlet, useNavigate } from "react-router";
import { useAppSelector } from "../redux/store";

interface ProtectedLayoutPropType {
  children?: ReactNode;
}
export default function ProtectedLayout({ children }: ProtectedLayoutPropType) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useAppSelector((state) => state.auth.access_token);

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  const { data, isSuccess } = useGetMeQuery(undefined, {
    skip: !accessToken,
  });
  console.log({ data });
  useEffect(() => {
    if (isSuccess) {
      dispatch(saveUserInfo(data));
    }
  }, [data, dispatch, isSuccess]);

  return (
    <>
      <div>
        {children}
        <Outlet />
      </div>
    </>
  );
}
