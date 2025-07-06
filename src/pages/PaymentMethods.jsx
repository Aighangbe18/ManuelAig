import {
  CreditCard,
  Banknote,
  Smartphone,
  ShieldCheck,
  Bitcoin,
} from "lucide-react";

export default function PaymentMethods() {
  const methods = [
    {
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      title: "Credit/Debit Cards",
      description: "We accept Visa, MasterCard, and Verve cards.",
    },
    {
      icon: <Banknote className="w-6 h-6 text-green-600" />,
      title: "Bank Transfers",
      description: "Pay directly from your bank account with secure details.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-purple-600" />,
      title: "Mobile Payments",
      description: "Quick and easy checkout using Paystack or Flutterwave.",
    },
    {
      icon: <Bitcoin className="w-6 h-6 text-orange-500" />,
      title: "Cryptocurrency (Coming Soon)",
      description: "Support for Bitcoin and Ethereum will be added soon.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-pink-600" />,
      title: "Secure Processing",
      description:
        "All payments are encrypted and secured with end-to-end protection.",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-10 text-4xl font-extrabold text-center text-blue-700 dark:text-white">
          Payment Methods
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {methods.map((method, index) => (
            <div
              key={index}
              className="flex items-start p-5 space-x-4 bg-white rounded-xl shadow-md dark:bg-gray-900 dark:text-white"
            >
              <div className="p-3 bg-gray-100 rounded-full dark:bg-gray-800">
                {method.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold">{method.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
