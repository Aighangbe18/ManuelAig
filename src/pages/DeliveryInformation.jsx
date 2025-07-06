import { Truck, Clock, MailCheck } from "lucide-react";

export default function DeliveryInformation() {
  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-tr from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <Truck className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-white" />
        <h1 className="text-4xl font-extrabold text-blue-700 dark:text-white">Delivery Information</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Fast and reliable delivery right to your doorstep!
        </p>
      </div>

      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg dark:bg-gray-900 dark:text-white space-y-6">
        <div className="flex items-start gap-4">
          <Clock className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h2 className="text-lg font-semibold">Standard Delivery</h2>
            <p className="text-gray-600 dark:text-gray-300">3–5 business days</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h2 className="text-lg font-semibold">Express Delivery</h2>
            <p className="text-gray-600 dark:text-gray-300">
              1–2 business days (additional charges apply)
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Truck className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h2 className="text-lg font-semibold">Free Delivery</h2>
            <p className="text-gray-600 dark:text-gray-300">
              On all orders above ₦50,000
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MailCheck className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h2 className="text-lg font-semibold">Tracking Info</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Tracking details will be sent to your email or via SMS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
