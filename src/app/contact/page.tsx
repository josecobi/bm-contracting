'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ContactPageSchema, BreadcrumbSchema } from '@/components/StructuredData'

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Structured Data */}
      <ContactPageSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact/' }
      ]} />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
        {/* Background Pattern - Simplified for mobile */}
        {!isMobile && (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-green-900/50 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Let&apos;s Start a Conversation</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Get in <span className="bg-linear-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">Touch</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-green-50/90 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your space? We&apos;re here to help bring your vision to life. Reach out today for a free consultation.
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-16 text-gray-50" viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 22L60 18.8C120 15.7 240 9.3 360 7.8C480 6.3 600 9.7 720 14.2C840 18.7 960 24.3 1080 22C1200 19.7 1320 9.3 1380 4.2L1440 -1V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-linear-to-r from-green-700 to-green-500 mx-auto rounded-full" />
          </div>

          {/* Contact Form - Commented out until client setup is ready */}
          {/* <div className="flex flex-col md:flex-row md:space-x-12 gap-12">
            <div>
              <form
                action="https://formsubmit.co/EMAIL@example.com" //TODO: Replace clients email
                method="POST"
                className="bg-white p-8 md:p-10 shadow-2xl rounded-2xl border border-gray-100 space-y-6"
              >
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://domain.com/thank-you" />//TODO: Replace clients domain

                <div>
                  <label className="block font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-green-700 to-green-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div> */}

          {/* Contact Info - Centered layout */}
          <div className="flex justify-center">
            <div className="space-y-6 max-w-md w-full">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-start space-x-4 md:hover:shadow-xl md:hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-linear-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+13013515379" className="text-gray-600 hover:text-green-700 transition-colors">
                    (301) 351-5379
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-start space-x-4 md:hover:shadow-xl md:hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-linear-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Email</h3>
                  <a href="mailto:bm.ubarahona@gmail.com" className="text-gray-600 hover:text-green-700 transition-colors break-all">
                    bm.ubarahona@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-start space-x-4 md:hover:shadow-xl md:hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-linear-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Service Area</h3>
                  <p className="text-gray-600">
                    Maryland & Surrounding Areas
                  </p>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="bg-linear-to-br from-green-700 to-green-600 p-8 rounded-2xl shadow-xl text-white">
                <h3 className="font-bold text-xl mb-3">Why Choose Us?</h3>
                <ul className="space-y-2 text-green-50">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Free Consultations
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    20+ Years Experience
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Quality Guaranteed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      {/* <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <div className="w-20 h-1 bg-linear-to-r from-green-700 to-green-500 mx-auto rounded-full" />
          </div>

          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
            <iframe
              className="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6344833.592857416!2d-77.11314!3d39.0594721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cde53623a6c3%3A0xd83c4d6003aae6dd!2sBM%20Contractors%20LLP!5e0!3m2!1sen!2sus!4v1750700973379!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section> */}
    </main>
  )
}
