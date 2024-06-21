import { useSelector } from "react-redux";
import Counter from "../Counter/Counter";
import "./Dashboard.css";
import CountChart from "../CountChart/CountChart";

export default function Dashboard() {
  const countHistory = useSelector((state: any) => state.counter.history);

  console.log(countHistory);

  return (
    <div className="dashboard-container">
      <div className="dashboard-counter">
        <Counter />
      </div>
      <div className="dashboard-charts">
        <CountChart />
      </div>
    </div>
  );
}
