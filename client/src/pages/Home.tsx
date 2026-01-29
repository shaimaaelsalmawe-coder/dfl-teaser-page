import { useEffect, useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#a488f4] to-[#8a6ef1] flex items-center justify-center text-white font-bold text-lg">
                DFL
              </div>
              <span className="font-bold text-xl text-[#1e3a8a] hidden sm:inline">
                Dear Future Luminary
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-[#a488f4] transition-colors font-medium">
                Features
              </a>
              <a href="#about" className="text-gray-600 hover:text-[#a488f4] transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-[#a488f4] transition-colors font-medium">
                Contact
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="px-6 py-2 text-[#a488f4] font-semibold hover:text-[#8a6ef1] transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#a488f4]/30 transition-all duration-300 hover:-translate-y-0.5">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#a488f4]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100">
              <a href="#features" className="block py-2 text-gray-600 hover:text-[#a488f4]">
                Features
              </a>
              <a href="#about" className="block py-2 text-gray-600 hover:text-[#a488f4]">
                About
              </a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-[#a488f4]">
                Contact
              </a>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 px-4 py-2 text-[#a488f4] font-semibold border border-[#a488f4] rounded-lg">
                  Sign In
                </button>
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] text-white rounded-lg font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#f2f3f5] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#a488f4]/10 rounded-full border border-[#a488f4]/20">
                <span className="w-2 h-2 bg-[#facc15] rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-[#a488f4]">Coming Soon</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-[#1e3a8a] leading-tight">
                Your Path to Global Opportunities
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Dear Future Luminary is a student-led platform designed to help ambitious students from MENA and underrepresented backgrounds discover, prepare for, and secure global opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3.5 bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#a488f4]/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                  Join Waitlist
                  <ChevronRight size={20} />
                </button>
                <button className="px-8 py-3.5 border-2 border-[#a488f4] text-[#a488f4] rounded-lg font-semibold hover:bg-[#a488f4]/5 transition-all duration-300">
                  Learn More
                </button>
              </div>

              <div className="flex gap-8 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-bold text-[#facc15]">500+</p>
                  <p className="text-gray-600 text-sm">Opportunities Curated</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#facc15]">10K+</p>
                  <p className="text-gray-600 text-sm">Students Reached</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#facc15]">50+</p>
                  <p className="text-gray-600 text-sm">Countries Covered</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full h-96">
                {/* Gradient Blob */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#a488f4]/20 to-[#facc15]/10 rounded-3xl blur-3xl"></div>
                
                {/* Card Stack */}
                <div className="absolute top-0 right-0 w-64 h-40 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#a488f4] to-[#8a6ef1] rounded-lg mb-4"></div>
                  <p className="text-sm font-semibold text-[#1e3a8a] mb-2">Opportunity Radar</p>
                  <p className="text-xs text-gray-600">Discover curated global programs</p>
                </div>

                <div className="absolute bottom-0 left-0 w-64 h-40 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-8 h-8 bg-[#facc15] rounded-lg mb-4"></div>
                  <p className="text-sm font-semibold text-[#1e3a8a] mb-2">Profile Building</p>
                  <p className="text-xs text-gray-600">Stand out with authentic profiles</p>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-40 bg-gradient-to-br from-[#a488f4] to-[#8a6ef1] rounded-2xl shadow-xl p-6 border border-[#a488f4]/30">
                  <div className="w-8 h-8 bg-white rounded-lg mb-4"></div>
                  <p className="text-sm font-semibold text-white mb-2">Roadmaps</p>
                  <p className="text-xs text-white/90">Structured paths to your goals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              What Makes DFL Different
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just list opportunities. We teach you how to become competitive for them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌍',
                title: 'Opportunity Radar',
                description: 'Curated hub of fully funded programs, scholarships, and international exchanges—all in one place.'
              },
              {
                icon: '🧭',
                title: 'Structured Roadmaps',
                description: 'Beginner-friendly guides for coding, research, medicine, and more—from curious to confident.'
              },
              {
                icon: '🎯',
                title: 'Profile Building',
                description: 'Learn to craft compelling CVs, portfolios, and personal statements that stand out authentically.'
              },
              {
                icon: '🚀',
                title: 'Personal Growth',
                description: 'Develop confidence, leadership, and mindset through curated resources and real challenges.'
              },
              {
                icon: '🤝',
                title: 'Community Support',
                description: 'Connect with peers, share experiences, and grow together in a supportive environment.'
              },
              {
                icon: '💡',
                title: 'AI-Powered Guidance',
                description: 'Get personalized recommendations and mentorship tailored to your unique journey.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-200 hover:border-[#a488f4] hover:shadow-lg transition-all duration-300 group bg-white"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#a488f4]/10 to-[#facc15]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            <span className="font-bold text-[#a488f4]">Talent is everywhere. Access is not.</span>
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Dear Future Luminary exists to close that gap—one student at a time—until being a luminary stops being an exception and becomes the norm. We believe that with the right guidance, information, and community, every ambitious student can access global opportunities and become the leader they're meant to be.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of students discovering their path to global opportunities.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] text-white rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-[#a488f4]/40 transition-all duration-300 hover:-translate-y-1">
            Join the Waitlist
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#facc15] flex items-center justify-center font-bold text-[#1e3a8a]">
                  DFL
                </div>
                <span className="font-bold">Dear Future Luminary</span>
              </div>
              <p className="text-white/70 text-sm">Empowering the next generation of global leaders.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Opportunities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmaps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2026 Dear Future Luminary. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
