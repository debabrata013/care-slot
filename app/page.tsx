import React from 'react';
import { Calendar, Clock, Shield, Bell, Star, Search, CheckCircle, ArrowRight, Heart, Users, Award } from 'lucide-react';

const CareSlotLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Book Trusted 
                  <span className="text-blue-400 block">Appointments,</span>
                  <span className="text-blue-400">Anytime.</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Connect with verified healthcare professionals and book appointments instantly. 
                  Your health, our priority.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-600 hover:border-blue-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-gray-900">
                  Book Appointment
                </button>
              </div>

              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">50K+</div>
                  <div className="text-gray-400">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">2K+</div>
                  <div className="text-gray-400">Verified Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99%</div>
                  <div className="text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                {/* Medical illustration */}
                <div className="w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20">
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                        <Heart className="w-16 h-16 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white">CareSlot</h3>
                        <p className="text-blue-300">Made Simple</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center animate-pulse">
                  <Calendar className="w-8 h-8 text-blue-400" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center animate-pulse">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Three simple steps to connect with the best healthcare professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center space-y-6 p-8 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Search Doctor</h3>
              <p className="text-gray-400">
                Browse through our extensive network of verified healthcare professionals by specialty, location, or availability.
              </p>
            </div>

            <div className="group text-center space-y-6 p-8 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Choose Slot</h3>
              <p className="text-gray-400">
                Select your preferred time slot from real-time availability. Flexible scheduling that fits your busy lifestyle.
              </p>
            </div>

            <div className="group text-center space-y-6 p-8 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Confirm Booking</h3>
              <p className="text-gray-400">
                Secure your appointment with instant confirmation and automated reminders. Your health journey starts here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose CareSlot</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience healthcare booking like never before with our cutting-edge platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <Clock className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">24/7 Booking</h3>
              <p className="text-gray-400">
                Book appointments anytime, anywhere. Our platform never sleeps, so your healthcare doesn't have to wait.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <Shield className="w-12 h-12 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Verified Doctors</h3>
              <p className="text-gray-400">
                All healthcare professionals are thoroughly verified and certified. Trust in quality care, always.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <Bell className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Instant Notifications</h3>
              <p className="text-gray-400">
                Stay informed with real-time updates, appointment reminders, and important health notifications.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <Heart className="w-12 h-12 text-red-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Personalized Care</h3>
              <p className="text-gray-400">
                AI-powered recommendations match you with the right specialists based on your health history.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <Award className="w-12 h-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Award Winning</h3>
              <p className="text-gray-400">
                Recognized as the leading healthcare booking platform with numerous industry awards.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <Users className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Community Support</h3>
              <p className="text-gray-400">
                Join thousands of satisfied patients in our supportive healthcare community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">What Our Patients Say</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real experiences from real people who trust CareSlot with their healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "CareSlot made booking my specialist appointment so easy. The interface is intuitive and the doctors are top-notch. Highly recommended!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Miller</h4>
                  <p className="text-gray-400 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "As a busy parent, CareSlot's 24/7 booking feature is a lifesaver. I can schedule appointments for my family anytime, even late at night."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Michael Johnson</h4>
                  <p className="text-gray-400 text-sm">Marketing Director</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "The quality of doctors on CareSlot is exceptional. Every appointment I've booked has exceeded my expectations. Thank you for the excellent service!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">EB</span>
                </div>
                <div>
                  <h4 className="font-semibold">Emily Brown</h4>
                  <p className="text-gray-400 text-sm">Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-400">CareSlot</h3>
              <p className="text-gray-400 leading-relaxed">
                Connecting patients with trusted healthcare professionals through innovative technology and seamless booking experiences.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-white text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-white text-sm">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">About</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Mission & Vision</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Support Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help & FAQ</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Live Chat</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Email Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Call Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">HIPAA Compliance</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">
                © 2025 CareSlot. All rights reserved. Empowering healthcare connections worldwide.
              </p>
              <div className="flex gap-6 text-gray-400">
                <a href="#" className="hover:text-blue-400 transition-colors">Status</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Security</a>
                <a href="#" className="hover:text-blue-400 transition-colors">API</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareSlotLanding;