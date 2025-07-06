import { Undo2, PackageCheck, Clock, Truck, MailCheck } from "lucide-react";

export default function RefundPolicy() {
  const policies = [
    {
      icon: <Undo2 className="w-6 h-6 text-blue-600" />,
      title: "7-Day Return Window",
      description: "Return items within 7 days of delivery for a refund or exchange.",
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-green-600" />,
      title: "Condition of Items",
      description: "Items must be unused, unopened, and in their original packaging.",
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-600" />,
      title: "Processing Time",
      description: "Refunds are processed within 5–7 business days after approval.",
    },
    {
      icon: <Truck className="w-6 h-6 text-red-500" />,
      title: "Shipping Fees",
      description: "Shipping charges are non-refundable unless the error is ours.",
    },
    {
      icon: <MailCheck className="w-6 h-6 text-purple-600" />,
      title: "Start a Return",
      description: (
        <>
          Email us at{" "}
          <span className="font-semibold text-blue-600">support@myshop.com</span> to
          initiate your return process.
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-10 text-4xl font-extrabold text-center text-blue-700 dark:text-white">
          Refund & Return Policy
        </h1>
        <p className="mb-6 text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          If you're not 100% satisfied with your purchase, we’re committed to making it right.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="flex items-start p-5 space-x-4 bg-white rounded-xl shadow-md dark:bg-gray-900 dark:text-white"
            >
              <div className="p-3 bg-gray-100 rounded-full dark:bg-gray-800">
                {policy.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold">{policy.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{policy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
