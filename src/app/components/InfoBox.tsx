// pages/info.tsx

export default function InfoBox() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
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
            <p className="text-sm  ">
              Experience seamless dining suggestions that cater to your
              preferences and location.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-primary">Our Benefits</h2>
            <p className="text-sm  ">
              Save time, explore new dining spots, and enjoy stress-free meal
              planning.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold text-primary">
              Getting Started
            </h2>
            <p className="text-sm  ">
              Quick setup with step-by-step guidance to begin receiving
              personalized suggestions.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-bold mb-4 text-start text-primary">
          How to Use
        </h1>
        <ol className="list-decimal list-inside text-start  ">
          <li>Input your current location into our Telegram bot.</li>
          <li>Receive a list of nearby dining options instantly.</li>
          <li>Select the best spot and enjoy your meal!</li>
        </ol>
      </section>
    </div>
  );
}
