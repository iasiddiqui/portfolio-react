import SocialLinks from "../utils/HOC/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-[url(/sectionBG/footer.svg)] bg-cover bg-center text-white p-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 md:justify-between gap-7">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold">About Me</h2>
            <p className="text-gray-400 mt-2">
              I&apos;m a passionate Frontend Developer with a knack for creating
              seamless user experiences. I specialize in building responsive web
              designs and interactive applications.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="space-y-2 mt-2">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold">Contact Me</h2>
            <ul className="space-y-2 mt-2">
              <li className="text-gray-400">
                Email:{" "}
                <a
                  href="mailto:kausarrkhan83@gmail.com"
                  className="hover:text-white"
                >
                  kausarrkhan83@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                Phone:{" "}
                <a href="tel:9260952373" className="hover:text-white">
                  +919260952373
                </a>
              </li>
              <li className="text-gray-400">Location: New Delhi, India</li>
            </ul>
          </div>
        </div>
        {/* Social Media and Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <SocialLinks color="text-gray-400" linkGap="gap-3" myHover="hover:text-white" />
          </div>
          <p className="mt-6 md:mt-0 text-gray-400">
            &copy; 2024 Kausar Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
