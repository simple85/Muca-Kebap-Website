"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/uber-uns", label: "Über Uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-circle.svg"
              alt="Muca Kebap"
              width={56}
              height={56}
              className="h-14 w-14"
            />
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-semibold transition-colors hover:text-muca-yellow ${
                  pathname === link.href
                    ? "text-muca-yellow"
                    : "text-muca-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/mucakebap.berlin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-muca-dark transition-colors hover:text-muca-yellow"
              aria-label="Instagram"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>

          {/* Mobile menu – content inside <details> is natively toggled */}
          <details ref={detailsRef} className="md:hidden group relative">
            <summary className="list-none cursor-pointer p-3 -mr-2 rounded-lg active:bg-gray-100 [&::-webkit-details-marker]:hidden">
              <svg className="h-7 w-7 text-muca-dark pointer-events-none group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="h-7 w-7 text-muca-dark pointer-events-none hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </summary>
            <div className="absolute right-0 top-full mt-2 w-screen border-t border-gray-100 bg-white px-4 pb-4 pt-2 shadow-lg"
              style={{ right: "-1rem", width: "100vw" }}>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block py-3 text-lg font-semibold transition-colors ${
                    pathname === link.href ? "text-muca-yellow" : "text-muca-dark"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/mucakebap.berlin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-lg font-semibold text-muca-dark"
              >
                Instagram
              </a>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
