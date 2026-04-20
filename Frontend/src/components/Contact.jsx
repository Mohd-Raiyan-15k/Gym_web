import axios from "axios";
import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = useCallback(async (e) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error("All fields are required!");
      return;
    }
    
    setLoading(true);
    try {
      const { data } = await axios.post(
        'http://localhost:4000/send/mail',
        { name, email, subject, message },
      );
      
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
    setLoading(false);
  }, [name, email, subject, message]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            GET IN TOUCH
          </h1>
          <p className="text-gray-400 text-xl mb-8">
            We would love to hear from you. Send us a message and we will respond as soon as possible.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Contact Info Cards */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Phone</h3>
            <p className="text-gray-300 text-lg font-semibold mb-2">+92 (300) 123-4567</p>
            <p className="text-gray-400 text-sm">Available Monday to Friday</p>
          </div>

          <div className="group bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-700 hover:border-green-500 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-br from-green-500 to-green-600 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
            <p className="text-gray-300 text-lg font-semibold mb-2">info@eliteedge.com</p>
            <p className="text-gray-400 text-sm">We will reply within 24 hours</p>
          </div>

          <div className="group bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MapPin size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Location</h3>
            <p className="text-gray-300 text-lg font-semibold mb-2">Elite Edge Gym</p>
            <p className="text-gray-400 text-sm">123 Fitness Street, Main City</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-750 to-gray-800 rounded-3xl border border-gray-700 p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
            
            <form onSubmit={sendMail} className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label className="block text-gray-300 font-semibold mb-3">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-gray-300 font-semibold mb-3">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-gray-300 font-semibold mb-3">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What is this about?"
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-gray-300 font-semibold mb-3">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how we can help..."
                  rows="5"
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Business Hours & Info */}
          <div className="space-y-6">
            
            {/* Business Hours */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl border border-gray-700 p-8 md:p-12 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Business Hours</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-600">
                  <span className="text-gray-300 font-semibold">Monday - Friday</span>
                  <span className="text-blue-400">6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-600">
                  <span className="text-gray-300 font-semibold">Saturday</span>
                  <span className="text-blue-400">7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-semibold">Sunday</span>
                  <span className="text-blue-400">7:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-gray-300">
                  <span className="text-green-400 font-bold">✓</span>
                  Expert trainers with years of experience
                </li>
                <li className="flex gap-3 text-gray-300">
                  <span className="text-green-400 font-bold">✓</span>
                  State-of-the-art equipment and facilities
                </li>
                <li className="flex gap-3 text-gray-300">
                  <span className="text-green-400 font-bold">✓</span>
                  Flexible membership plans to fit your budget
                </li>
                <li className="flex gap-3 text-gray-300">
                  <span className="text-green-400 font-bold">✓</span>
                  Friendly and supportive community
                </li>
                <li className="flex gap-3 text-gray-300">
                  <span className="text-green-400 font-bold">✓</span>
                  24/7 customer support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
