import { Outlet } from "react-router-dom";
import "./TracksStep.css";

export default function FrontLayout() {
  return (
    <div className="front-layout">
      <Outlet />
    </div>
  );
}
