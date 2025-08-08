const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left: Brand and Description */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400 mb-2">GaloScore</h2>
          <p className="text-sm text-gray-300 max-w-xs">
            A smarter way to prove skills, break bias, and access career opportunities—starting with a single test.
          </p>
        </div>

        {/* Right: Links and Copyright */}
        <div className="text-sm text-gray-300 text-right space-y-2">
          <div className="space-x-4">
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Certificate</a>
          </div>
          <p className="text-xs text-gray-500">© 2025 GaloScore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
