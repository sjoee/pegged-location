import { useState } from "react";
import Image from "next/image";

interface Location {
  id: number;
  name: string;
  google_link: string;
}

interface ModalProps {
  location: Location;
  onClose: () => void;
}

const locations: Location[] = [
  {
    id: 1,
    name: "Pizzeria Locale",
    google_link: "https://maps.google.com/?q=Pizzeria+Locale",
  },
  {
    id: 2,
    name: "Sushi Ai",
    google_link: "https://maps.google.com/?q=Sushi+Ai",
  },
  {
    id: 3,
    name: "Curry House",
    google_link: "https://maps.google.com/?q=Curry+House",
  },
];

// Modal component for displaying location details
const Modal: React.FC<ModalProps> = ({ location, onClose }) => (
  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
    <div className="bg-white p-4 rounded-lg shadow-xl">
      <h2 className="font-bold">{location.name}</h2>
      <p>
        <a
          href={location.google_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          More about this place
        </a>
      </p>
      <div className="gap-2 flex">
        <button
          onClick={() => window.open(location.google_link, "_blank")}
          className="mt-4 py-2 px-4 border-2 border-primary bg-primary text-white rounded-full hover:bg-primaryDark transition duration-150 ease-in-out"
        >
          Share Location
        </button>
        <button
          onClick={onClose}
          className="mt-4 py-2 px-4 border-2 border-primary text-primary rounded-full hover:bg-gray-200 transition duration-150 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export default function GamePage() {
  const [input, setInput] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  ); // Correct typing for useState

  // Handle the form submission
  const handleSubmit = () => {
    const randomLocation =
      locations[Math.floor(Math.random() * locations.length)];
    setSelectedLocation(randomLocation); // Correctly set an object of type Location
    setShowModal(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 relative">
      <h1 className="text-2xl font-bold text-primary">What should I eat !!!</h1>
      <div className="p-4">
        <input
          type="text"
          placeholder="Location"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="rounded-full border p-2 focus:border-primary focus:border-2 focus:outline-none"
        />
      </div>
      <div
        onClick={handleSubmit}
        className="inline-block ml-2 cursor-pointer"
        style={{
          position: "relative",
          width: 200,
          height: 200,
          objectFit: "contain",
        }}
      >
        <Image
          src="/red-button.png"
          alt="Submit"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {showModal && selectedLocation && (
        <Modal
          location={selectedLocation}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
