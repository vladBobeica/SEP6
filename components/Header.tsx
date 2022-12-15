import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <Link href="/">
        <div className="flex items-center space-x-2 md:space-x-10">
          <img
            src="https://i.postimg.cc/6p42F4np/Netflix-2015-logo.png"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
          />
        </div>
      </Link>

      <div className="flex items-center space-x-4 text-sm font-light">
        <Link href="/search">
          <SearchIcon className="hidden h-6 w-6 sm:inline" />
        </Link>

        <Link href="/account">
          <img
            onClick={logout}
            src="./assets/icons/log-out.svg"
            alt="log out icon"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
