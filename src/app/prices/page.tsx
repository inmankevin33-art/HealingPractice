export default function PricesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold mb-4">
        Treatment Prices
      </h1>

      <p className="text-gray-600 mb-12">
        Transparent, doctor-led pricing for PRP and regenerative treatments.
      </p>

      <section className="space-y-8">
        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-medium mb-4">
            Skin & Face
          </h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>PRP Facial (Vampire Facial)</span>
              <span>£350</span>
            </li>
            <li className="flex justify-between">
              <span>PRP + Microneedling</span>
              <span>£400</span>
            </li>
          </ul>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-medium mb-4">
            Hair Restoration
          </h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>PRP Hair Treatment</span>
              <span>£350</span>
            </li>
            <li className="flex justify-between">
              <span>Course of 3 Sessions</span>
              <span>£950</span>
            </li>
          </ul>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-medium mb-4">
            Sexual Wellness
          </h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>P-Shot (PRP for Erectile Dysfunction)</span>
              <span>£700</span>
            </li>
            <li className="flex justify-between">
              <span>O-Shot (Female Sexual Wellness)</span>
              <span>£650</span>
            </li>
          </ul>
        </div>
      </section>

      <p className="text-sm text-gray-500 mt-12">
        Prices are indicative. A consultation is required to confirm suitability.
      </p>
    </main>
  );
}
