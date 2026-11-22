
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className="bg-[#FFF5F7] dark:bg-[#241820] text-[#876A75] dark:text-[#DCC3CC] transition-colors duration-300">

        {/* Footer Main */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-14">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

            {/* About */}
            <div>
              <div className="mb-5">
                <h2 className="text-2xl font-serif tracking-wide text-[#754B5A] dark:text-[#FFE7EF]">
                  THE GLOW
                </h2>

                <p className="text-xs tracking-[0.4em] text-[#C17F98] dark:text-[#F3B9CD]">
                  STUDIO
                </p>
              </div>

              <p className="text-sm leading-7 text-[#876A75] dark:text-[#DCC3CC]">
                Where Beauty Meets Confidence. Discover your beauty
                with our premium beauty services and relaxing
                self-care experience.
              </p>

              {/* Social Media */}
              <div className="flex items-center gap-4 mt-6">

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FCE4EC] dark:bg-[#3A2933] text-[#A75F7C] dark:text-[#F3B9CD] font-medium hover:bg-[#C17F98] hover:text-white dark:hover:bg-[#F3B9CD] dark:hover:text-[#241820] transition-all duration-300"
                >
                  IG
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FCE4EC] dark:bg-[#3A2933] text-[#A75F7C] dark:text-[#F3B9CD] font-medium hover:bg-[#C17F98] hover:text-white dark:hover:bg-[#F3B9CD] dark:hover:text-[#241820] transition-all duration-300"
                >
                  FB
                </a>

              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-serif text-[#754B5A] dark:text-[#FFE7EF] mb-6">
                Quick Links
              </h3>

              <ul className="space-y-4 text-sm text-[#876A75] dark:text-[#DCC3CC]">

                <li>
                  <Link to="/" className="hover:text-[#C17F98] dark:hover:text-[#F3B9CD] transition-colors duration-300">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="hover:text-[#C17F98] dark:hover:text-[#F3B9CD] transition-colors duration-300">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link to="/services" className="hover:text-[#C17F98] dark:hover:text-[#F3B9CD] transition-colors duration-300">
                    Our Menu
                  </Link>
                </li>

                <li>
                  <Link to="/gallery" className="hover:text-[#C17F98] dark:hover:text-[#F3B9CD] transition-colors duration-300">
                    Gallery
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="hover:text-[#C17F98] dark:hover:text-[#F3B9CD] transition-colors duration-300">
                    Contact Us
                  </Link>
                </li>

              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-xl font-serif text-[#754B5A] dark:text-[#FFE7EF] mb-6">
                Our Services
              </h3>

              <ul className="space-y-4 text-sm text-[#876A75] dark:text-[#DCC3CC]">
                <li>Hair Styling</li>
                <li>Hair Spa</li>
                <li>Facial Treatment</li>
                <li>Bridal Makeup</li>
                <li>Manicure</li>
                <li>Pedicure</li>
              </ul>
            </div>

            {/* Contact and Hours */}
            <div>

              <h3 className="text-xl font-serif text-[#754B5A] dark:text-[#FFE7EF] mb-6">
                Contact Us
              </h3>

              <div className="space-y-4 text-sm text-[#876A75] dark:text-[#DCC3CC]">

                <p>📍 Jodhpur, Rajasthan, India</p>

                <p>
                  📞 <a href="tel:+919125692795" className="hover:text-[#C17F98] dark:hover:text-[#F3B9CD] transition">
                    +91 9125692795
                  </a>
                </p>

                <p className="break-all">
                  ✉️ <a href="mailto:theglowstudio.beauty@gmail.com" className="hover:text-[#C17F98] dark:hover:text-[#F3B9CD] transition">
                    theglowstudio.beauty@gmail.com
                  </a>
                </p>

              </div>

              <h4 className="text-lg font-serif text-[#754B5A] dark:text-[#FFE7EF] mt-7 mb-4">
                Business Hours
              </h4>

              <p className="text-sm text-[#876A75] dark:text-[#DCC3CC] leading-7">
                Monday - Saturday<br />
                10:00 AM - 8:00 PM<br />
                Sunday - 9:00 AM - 9:00 PM
              </p>

            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#F0D5DF] dark:border-[#49323E] transition-colors duration-300">

          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">

            <p className="text-sm text-[#876A75] dark:text-[#DCC3CC] text-center">
              © 2026 The Glow Studio. All Rights Reserved.
            </p>

            <p className="text-sm text-[#C17F98] dark:text-[#F3B9CD] font-medium text-center">
              Where Beauty Meets Confidence
            </p>

          </div>
        </div>

      </footer>
    </>
  )
}
