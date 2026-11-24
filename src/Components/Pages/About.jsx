
import React from "react";

// All Images Import
import about1 from '../../assets/image/About1.avif'
import about2 from '../../assets/image/About2.avif'
import loreal from "../../assets/image/l'oreal paris.jpg"
import mac from '../../assets/image/MAC Cosmetics.jpg'
import maybelline from '../../assets/image/Maybelline.jpg'
import lakme from '../../assets/image/Lakme.jpg'
import huda from '../../assets/image/Huda Beauty.jpg'

export default function About() {
  return (
    <div className="bg-[#FFF9FA] dark:bg-[#241820] transition-colors duration-300">

      {/* ABOUT HERO SECTION */}
      <section className="relative min-h-[400px] md:min-h-[520px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#3B2530] via-[#754B5A] to-[#241820]">

        <div className="absolute top-0 left-0 w-72 h-72 bg-[#C17F98]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F0B8CC]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-[900px] mx-auto px-5 text-center py-20">

          <p className="text-[#F0B8CC] uppercase tracking-[5px] text-xs sm:text-sm mb-5">
            Welcome To The Glow Studio
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
            About <span className="italic text-[#F0B8CC]">Our Studio</span>
          </h1>

          <p className="text-[#FFF5F7] text-sm sm:text-base md:text-lg leading-8 max-w-2xl mx-auto">
            Experience the art of beauty with personalized care, luxurious
            treatments and a touch of elegance in every detail.
          </p>

          <div className="mt-8">
            <span className="inline-block text-[#F0B8CC] text-sm tracking-[3px] uppercase">
              Beauty • Care • Confidence
            </span>
          </div>

        </div>
      </section>


      {/* 1. OUR STORY */}
      <section className="bg-[#FFF9FA] dark:bg-[#241820] py-20 md:py-28 overflow-hidden transition-colors duration-300">

        <div className="max-w-[1250px] mx-auto px-5 md:px-10">

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* First Image */}
            <div className="relative group overflow-hidden rounded-[25px] shadow-xl">

              <img
                src={about1}
                alt="Elegant beauty salon interior"
                className="w-full h-[420px] md:h-[520px] object-cover transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-[#754B5A]/10 group-hover:bg-transparent transition-all duration-500"></div>

              <div className="absolute bottom-5 right-5 bg-[#754B5A] text-white px-6 py-4 rounded-xl shadow-xl">

                <p className="font-serif text-xl italic">
                  The Glow Studio
                </p>

                <p className="text-[#F6DCE5] text-[10px] tracking-[2px] uppercase mt-1">
                  Beauty & Elegance
                </p>

              </div>
            </div>


            {/* Our Story Content */}
            <div className="pt-5 md:pt-0 md:pl-4">

              <p className="text-[#C17F98] uppercase tracking-[4px] text-sm mb-4 font-medium">
                Get To Know Us
              </p>

              <h2 className="text-4xl md:text-6xl font-serif text-[#754B5A] dark:text-[#FFE7EF] leading-tight mb-7">
                Our Story <br />
                <span className="italic text-[#C17F98]">
                  Behind The Glow
                </span>
              </h2>

              <p className="text-[#876A75] dark:text-[#DCC3CC] leading-8 mb-5">
                The Glow Studio was created with a simple idea — every
                person deserves to feel beautiful, confident and special.
                We believe that beauty begins with self-love and care.
              </p>

              <p className="text-[#876A75] dark:text-[#DCC3CC] leading-8 mb-7">
                Our studio is a place where elegance meets creativity.
                From relaxing skincare experiences to beautiful makeup
                and styling, we make every moment feel special.
              </p>

              <p className="font-serif italic text-xl md:text-2xl text-[#754B5A] dark:text-[#F4C9D8]">
                "Your beauty, our passion."
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* 2. THE ART OF BEAUTY */}
      <section className="bg-[#FFF5F7] dark:bg-[#30232B] py-20 md:py-28 overflow-hidden transition-colors duration-300">

        <div className="max-w-[1250px] mx-auto px-5 md:px-10">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Content */}
            <div>

              <p className="text-[#C17F98] uppercase tracking-[4px] text-sm mb-4">
                Beauty Is An Art
              </p>

              <h2 className="text-4xl md:text-5xl font-serif text-[#754B5A] dark:text-[#FFE7EF] leading-tight mb-7">
                The Art Of Beauty
              </h2>

              <p className="text-[#876A75] dark:text-[#DCC3CC] leading-8 mb-5">
                Beauty is not about changing who you are. It is about
                celebrating your individuality and bringing out the
                confidence that already exists within you.
              </p>

              <p className="text-[#876A75] dark:text-[#DCC3CC] leading-8">
                At The Glow Studio, we believe every little detail
                matters. From skincare to makeup and hair styling,
                every experience is designed with creativity, care
                and attention.
              </p>

            </div>


            {/* Two Images */}
            <div className="grid grid-cols-2 gap-4 md:gap-5">

              <div className="group relative overflow-hidden rounded-2xl shadow-lg mt-8">

                <img
                  src={about2}
                  alt="Professional beauty makeup look"
                  className="w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-[#754B5A]/10 group-hover:bg-transparent transition-all duration-500"></div>

              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg mb-8">

                <img
                  src={about1}
                  alt="Luxury beauty studio interior"
                  className="w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-[#754B5A]/10 group-hover:bg-transparent transition-all duration-500"></div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 3. MISSION & VISION */}
      <section className="bg-[#FFF9FA] dark:bg-[#241820] py-20 md:py-24 transition-colors duration-300">

        <div className="max-w-[1200px] mx-auto px-5 md:px-10">

          <div className="text-center mb-14">

            <p className="text-[#C17F98] uppercase tracking-[4px] text-sm mb-4">
              What We Believe
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-[#754B5A] dark:text-[#FFE7EF]">
              Our Mission & Vision
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Mission */}
            <div className="group bg-[#FFF5F7] dark:bg-[#3A2933] p-9 md:p-12 text-center rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">

              <div className="w-16 h-16 rounded-full bg-[#754B5A] text-white flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                ✦
              </div>

              <h3 className="font-serif text-3xl text-[#754B5A] dark:text-[#FFE7EF] mb-5">
                Our Mission
              </h3>

              <p className="text-[#876A75] dark:text-[#DCC3CC] leading-8">
                Our mission is to create a welcoming beauty space where
                every guest feels valued, relaxed and confident through
                thoughtful care and professional service.
              </p>

            </div>


            {/* Vision */}
            <div className="group bg-[#FFF5F7] dark:bg-[#3A2933] p-9 md:p-12 text-center rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">

              <div className="w-16 h-16 rounded-full bg-[#754B5A] text-white flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                ♡
              </div>

              <h3 className="font-serif text-3xl text-[#754B5A] dark:text-[#FFE7EF] mb-5">
                Our Vision
              </h3>

              <p className="text-[#876A75] dark:text-[#DCC3CC] leading-8">
                Our vision is to become a trusted beauty destination
                known for elegance, care and an experience that makes
                every visit memorable.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* 4. WHY CHOOSE US */}
      <section className="bg-[#754B5A] dark:bg-[#3A2631] py-20 md:py-24 transition-colors duration-300">

        <div className="max-w-[1200px] mx-auto px-5 md:px-10">

          <div className="text-center mb-14">

            <p className="text-[#F0B8CC] uppercase tracking-[4px] text-sm mb-4">
              The Glow Difference
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-white">
              Why Choose Us?
            </h2>

          </div>

          {/* Flexbox Layout */}
          <div className="flex flex-wrap justify-center gap-8">

            {/* Expert Care */}
            <div className="group w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] text-center px-4 py-5 rounded-xl hover:bg-[#FFF9FA]/10 transition-all duration-500">

              <div className="text-4xl text-[#F0B8CC] mb-5 group-hover:scale-125 transition-transform duration-500">
                ✧
              </div>

              <h3 className="font-serif text-2xl text-white mb-4">
                Expert Care
              </h3>

              <p className="text-[#F2DDE5] leading-7 text-sm">
                Professional attention and care in every beauty experience.
              </p>

            </div>


            {/* Personal Touch */}
            <div className="group w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] text-center px-4 py-5 rounded-xl hover:bg-[#FFF9FA]/10 transition-all duration-500">

              <div className="text-4xl text-[#F0B8CC] mb-5 group-hover:scale-125 transition-transform duration-500">
                ♡
              </div>

              <h3 className="font-serif text-2xl text-white mb-4">
                Personal Touch
              </h3>

              <p className="text-[#F2DDE5] leading-7 text-sm">
                Every guest receives thoughtful and personalized attention.
              </p>

            </div>


            {/* Relaxing Space */}
            <div className="group w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] text-center px-4 py-5 rounded-xl hover:bg-[#FFF9FA]/10 transition-all duration-500">

              <div className="text-4xl text-[#F0B8CC] mb-5 group-hover:scale-125 transition-transform duration-500">
                ❀
              </div>

              <h3 className="font-serif text-2xl text-white mb-4">
                Relaxing Space
              </h3>

              <p className="text-[#F2DDE5] leading-7 text-sm">
                Enjoy a peaceful atmosphere designed for your comfort.
              </p>

            </div>


            {/* Quality First */}
            <div className="group w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] text-center px-4 py-5 rounded-xl hover:bg-[#FFF9FA]/10 transition-all duration-500">

              <div className="text-4xl text-[#F0B8CC] mb-5 group-hover:scale-125 transition-transform duration-500">
                ✦
              </div>

              <h3 className="font-serif text-2xl text-white mb-4">
                Quality First
              </h3>

              <p className="text-[#F2DDE5] leading-7 text-sm">
                We focus on quality, hygiene and attention to detail.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* 5. OUR PREMIUM BRANDS */}
      <section className="bg-[#FFF5F7] dark:bg-[#30232B] py-20 px-5 sm:px-8 transition-colors duration-300">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-[#C17F98] uppercase tracking-[4px] text-sm font-semibold mb-3">
              Beauty We Trust
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#754B5A] dark:text-[#FFE7EF]">
              Our Brands
            </h2>

            <p className="text-[#876A75] dark:text-[#DCC3CC] mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7">
              We proudly work with world-renowned beauty brands to bring
              you exceptional quality, luxurious care and beautiful results.
            </p>

          </div>


          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">

            {/* LOREAL */}
            <div className="group bg-[#FFF9FA] dark:bg-[#3A2933] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

              <div className="h-44 sm:h-52 overflow-hidden">

                <img
                  src={loreal}
                  alt="L'Oreal Paris beauty products"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

              </div>

              <div className="text-center py-6 px-2">

                <h3 className="text-[#754B5A] dark:text-[#FFE7EF] font-serif text-lg font-semibold">
                  L'Oréal Paris
                </h3>

                <p className="text-[#C17F98] text-[11px] uppercase tracking-[2px] mt-2">
                  Beauty Partner
                </p>

              </div>
            </div>


            {/* MAC */}
            <div className="group bg-[#FFF9FA] dark:bg-[#3A2933] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

              <div className="h-44 sm:h-52 overflow-hidden">

                <img
                  src={mac}
                  alt="MAC Cosmetics makeup"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

              </div>

              <div className="text-center py-6 px-2">

                <h3 className="text-[#754B5A] dark:text-[#FFE7EF] font-serif text-lg font-semibold">
                  MAC Cosmetics
                </h3>

                <p className="text-[#C17F98] text-[11px] uppercase tracking-[2px] mt-2">
                  Beauty Partner
                </p>

              </div>
            </div>


            {/* MAYBELLINE */}
            <div className="group bg-[#FFF9FA] dark:bg-[#3A2933] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

              <div className="h-44 sm:h-52 overflow-hidden">

                <img
                  src={maybelline}
                  alt="Maybelline beauty collection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

              </div>

              <div className="text-center py-6 px-2">

                <h3 className="text-[#754B5A] dark:text-[#FFE7EF] font-serif text-lg font-semibold">
                  Maybelline
                </h3>

                <p className="text-[#C17F98] text-[11px] uppercase tracking-[2px] mt-2">
                  Beauty Partner
                </p>

              </div>
            </div>


            {/* LAKME */}
            <div className="group bg-[#FFF9FA] dark:bg-[#3A2933] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

              <div className="h-44 sm:h-52 overflow-hidden">

                <img
                  src={lakme}
                  alt="Lakme beauty products"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

              </div>

              <div className="text-center py-6 px-2">

                <h3 className="text-[#754B5A] dark:text-[#FFE7EF] font-serif text-lg font-semibold">
                  Lakmé
                </h3>

                <p className="text-[#C17F98] text-[11px] uppercase tracking-[2px] mt-2">
                  Beauty Partner
                </p>

              </div>
            </div>


            {/* HUDA BEAUTY */}
            <div className="group bg-[#FFF9FA] dark:bg-[#3A2933] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

              <div className="h-44 sm:h-52 overflow-hidden">

                <img
                  src={huda}
                  alt="Huda Beauty makeup products"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

              </div>

              <div className="text-center py-6 px-2">

                <h3 className="text-[#754B5A] dark:text-[#FFE7EF] font-serif text-lg font-semibold">
                  Huda Beauty
                </h3>

                <p className="text-[#C17F98] text-[11px] uppercase tracking-[2px] mt-2">
                  Beauty Partner
                </p>

              </div>
            </div>

          </div>


          <div className="text-center mt-14">

            <p className="text-[#754B5A] dark:text-[#F4C9D8] font-serif italic text-xl">
              "Only the best for your beauty."
            </p>

            <p className="text-[#C17F98] text-xs tracking-[3px] uppercase mt-3">
              Quality • Luxury • Elegance
            </p>

          </div>

        </div>
      </section>

    </div>
  );
}
