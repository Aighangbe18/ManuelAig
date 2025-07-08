import { PaystackButton } from 'react-paystack';

export default function PaystackCheckout({ amount, email }) {
  const publicKey = "pk_test_043043fc5b5ef54f0e8bdf528a4e0ad8e462d501"; // 🔁 Replace with your Paystack public key
  const componentProps = {
    email,
    amount: amount * 100, // Convert to kobo
    publicKey,
    text: "Pay with Paystack",
    onSuccess: () => {
      alert("✅ Payment Successful!");
    },
    onClose: () => {
      alert("❌ Payment closed.");
    },
  };

  return (
    <div className="mt-6">
      <PaystackButton {...componentProps} className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition" />
    </div>
  );
}
