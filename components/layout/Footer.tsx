const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold mb-2">alx</h3>
          <p>ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Apartments in Dubai</a></li>
            <li><a href="#">Hotels in New York</a></li>
            <li><a href="#">Villa in Spain</a></li>
            <li><a href="#">Mansion in Indonesia</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Customers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Help</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#">Support</a></li>
            <li><a href="#">Cancel booking</a></li>
            <li><a href="#">Refunds</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400 text-xs">
        Some hotel requires you to cancel more than 24 hours before check-in. Details <a href="#" className="underline">here</a>.
        <br />
        © {new Date().getFullYear()} ALX — Terms | Privacy | Cookies
      </div>
    </footer>
  );
};

export default Footer;
