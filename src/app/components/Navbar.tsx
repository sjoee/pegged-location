import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-white shadow-md">
      <Link href="/info">
        <a>Info</a>
      </Link>
      <Link href="/history">
        <a>History</a>
      </Link>
      <Link href="/function">
        <a>Function</a>
      </Link>
    </div>
  );
}
