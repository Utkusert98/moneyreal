import { useState } from "react";
import DonutChart from "./DonutChart";


export default function ExpenseSplit() {
  const [active, setActive] = useState(null);
  const segments = [
    { label: "Food",           percent: 30, color: "#F05D5E" },
    { label: "Entertainment",  percent: 10, color: "#7AA2FF" },
    { label: "Health",         percent: 10, color: "#73D99E" },
    { label: "Transportation", percent: 15, color: "#F4C95D" },
    { label: "Bills",          percent: 20, color: "#C58CFF" },
    { label: "Misc",           percent: 15, color: "#FF9FB2" },
  ];

  return (
    <div className="grid place-items-center h-48">
      <DonutChart segments={segments} active={active} setActive={setActive} />
    </div>
  );
}
