// pages/info.tsx

export default function InfoBox() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-8 pb-20">
      <section className="mb-10">
        <h1 className="text-2xl font-bold text-center mb-4 text-primary">
          About Us
        </h1>
        <p className="text-center">
          Discover how our Telegram bot can revolutionize your dining
          experiences by suggesting nearby dinner options based on your
          location. Utilize our tailored recommendations to save time and enjoy
          your meals.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-primary">Why Us</h2>
            <p className="text-sm">
              Experience the convenience of tailored dining suggestions that
              intuitively adapt to your location and tastes, bringing you closer
              to your next favorite meal.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-primary">Our Benefits</h2>
            <p className="text-sm  ">
              Save time, discover new dining spots, and enjoy meal planning with
              On-Chain Mode for secure blockchain storage or Privacy Mode for no
              data storage at all.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-primary">
              Getting Started
            </h2>
            <p className="text-sm  ">
              Quick setup with step-by-step guidance to begin supprizes
              suggestions.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-bold mb-4 text-start text-primary">
          How to Try The Magic
        </h1>
        <ol className="list-decimal list-inside text-start  ">
          <li>
            Let our Telegram bot know where you are, and it will take care of
            the rest.
          </li>
          <li>
            Like a culinary treasure hunt, you will receive a surprise list of
            nearby restaurants—each option a hidden gem ready to be explored.
          </li>
          <li>Head over there, and savor the magic of a great meal!</li>
        </ol>
      </section>
    </div>
  );
}
