export default function PaymentMethods() {
  return (
    <div className="max-w-4xl px-4 py-12 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-blue-600">Payment Methods</h1>
      <ul className="space-y-4 text-gray-700">
        <li>💳 Credit/Debit Cards (Visa, MasterCard, Verve)</li>
        <li>💰 Bank Transfers</li>
        <li>📱 Mobile Payments (Paystack, Flutterwave)</li>
        <li>🪙 Cryptocurrency (Bitcoin, Ethereum - coming soon)</li>
        <li>🛡️ All payments are processed securely with end-to-end encryption.</li>
      </ul>
    </div>
  );
}
