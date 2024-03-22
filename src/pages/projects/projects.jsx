import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

export default function Projects() {
  return (
    <>
      <Navbar />
      <h2>Projects</h2>
      <Outlet />
    </>
  );
}
