export default function ContactUs() {
  return (
    <div className="max-w-4xl px-4 py-12 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-blue-600">Contact Us</h1>
      <p className="mb-4 text-gray-600">We’d love to hear from you. Fill out the form below or email us directly at <span className="text-blue-500">support@myshop.com</span>.</p>
      <form className="p-6 space-y-4 bg-white rounded-lg shadow">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          className="w-full h-32 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button className="px-6 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
