export default function RefundPolicy() {
  return (
    <div className="max-w-4xl px-4 py-12 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-blue-600">Refund & Return Policy</h1>
      <p className="mb-4 text-gray-600">
        If you're not 100% satisfied with your purchase, we're here to help.
      </p>
      <ul className="space-y-3 text-gray-700 list-disc list-inside">
        <li>Return within 7 days of delivery</li>
        <li>Items must be unused and in original packaging</li>
        <li>Refunds processed within 5–7 business days</li>
        <li>Shipping fees are non-refundable unless it's our fault</li>
        <li>Email <span className="text-blue-500">support@myshop.com</span> to start a return</li>
      </ul>
    </div>
  );
}
