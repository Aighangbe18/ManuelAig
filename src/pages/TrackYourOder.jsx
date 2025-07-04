export default function TrackOrder() {
  return (
    <div className="max-w-4xl px-4 py-12 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-blue-600">Track Your Order</h1>
      <p className="mb-4 text-gray-600">
        Enter your order ID and email address to track your order status.
      </p>
      <form className="p-6 space-y-4 bg-white rounded-lg shadow">
        <input
          type="text"
          placeholder="Order ID"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="px-6 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700">
          Track Order
        </button>
      </form>
    </div>
  );
}
