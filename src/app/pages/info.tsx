// pages/info.tsx
import Navbar from "../components/Navbar";

export default function InfoPage() {
  return (
    <div>
      <Navbar />
      <ul className="p-4">
        <li>Type in the text field to get restaurant suggestions.</li>
        <li>View your history on the History page.</li>
        <li>Submit data on the Function page.</li>
      </ul>
    </div>
  );
}
