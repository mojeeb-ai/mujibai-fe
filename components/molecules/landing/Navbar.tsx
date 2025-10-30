"use client";

export default function Navbar() {
  const handleSmoothScroll = (sectionId: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <nav>
      <ul className="sm:flex justify-center items-center gap-10 hidden flex-col sm:flex-row">
        <li>
          <button
            onClick={() => handleSmoothScroll("features")}
            className="cursor-pointer relative pb-1 hover:bg-white/10 sm:hover:bg-transparent transition-all duration-300 group"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </button>
        </li>

        <li>
          <button
            onClick={() => handleSmoothScroll("why-us")}
            className="cursor-pointer relative pb-1 hover:bg-white/10 sm:hover:bg-transparent transition-all duration-300 group"
          >
            Why Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </button>
        </li>

        <li>
          <button
            onClick={() => handleSmoothScroll("pricing")}
            className="cursor-pointer relative pb-1 hover:bg-white/10 sm:hover:bg-transparent transition-all duration-300 group"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </button>
        </li>

        <li>
          <button
            onClick={() => handleSmoothScroll("target-sector")}
            className="cursor-pointer relative pb-1 hover:bg-white/10 sm:hover:bg-transparent transition-all duration-300 group"
          >
            Target Sector
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </button>
        </li>

        <li>
          <button
            onClick={() => handleSmoothScroll("contact")}
            className="cursor-pointer relative pb-1 hover:bg-white/10 sm:hover:bg-transparent transition-all duration-300 group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </button>
        </li>

        <li>
          <button
            onClick={() => handleSmoothScroll("about")}
            className="cursor-pointer relative pb-1 hover:bg-white/10 sm:hover:bg-transparent transition-all duration-300 group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
