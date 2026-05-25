import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-muca-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo-circle.svg"
              alt="Muca Kebap"
              width={80}
              height={80}
              className="mb-4"
            />
            <p className="text-gray-300 text-sm text-center md:text-left">
              Frisch. Halal. Hausgemacht.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-bold text-muca-yellow">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 transition-colors hover:text-muca-yellow">Home</Link></li>
              <li><Link href="/uber-uns" className="text-gray-300 transition-colors hover:text-muca-yellow">Über Uns</Link></li>
              <li><Link href="/kontakt" className="text-gray-300 transition-colors hover:text-muca-yellow">Kontakt</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-bold text-muca-yellow">Kontakt</h3>
            <address className="not-italic text-gray-300 space-y-2 text-sm">
              <p>Oranienpl. 2, 10999 Berlin</p>
              <p>Tel: 0000</p>
              <a
                href="https://www.instagram.com/mucakebap.berlin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-muca-yellow mt-2"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @mucakebap.berlin
              </a>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Muca Kebap. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
