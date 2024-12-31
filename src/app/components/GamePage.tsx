import { useState } from "react";
import Image from "next/image";

interface Location {
  id: string;
  name: string;
  link: string;
}

interface ModalProps {
  location?: Location;
  onClose: () => void;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ location, onClose }) => (
  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
    <div className="bg-white p-4 rounded-lg shadow-xl w-[200px]">
      <h1 className="text-2xl font-bold text-center mb-4 text-primary">
        Your Surprise
      </h1>
      <h2 className="font-bold mb-4">{location?.name}</h2>

      <div className="gap-4 flex flex-row">
        <button className="py-2 px-4 border-2 bg-primary text-white rounded-full">
          <a href={location?.link} target="_blank" rel="noopener noreferrer">
            Map
          </a>
        </button>
        <button
          onClick={onClose}
          className="py-2 px-4 border-2 border-primary text-primary rounded-full hover:bg-gray-200 transition duration-150 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

const AlertBox: React.FC<ModalProps> = ({ title, onClose }) => (
  <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
    <div className="bg-white p-4 rounded-lg shadow-xl w-[200px]">
      <h2 className="font-bold mb-4">{title}</h2>
      <button
        onClick={onClose}
        className="py-2 px-4 border-2 border-primary text-primary rounded-full hover:bg-gray-200 transition duration-150 ease-in-out"
      >
        Close
      </button>
    </div>
  </div>
);

export default function GamePage() {
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAlertBox, setShowAlertBox] = useState(false);
  const [showAlertBoxOutLocation, setShowAlertBoxOutLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const fetchLocation = async () => {
    const geoapifyApiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
    const geocodeUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
      input.trim()
    )}&apiKey=${geoapifyApiKey}`;

    try {
      // Step 1: Geocode the input location
      const geocodeResponse = await fetch(geocodeUrl);
      const geocodeData = await geocodeResponse.json();

      if (geocodeData.features.length > 0) {
        const coordinates = geocodeData.features[0].geometry.coordinates;

        // Step 2: Search for nearby restaurants
        const placesUrl = `https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=circle:${coordinates[0]},${coordinates[1]},10000&limit=20&apiKey=${geoapifyApiKey}`;
        const placesResponse = await fetch(placesUrl);
        const placesData = await placesResponse.json();

        if (placesData.features.length > 0) {
          // Step 3: Randomly select a restaurant
          const randomIndex = Math.floor(
            Math.random() * placesData.features.length
          );
          const randomPlace = placesData.features[randomIndex];
          const chosenLocation: Location = {
            id: randomPlace.properties.place_id,
            name: randomPlace.properties.name || "Unnamed Restaurant",
            link: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${randomPlace.geometry.coordinates[0]},${randomPlace.geometry.coordinates[1]}&zoom=14&marker=lonlat:${randomPlace.geometry.coordinates[0]},${randomPlace.geometry.coordinates[1]};type:awesome;color:%23ff3333;size:large&apiKey=${geoapifyApiKey}`,
          };

          setSelectedLocation(chosenLocation);
          setShowModal(true);
        } else {
          setShowAlertBoxOutLocation(true);
        }
      } else {
        setShowAlertBox(true);
      }
    } catch {
      // console.error("Error fetching location:", err);
    }
  };

  const handleSubmit = () => {
    if (!input.trim()) {
      alert("Please enter a location.");
      return;
    }
    fetchLocation();
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 relative">
      <div>
        <h1 className="text-2xl font-bold text-primary">What To Eat Today</h1>
        <p className="text-xl font-bold text-gray-400 mb-8">Privacy Mode </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your location"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="rounded-full border p-2 focus:border-primary focus:border-2 focus:outline-none"
          />
          {/* <button
            onClick={handleSubmit}
            className="py-2 px-4 ml-2 bg-primary text-white rounded-full"
          >
            Find Restaurant
          </button> */}
        </div>
        <div className="w-full items-center">
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
        </div>
      </div>
      {showModal && selectedLocation && (
        <Modal
          location={selectedLocation}
          onClose={() => setShowModal(false)}
        />
      )}
      {showAlertBox && (
        <AlertBox
          title="Location not found."
          onClose={() => setShowAlertBox(false)}
        />
      )}
      {showAlertBoxOutLocation && (
        <AlertBox
          title="No restaurants found within 10 km."
          onClose={() => setShowAlertBoxOutLocation(false)}
        />
      )}
    </div>
  );
}
