import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

interface Location {
  id: string;
  name: string;
  google_link: string;
}

interface ModalProps {
  location: Location;
  onClose: () => void;
}

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
      <button
        onClick={onClose}
        className="mt-4 py-2 px-4 border-2 border-primary text-primary rounded-full hover:bg-gray-200 transition duration-150 ease-in-out"
      >
        Close
      </button>
    </div>
  </div>
);

const loadGoogleMapsScript = (callback: () => void) => {
  if (
    typeof window.google === "object" &&
    typeof window.google.maps === "object"
  ) {
    callback(); // If already loaded, just run the callback
    return;
  }
  const existingScript = document.getElementById("google-maps-script");
  if (existingScript) {
    existingScript.addEventListener("load", callback); // Add callback if script already in process
    return;
  }
  const script = document.createElement("script");
  script.id = "google-maps-script";
  script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
  script.async = true;
  script.defer = true;
  script.onload = callback; // Set callback to run when script is loaded
  document.head.appendChild(script);
};

export default function GamePage() {
  const [input, setInput] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  useEffect(() => {
    loadGoogleMapsScript(() => {
      console.log("Google Maps API loaded.");
    });
  }, []);

  const fetchNearbyPlaces = (locationInput: string) => {
    if (!window.google || !window.google.maps) {
      console.error("Google Maps API is not available.");
      return;
    }

    // Check if geolocation is available and use it
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = new window.google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );

          const service = new window.google.maps.places.PlacesService(
            document.createElement("div")
          );
          const request = {
            query: locationInput,
            location: location,
            radius: 10000,
            type: "restaurant",
          };

          service.textSearch(request, (results, status) => {
            if (
              status === window.google.maps.places.PlacesServiceStatus.OK &&
              results
            ) {
              const randomIndex = Math.floor(Math.random() * results.length);
              const place = results[randomIndex];
              const newLocation = {
                id: place.place_id || "",
                name: place.name || "",
                google_link: `https://maps.google.com/?q=${place.formatted_address}`,
              };
              setSelectedLocation(newLocation);
              setShowModal(true);
            } else {
              console.error("Failed to fetch places:", status);
            }
          });
        },
        (error) => {
          console.error("Error fetching geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = () => {
    if (input.trim()) {
      fetchNearbyPlaces(input);
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 py-8 relative">
        <h1 className="text-2xl font-bold text-primary">
          What should I eat !!!
        </h1>
        <div className="flex flex-col gap-4">
          <div className="p-4">
            <input
              type="text"
              placeholder="Your Location"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="rounded-full border p-2 focus:border-primary focus:border-2 focus:outline-none"
            />
            <button
              onClick={handleSubmit}
              className="py-2 px-4 ml-2 bg-primary text-white rounded-full"
            >
              Find Food
            </button>
          </div>
          <div className="w-full items-center">
            <div
              onClick={handleSubmit}
              className="inline-block ml-2 cursor-pointer "
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
          </div>
        </div>
        {showModal && selectedLocation && (
          <Modal
            location={selectedLocation}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>{" "}
    </>
  );
}
