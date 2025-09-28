import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-extrabold text-2xl text-gray-800">
          <Image src="/assets/Logos.png" alt="Logo" width={36} height={36} />
          <span>alx</span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-xl hidden md:flex">
          <input
            type="text"
            placeholder="Search destinations, stays..."
            className="w-full rounded-full border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm rounded-full border hover:bg-gray-50">Sign in</button>
          <button className="px-4 py-2 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700">Sign up</button>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-2 flex gap-4 overflow-x-auto text-sm text-gray-700">
          {[
            "Rooms",
            "Mansion",
            "Countryside",
            "Beachfront",
            "City Center",
            "Mountain View",
            "Garden",
            "Riverside",
          ].map((item) => (
            <button
              key={item}
              className="px-3 py-1 rounded-full hover:bg-gray-100 whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
