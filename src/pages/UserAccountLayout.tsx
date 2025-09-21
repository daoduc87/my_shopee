import { Outlet } from "react-router";
import SidebarUser from "../components/user/SidebarUser";

export default function UserAccountLayout() {
  return (
    <>
      <div className="mx-auto flex max-w-screen-xl gap-12 px-4 pb-[50px] pt-5">
        <SidebarUser />
        <Outlet />
      </div>
    </>
  );
}
