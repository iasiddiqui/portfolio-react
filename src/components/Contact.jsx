import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useContactForm from "../utils/Hooks/useContactForm"; // Custom hook
import InputField from "../utils/HOC/InputField";
import TextareaField from "../utils/HOC/TextareaField";
import EyesMove from "../utils/HOC/EyesMove";

const Contact = () => {
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <section
      id="contact"
      className="min-h-screen bg-white flex flex-col items-center py-16 px-4"
    >
      <div className="text-center w-full max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          <span className="text-blue-500">Contact</span> Me
        </h2>
        <p className="mt-3 text-base md:text-lg text-gray-700">
          Have a project or just want to say hi? Let’s connect and build
          something amazing together!
        </p>
      </div>

      <div className="w-full max-w-3xl mx-auto mt-12 bg-slate-100 bg-opacity-80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 relative">
        {/* Eyes move will move the eyes over the cursor move */}
        <EyesMove />

        <div className="space-y-6 mt-16">
          <InputField
            icon={<FaUserAlt className="text-blue-500" />}
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleChange}
            className="rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400"
          />
          <InputField
            icon={<MdEmail className="text-blue-500" />}
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
            className="rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400"
          />
          <TextareaField
            name="message"
            value={formData.message}
            placeholder="Write your message..."
            onChange={handleChange}
            className="rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg transform transition hover:scale-105 hover:opacity-90"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
