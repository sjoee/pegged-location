// pages/history.tsx
import Navbar from "../components/Navbar";

const historyData = [
  { id: 1, date: "2024-12-28", restaurant: "Pizza Place" },
  { id: 2, date: "2024-12-27", restaurant: "Sushi Corner" },
  { id: 3, date: "2024-12-26", restaurant: "Burger Joint" },
];

export default function HistoryPage() {
  return (
    <div>
      <Navbar />
      <ul className="p-4">
        {historyData.map((item) => (
          <li key={item.id} className="p-2 border-b">
            {item.date} - {item.restaurant}
          </li>
        ))}
      </ul>
    </div>
  );
}
