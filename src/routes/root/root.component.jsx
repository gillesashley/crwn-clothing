import "./root.styles.scss";
import NavBar from "../navbar/navbar.component";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
}
