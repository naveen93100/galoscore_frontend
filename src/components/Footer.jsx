import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Brand and Description */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">Galo Score</h2>
          <p className="text-sm text-gray-300 max-w-xs leading-relaxed">
            A smarter way to prove skills, break bias, and access career opportunities—starting with a single test.
          </p>
        </div>

        {/* Middle: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:test@galo.co.in" className="hover:underline">
                test@galo.co.in
              </a>
            </li>
            <li>
              <span className="font-medium">Visit Us:</span>{" "}
              D-120-121, Pocket D, Okhla Phase I, Okhla Industrial Estate, New Delhi, Delhi 110020
            </li>
            <li>
              <span className="font-medium">Support Hours:</span> Mon - Sat, 10am - 6pm
            </li>
          </ul>
        </div>

        {/* Right: Links */}
        <div className="text-sm text-gray-300 md:text-right">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Quick Links</h3>
          <div className="flex md:flex-col gap-3  md:items-end">
            {/* <Link to="/" className="hover:underline">Certificate</Link> */}
            <Link to="/candidate " className="hover:underline">Candidate </Link>
            <Link to="/employer " className="hover:underline">Employer </Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © 2025 Galo Score. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
