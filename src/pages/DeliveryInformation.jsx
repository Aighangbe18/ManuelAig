export default function DeliveryInformation() {
  return (
    <div className="max-w-4xl px-4 py-10 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Delivery Information</h1>
      <p className="mb-4">
        We offer fast and reliable delivery across multiple regions.
      </p>
      <ul className="ml-6 space-y-1 list-disc">
        <li>Standard Delivery: 3–5 business days</li>
        <li>Express Delivery: 1–2 business days (extra charge)</li>
        <li>Free delivery on orders above ₦50,000</li>
        <li>Tracking information will be provided via email/SMS</li>
      </ul>
    </div>
  );
}
