"use client";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

export default function Footertwo() {
  return (
    <>
      <div className="hidden lg:block">
        <div className="bg-(--primary-color) w-full h-80 p-8 relative">
          <div className="flex items-top justify-evenly m-10">
            <div>
              <img src="/image/footer-logo.png" alt="logo" />
              <p className="mt-3 text-sm text-(--neutral-color) font-light leading-6">
                Dedicated to turning ideas into reality <br /> through stunning
                prints, creative branding, <br /> and meaningful digital design{" "}
                <br /> experiences
              </p>
              <div className="flex items-center gap-3 text-(--neutral-color) mt-2 animate-bounce">
                <a
                  href="https://www.facebook.com/profile.php?id=100066513801954"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiFacebook />
                </a>

                <a
                  href="
https://www.linkedin.com/in/hammed-mustapha-b25a24328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiLinkedin />
                </a>

                <a
                  href="https://www.instagram.com/aphamedprints?igsh=MTJydzV2OWowYTI4OQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiInstagram />
                </a>

                <a
                  href="https://www.tiktok.com/@olawale1601"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiTiktokLogoThin />
                </a>

                <a
                  href="https://x.com/certifiedomoal1?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-[#6B6B6B] font-bold text-sm leading-8 ">
                QUICKLINKS
              </h3>
              <ul className="text-(--neutral-color) font-extralight text-sm leading-8">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/About">About Us</Link>
                </li>
                <li>
                  <Link href="/Service">Services</Link>
                </li>
                <li>
                  <Link href="/Products">Products</Link>
                </li>
                <li>
                  <Link href="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#6B6B6B] font-bold text-sm leading-8 ">
                Legal
              </h3>
              <ul className="text-(--neutral-color) font-extralight text-sm leading-8">
                <li>
                  <Link href="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/return">Returns Policy</Link>
                </li>
                <li>
                  <Link href="/shipping">Shipping Rates</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#6B6B6B] font-bold text-sm leading-8 ">
                Help
              </h3>
              <ul className="text-(--neutral-color) font-extralight text-sm leading-8">
                <li>
                  <Link href="/faq">Help & FAQ</Link>
                </li>
                <li>
                  <Link href="/contact">Contact us</Link>
                </li>
                <li>
                  <Link href="/terms">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/site">Site Map</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet */}
      <div className="lg:hidden block bg-(--primary-color) w-full py-10 px-5">
        {/* Logo + Social */}
        <div className="flex flex-col items-start gap-4 text-center">
          <img src="/image/footer-logo.png" alt="logo" className="w-28" />
          <p className="text-sm text-left text-(--neutral-color) font-light leading-6">
            Dedicated to turning ideas into reality <br /> through stunning
            prints, creative branding, <br /> and meaningful digital design{" "}
            <br /> experiences
          </p>
          <div className="flex items-center gap-3 text-(--neutral-color) mt-2 animate-bounce">
            <a
              href="https://www.facebook.com/profile.php?id=100066513801954"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiFacebook />
            </a>

            <a
              href="
https://www.linkedin.com/in/hammed-mustapha-b25a24328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin />
            </a>

            <a
              href="https://www.instagram.com/aphamedprints?igsh=MTJydzV2OWowYTI4OQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@olawale1601"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiTiktokLogoThin />
            </a>

            <a
              href="https://x.com/certifiedomoal1?s=21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="mt-8 flex flex-col gap-6 text-left">
          <div>
            <h3 className="text-[#6B6B6B] font-bold text-sm mb-2">
              QUICKLINKS
            </h3>
            <ul className="text-(--neutral-color) font-extralight text-sm leading-7">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#6B6B6B] font-bold text-sm mb-2">LEGAL</h3>
            <ul className="text-(--neutral-color) font-extralight text-sm leading-7">
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/return">Returns Policy</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping Rates</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#6B6B6B] font-bold text-sm mb-2">HELP</h3>
            <ul className="text-(--neutral-color) font-extralight text-sm leading-7">
              <li>
                <Link href="/faq">Help & FAQ</Link>
              </li>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/site">Site Map</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <hr />
      <div className="bg-(--primary-color) w-full py-4 text-center">
        <p className="text-(--neutral-color) text-sm font-light">
          © {new Date().getFullYear()} Aphamed Prints Ltd. All rights reserved.
        </p>
      </div>
    </>
  );
}
