'use client'

import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl">
            Let&apos;s bring your dream space to life — reach out today.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            action="https://formsubmit.co/EMAIL@example.com" //TODO: Replace clients email 
            method="POST"
            className="bg-white p-8 shadow-lg rounded-lg space-y-6"
          >
             {/* Honeypot spam field */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://domain.com/thank-you" />{/*TODO: Replace clients domain */}

            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full border border-gray-300 p-3 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="text-green-700 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p>(301)-351-5379</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="text-green-700 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p>bm.ubarahona@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="text-green-700 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
<section className="px-4 pb-20">
  <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
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
</section>
    </main>
  )
}
