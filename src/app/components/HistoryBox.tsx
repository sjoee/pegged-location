const historyData = [
  { id: 1, date: "2024-12-28", restaurant: "Pizza Place" },
  { id: 2, date: "2024-12-27", restaurant: "Sushi Corner" },
  { id: 3, date: "2024-12-26", restaurant: "Burger Joint" },
];

export default function HistoryBox() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full leading-normal">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="px-5 py-3 text-xs font-semibold  text-primary uppercase tracking-wider">
                Id
              </th>
              <th className="px-5 py-3 text-xs font-semibold  text-primary uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 text-xs font-semibold  text-primary uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-200">
            {historyData.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-4 whitespace-nowrap">{item.id}</td>
                <td className="px-5 py-4 whitespace-nowrap">
                  {item.restaurant}
                </td>
                <td className="px-5 py-4 whitespace-nowrap">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
