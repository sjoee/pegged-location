// components/DisplayUser.tsx
"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function DisplayUser() {
  const { userID, username, windowHeight } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to the Telegram Web App!</h1>
      <p>User ID: {userID || "Not available"}</p>
      <p>Username: {username || "Not available"}</p>
      <p>Window Height: {windowHeight}</p>

      <div className="flex gap-8">
        <Link href="/info">
          <div className="mt-4 py-2 px-4 border-2 border-primary bg-primary text-white rounded-full hover:bg-primaryDark transition duration-150 ease-in-out">
            Connect Wallet
          </div>
        </Link>
        <Link href="/info">
          <div className="mt-4 py-2 px-4 border-2 border-primary text-primary rounded-full hover:bg-slate-800 hover:text-white transition duration-150 ease-in-out">
            Use Now
          </div>
        </Link>
      </div>
    </div>
  );
}
