"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icon package (lucide-react)

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-2 px-2 left-0 w-full z-50 text-white ">
      <div className="rounded-2xl bg-purple-900">
        <div className=" flex items-center px-6 py-4">
          {/* Desktop Nav Links */}
          <nav className="hidden lg:w-1/3 md:flex space-x-6 font-medium">
            <Link href="/about" className="hover:text-gray-200 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-200 transition">
              Services
            </Link>
            <Link href="/process" className="hover:text-gray-200 transition">
              Process
            </Link>
            <Link href="/cases" className="hover:text-gray-200 transition">
              Cases
            </Link>
            <Link href="/insight" className="hover:text-gray-200 transition">
              Insight
            </Link>
          </nav>

          {/* Logo */}
          <div className="text-2xl text-center md:text-3xl lg:text-4xl font-bold lg:w-1/3  tracking-tighter">
            <Link href="/">Ecorus</Link>
          </div>

          {/* Contact Button (desktop) */}
          <div className="hidden md:block lg:w-1/3 text-right">
            <button className="bg-white text-purple-900 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition ">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-purple-800 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-purple-800 px-6 pb-4 space-y-3 text-sm">
            <Link
              href="/about"
              className="block hover:text-gray-200 transition"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block hover:text-gray-200 transition"
            >
              Services
            </Link>
            <Link
              href="/process"
              className="block hover:text-gray-200 transition"
            >
              Process
            </Link>
            <Link
              href="/cases"
              className="block hover:text-gray-200 transition"
            >
              Cases
            </Link>
            <Link
              href="/insight"
              className="block hover:text-gray-200 transition"
            >
              Insight
            </Link>
            <button className="w-full bg-white text-purple-900 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavigationBar;
