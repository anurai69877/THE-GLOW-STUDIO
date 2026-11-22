
import React from 'react'
import { Link } from 'react-router-dom'

// Background Image
import heroBg from '../../assets/image/backgound image.jpg'

// Services Images
import hairImg from '../../assets/image/Hair.jpg'
import nailImg from '../../assets/image/Nail.jpg'
import pedicureImg from '../../assets/image/pedicure.png'
import facialImg from '../../assets/image/Facial.jpg'
import manicureImg from '../../assets/image/manicure.png'
import makeupImg from '../../assets/image/Makeup.jpg'
import transferImg from '../../assets/image/transfer.png'

// Instagram Images
import insta1 from '../../assets/image/insta1.jpg'
import hairStyle from '../../assets/image/hair style.webp'
import insta2 from '../../assets/image/insta2.jpg'
import insta3 from '../../assets/image/insta3.jpg'

// Review Images
import review1 from '../../assets/image/review1.jpg'
import review2 from '../../assets/image/review2.jpg'
import review3 from '../../assets/image/review3.jpg'

export  function HomePages() {

  // Instagram Images
  const instagramImages = [
    { src: insta1, alt: 'Professional hair styling' },
    { src: nailImg, alt: 'Beautiful nail art' },
    { src: hairStyle, alt: 'Beauty and skincare products' },
    { src: insta2, alt: 'Elegant bridal beauty makeup' },
    { src: insta3, alt: 'Relaxing spa beauty treatment' },
    { src: facialImg, alt: 'Professional facial treatment' }
  ]

  // Services
  const services = [
    { src: hairImg, alt: "Women's hair cut and styling", title: 'Hair Cut & Styling' },
    { src: nailImg, alt: 'Beautiful nail art', title: 'Nail Art' },
    { src: pedicureImg, alt: 'Pedicure treatment', title: 'Pedicure' },
    { src: facialImg, alt: 'Relaxing facial treatment', title: 'Facial' },
    { src: manicureImg, alt: 'Hand manicure treatment', title: 'Manicure' },
    { src: makeupImg, alt: 'Professional makeup service', title: 'Makeup' }
  ]

  // Customer Reviews
  const reviews = [
    {
      image: review1,
      alt: 'Female salon customer',
      name: 'Priya Sharma',
      service: 'BRIDAL MAKEUP',
      message: 'I had the most amazing bridal makeup experience. Everything was perfectly done and the team made me feel so special. I absolutely loved the results!'
    },
    {
      image: review2,
      alt: 'Female skincare customer',
      name: 'Aarushi Verma',
      service: 'FACIAL & SKINCARE',
      message: 'Such a beautiful salon with a peaceful atmosphere. The facial service was wonderful and the staff was extremely kind and professional. Highly recommended!'
    },
    {
      image: review3,
      alt: 'Female hair styling customer',
      name: 'Mehak Jain',
      service: 'HAIR STYLING',
      message: 'Absolutely loved my hair transformation! The team understood my preferences and gave me exactly the look I wanted. Will definitely visit again!'
    }
  ]

  return (

    <div className="bg-[#FFF9FA] dark:bg-[#241820] transition-colors duration-300">

      {/* ================= HERO SECTION ================= */}

      <section className="relative min-h-[600px] md:min-h-[650px] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <img
          src={heroBg}
          alt="The Glow Studio luxury beauty salon"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[#35232D]/75"></div>

        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 text-center py-20">

          <div className="bg-[#3A2933]/75 backdrop-blur-md border border-[#F3B9CD]/30 rounded-3xl px-6 py-12 md:px-14 md:py-16 shadow-2xl">

            <p className="text-[#F3B9CD] uppercase tracking-[0.3em] text-xs sm:text-sm md:text-base font-semibold mb-6">
              Welcome To The Glow Studio
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">

              Where Beauty

              <span className="block italic text-[#F3B9CD] mt-3">
                Meets Confidence
              </span>

            </h1>

            <p className="text-[#FFF0F5] text-sm sm:text-base md:text-lg leading-8 max-w-2xl mx-auto mt-7">

              Experience the beauty of luxury and relaxation.
              Let us bring out your natural glow with our premium
              beauty services and personalized care.

            </p>

            <div className="flex justify-center mt-10">

              <Link
                to="/contact"
                className="bg-[#F3B9CD] text-[#35232D] font-bold px-10 py-4 rounded-full shadow-lg hover:bg-[#FFE4ED] hover:scale-105 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BEAUTY SERVICES ================= */}

      <section className="w-full bg-[#FFF5F7] dark:bg-[#30232B] py-20 overflow-hidden transition-colors duration-300">

        <div className="text-center mb-12 px-5">

          <p className="text-[#C17F98] text-sm uppercase tracking-[0.3em] mb-3 font-semibold">
            Explore Our Services
          </p>

          <h2 className="text-[#754B5A] dark:text-[#FFE7EF] text-4xl sm:text-5xl font-serif">
            Our Beauty Services
          </h2>

          <p className="text-[#876A75] dark:text-[#DCC3CC] mt-4 text-sm sm:text-base">
            Discover beauty treatments made just for you.
          </p>

        </div>


        {/* Services Grid */}

        <div className="max-w-[1400px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((item, index) => (

            <div
              key={index}
              className="relative h-[300px] sm:h-[350px] lg:h-[380px] overflow-hidden rounded-2xl group shadow-lg"
            >

              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#241820]/90 via-[#35232D]/10 to-transparent"></div>

              <h3 className="absolute bottom-7 left-0 w-full text-center text-white text-2xl sm:text-3xl font-serif group-hover:text-[#F3B9CD] transition duration-300">
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </section>


      {/* ================= BEFORE AFTER ================= */}

      <section className="w-full bg-[#FFF9FA] dark:bg-[#241820] py-20 lg:py-24 transition-colors duration-300">

        <div className="text-center px-4 mb-12">

          <p className="text-sm uppercase tracking-[4px] text-[#C17F98] font-semibold mb-3">
            Real Beauty, Real Transformations
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#754B5A] dark:text-[#FFE7EF]">
            The Art of Transformation
          </h2>

          <p className="text-[#876A75] dark:text-[#DCC3CC] mt-4 text-sm sm:text-base">
            From natural beauty to bridal elegance, discover the magic of our artists.
          </p>

        </div>


        <div className="max-w-5xl mx-auto px-5">

          <div className="relative overflow-hidden bg-[#FCE8EE] dark:bg-[#3A2933] p-3 sm:p-4 rounded-3xl shadow-xl group">

            <div className="relative overflow-hidden rounded-2xl">

              <img
                src={transferImg}
                alt="Bridal makeup before and after transformation"
                loading="lazy"
                className="w-full h-[350px] sm:h-[500px] lg:h-[600px] object-cover transition duration-700 group-hover:scale-[1.02]"
              />

              <span className="absolute bottom-5 left-5 sm:left-8 bg-[#FFF9FA] text-[#754B5A] px-6 py-3 rounded-full text-xs tracking-[3px] font-bold uppercase shadow-md">
                Before
              </span>

              <span className="absolute bottom-5 right-5 sm:right-8 bg-[#754B5A] text-white px-6 py-3 rounded-full text-xs tracking-[3px] font-bold uppercase shadow-md">
                After
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INSTAGRAM GALLERY ================= */}

      <section className="w-full bg-[#FFF5F7] dark:bg-[#30232B] py-20 lg:py-24 transition-colors duration-300">

        <div className="text-center mb-12 px-4">

          <p className="text-sm uppercase tracking-[4px] text-[#C17F98] font-semibold mb-3">
            Stay Connected
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#754B5A] dark:text-[#FFE7EF]">
            Follow Our Journey
          </h2>

          <p className="text-[#876A75] dark:text-[#DCC3CC] text-sm sm:text-base mt-4">
            Get inspired by beauty, elegance and everyday glow.
          </p>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-5 text-[#B66F89] dark:text-[#F3B9CD] font-semibold text-sm tracking-wide hover:text-[#754B5A] dark:hover:text-white transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C17F98]"
          >
            @theglowstudio
          </a>

        </div>


        {/* Instagram Images Grid */}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 px-5 lg:px-8">

          {instagramImages.map((item, index) => (

            <a
              key={index}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label={`View beauty inspiration: ${item.alt}`}
              className="group relative overflow-hidden h-[220px] sm:h-[280px] lg:h-[340px] rounded-xl shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C17F98]"
            >

              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-[#754B5A]/0 group-hover:bg-[#754B5A]/30 transition duration-500"></div>

            </a>

          ))}

        </div>


        <div className="text-center mt-10 px-4">

          <p className="text-[#754B5A] dark:text-[#F3B9CD] text-sm tracking-wider font-medium">
            BEAUTY IS OUR PASSION, GLOW IS OUR SIGNATURE.
          </p>

        </div>

      </section>


      {/* ================= TESTIMONIALS ================= */}

      <section className="bg-[#FFF9FA] dark:bg-[#241820] py-20 md:py-28 transition-colors duration-300">

        <div className="max-w-[1250px] mx-auto px-5 md:px-10">

          <div className="text-center mb-14">

            <p className="text-[#C17F98] text-sm uppercase tracking-[5px] mb-4 font-semibold">
              Testimonials
            </p>

            <h2 className="text-4xl md:text-5xl font-serif text-[#754B5A] dark:text-[#FFE7EF]">
              Beauty Begins With Trust
            </h2>

            <p className="text-[#876A75] dark:text-[#DCC3CC] mt-4">
              Beautiful experiences shared by our happy customers.
            </p>

          </div>


          {/* Reviews Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {reviews.map((review, index) => (

              <article
                key={index}
                className="bg-[#FFF0F4] dark:bg-[#3A2933] p-8 md:p-9 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-500 border border-[#F3DCE4] dark:border-[#563744]"
              >

                <div className="flex justify-between items-center mb-7">

                  <span
                    className="text-[#C17F98] text-2xl tracking-widest"
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </span>

                  <span className="text-5xl text-[#D99CB1] font-serif">
                    “
                  </span>

                </div>


                <p className="text-[#876A75] dark:text-[#E4CDD6] leading-8 text-[15px] mb-9">
                  {review.message}
                </p>


                <div className="flex items-center gap-4">

                  <img
                    src={review.image}
                    alt={review.alt}
                    loading="lazy"
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#D99CB1]"
                  />

                  <div>

                    <h3 className="text-[#754B5A] dark:text-[#FFE7EF] font-semibold">
                      {review.name}
                    </h3>

                    <p className="text-[#B66F89] dark:text-[#F3B9CD] text-xs mt-2 tracking-wider font-semibold">
                      {review.service}
                    </p>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </div>
  )
}
export default HomePages;