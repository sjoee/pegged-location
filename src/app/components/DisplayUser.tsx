"use client";

// import Link from "next/link";
// import { useAuth } from "../context/AuthContext";
import Image from "next/image";
import { useAuth } from "../context/AuthContext";

export default function DisplayUser() {
  // const { userID, username, windowHeight } = useAuth();
  const { user, loggedIn, logIn, logOut } = useAuth();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen text-center space-y-4">
      <h1 className="text-4xl font-bold  text-primary">
        Welcome to the Pegged Location Telegram App!
      </h1>

      {/* <p>User ID: {userID || "Not available"}</p>
      <p>Username: {username || "Not available"}</p>
      <p>Window Height: {windowHeight}</p> */}

      {loggedIn ? (
        <div className="flex flex-col gap-2">
          <div className="mt-4 py-2 px-4 border-2 border-primary bg-primary text-white rounded-full hover:bg-primaryDark transition duration-150 ease-in-out">
            <button onClick={logOut}>Disconnect Wallet</button>
          </div>
          <p>
            Connected as:
            <span className="text-primary">{user?.addr}</span>
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p>Connect Your Wallet now!</p>
          <div className="mt-4 py-2 px-4 border-2 border-primary bg-primary text-white rounded-full hover:bg-primaryDark transition duration-150 ease-in-out">
            <button onClick={logIn}>Connect Wallet</button>
          </div>
        </div>
      )}

      <div className="w-full items-center">
        <div
          className="inline-block ml-2 cursor-pointer "
          style={{
            position: "relative",
            width: 200,
            height: 200,
            objectFit: "contain",
          }}
        >
          <Image src="/main.png" alt="Submit" layout="fill" objectFit="cover" />
        </div>
      </div>
      {/* </Link> */}
      {/* <Link href="/function">
          <div className="mt-4 py-2 px-4 border-2 border-primary text-primary rounded-full hover:bg-gray-200 transition duration-150 ease-in-out">
            Use Now
          </div>
        </Link> */}
    </div>
  );
}
