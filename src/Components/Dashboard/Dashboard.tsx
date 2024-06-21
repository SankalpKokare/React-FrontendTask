import { useSelector } from "react-redux";
import Counter from "../Counter/Counter";
import "./Dashboard.css";
import { useEffect } from "react";

export default function Dashboard() {
  const countHistory = () => useSelector((state: any) => state.counter.history);

  useEffect(() => {
    console.log(countHistory);
  }, [countHistory]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-counter">
        <Counter />
      </div>
      <div className="dashboard-charts">charts</div>
    </div>
  );
}
