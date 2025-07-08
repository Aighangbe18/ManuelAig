import { useState, useEffect } from "react";
import {
  CreditCard,
  Banknote,
  Smartphone,
  ShieldCheck,
  Bitcoin,
  CheckCircle,
} from "lucide-react";
import PaystackCheckout from "../components/PaystackButton";

export default function PaymentMethods() {
  const [selected, setSelected] = useState(null);
  const [success, setSuccess] = useState(false);
  const [billing, setBilling] = useState({ email: "", name: "" });
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const recentAmount = localStorage.getItem("recentOrderAmount");

    if (user) {
      setBilling({ email: user.email, name: user.name });
    }

    if (recentAmount) {
      setAmount(Number(recentAmount));
    }
  }, []);

  const methods = [
    {
      id: "paystack",
      icon: <Smartphone className="w-6 h-6 text-purple-600" />,
      title: "Paystack",
      description: "Pay easily using your card, USSD, or mobile wallet.",
    },
    {
      id: "bank",
      icon: <Banknote className="w-6 h-6 text-green-600" />,
      title: "Bank Transfer",
      description: "Transfer money directly to our account.",
    },
    {
      id: "crypto",
      icon: <Bitcoin className="w-6 h-6 text-orange-600" />,
      title: "Cryptocurrency (Coming Soon)",
      description: "Pay with Bitcoin or Ethereum.",
    },
  ];

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-blue-700">Choose Payment Method</h1>

        {!success ? (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              {methods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => handleSelect(method.id)}
                  className={`flex items-start p-5 space-x-4 rounded-xl shadow-md bg-white hover:bg-blue-50 transition ${
                    selected === method.id ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <div className="p-3 bg-gray-100 rounded-full">{method.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-left">{method.title}</h3>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {selected === "paystack" && (
              <PaystackCheckout email={billing.email} amount={amount} name={billing.name} />
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h2 className="text-3xl font-bold text-green-700">Payment Successful!</h2>
            <p className="mt-2 text-gray-600">Thank you for your order.</p>
          </div>
        )}
      </div>
    </div>
  );
}
