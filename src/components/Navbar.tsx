"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 bg-opacity-30" : "bg-transparent"
      }`}
    >
      <div className=" max-w-7xl mx-auto flex justify-between items-center py-2 px-4">
        <Link href="/">
          <Image
            src="/logo-clex.svg"
            alt="CLEX Logo"
            width={120}
            height={56}
            className="w-[80px] md:w-[110px] "
            priority
          />
        </Link>
        <Button
          variant="outline"
          className="bg-[#E6BD7A] text-[#342E23] border-white hover:bg-[#088AB5] hover:text-[#F6E2C3] text-sm md:text-base"
        >
          Profile
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
