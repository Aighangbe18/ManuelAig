import { Mail, PhoneCall, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <Mail className="w-10 h-10 mx-auto mb-2 text-blue-600 dark:text-white" />
          <h1 className="text-4xl font-bold text-blue-700 dark:text-white">Contact Us</h1>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            We'd love to hear from you! Fill out the form or reach us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <form className="bg-white rounded-xl shadow-lg p-6 space-y-4 dark:bg-gray-900 dark:text-white">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              className="w-full h-32 px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-4">
              <PhoneCall className="w-6 h-6 text-blue-600" />
              <span>+234 801 234 5678</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <span className="text-blue-500">support@myshop.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span>Lagos, Nigeria</span>
            </div>

            <div className="bg-blue-100 text-blue-800 dark:bg-gray-800 dark:text-blue-400 p-4 rounded-lg mt-8 text-sm">
              Our support team typically responds within 24 hours. Your satisfaction is our priority.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
