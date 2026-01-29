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

  const programs = [
    { name: 'Yale Young Global Scholars', logo: 'yzWmAN3cqipr.jpg' },
    { name: 'MITES Summer', logo: 'TpB8TQlLTo0t.jpeg' },
    { name: 'Research Science Institute', logo: 'eA2DPI2dUl9E.png' },
    { name: 'TASS', logo: 'Gy653jScZN3s.jpg' },
    { name: 'Summer Science Program', logo: 'K51FDFwazPo9.jpg' },
    { name: 'Google CSSI', logo: 'S6O8ClfrudS9.png' },
    { name: 'NASA Space Apps', logo: '7Vd2e6O0Tysj.jpg' },
    { name: 'Kode With Klossy', logo: 'DUZWWvrt3CHC.jpg' },
    { name: 'Stanford Pre-College', logo: 'EaqhqRnzF3qb.jpg' },
    { name: 'TechGirls', logo: 'nRhom7EcP3cj.jpg' },
    { name: 'Soliya', logo: 'rcJRiGtof7hd.png' },
    { name: 'Youth Ambassadors', logo: 'z3bloNLXiQOR.png' },
    { name: 'ICYE', logo: 'IWl65sYv3dtL.jpg' },
    { name: 'Climate Olympiad', logo: 'Ps8nyzamqpV7.jpg' },
    { name: 'TEDx Youth', logo: '2DwCr1MrGKbb.jpg' },
    { name: 'AFS Intercultural', logo: 'LRsfzR5E3Tfa.jpg' },
    { name: 'The Experiment', logo: 'nRhom7EcP3cj.jpg' },
    { name: 'YES Abroad', logo: 'DUZWWvrt3CHC.jpg' },
    { name: 'NSLI-Y', logo: 'EaqhqRnzF3qb.jpg' },
    { name: 'CBYX', logo: '7Vd2e6O0Tysj.jpg' },
    { name: 'Junior Academy', logo: 'rcJRiGtof7hd.png' },
    { name: 'National Youth Science Camp', logo: 'z3bloNLXiQOR.png' },
    { name: 'Dear Future Luminary', logo: 'dear.future.luminary.logo.svg.svg' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Slack Style */}
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
            <div className="flex items-center gap-3">
              <img 
                src="/images/dear.future.luminary.logo.svg.svg" 
                alt="Dear Future Luminary" 
                className="h-10 w-10"
              />
              <span className="font-bold text-lg text-[#1e3a8a] hidden sm:inline">
                Dear Future Luminary
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-[#a488f4] transition-colors font-medium text-sm">
                Features
              </a>
              <a href="#about" className="text-gray-600 hover:text-[#a488f4] transition-colors font-medium text-sm">
                About
              </a>
              <a href="#programs" className="text-gray-600 hover:text-[#a488f4] transition-colors font-medium text-sm">
                Programs
              </a>
              <a href="#contact" className="text-gray-600 hover:text-[#a488f4] transition-colors font-medium text-sm">
                Contact
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="px-5 py-2 text-[#a488f4] font-semibold hover:text-[#8a6ef1] transition-colors text-sm">
                Sign In
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#a488f4]/30 transition-all duration-300 hover:-translate-y-0.5 text-sm">
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
              <a href="#features" className="block py-2 text-gray-600 hover:text-[#a488f4] text-sm">
                Features
              </a>
              <a href="#about" className="block py-2 text-gray-600 hover:text-[#a488f4] text-sm">
                About
              </a>
              <a href="#programs" className="block py-2 text-gray-600 hover:text-[#a488f4] text-sm">
                Programs
              </a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-[#a488f4] text-sm">
                Contact
              </a>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 px-4 py-2 text-[#a488f4] font-semibold border border-[#a488f4] rounded-lg text-sm">
                  Sign In
                </button>
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] text-white rounded-lg font-semibold text-sm">
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
                  <p className="text-3xl font-bold text-[#a488f4]">500+</p>
                  <p className="text-gray-600 text-sm">Opportunities Curated</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#a488f4]">100+</p>
                  <p className="text-gray-600 text-sm">Students Reached</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#a488f4]">5+</p>
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
                  <img src="/images/Radar.svg" alt="Opportunity Radar" className="w-8 h-8 mb-4" />
                  <p className="text-sm font-semibold text-[#1e3a8a] mb-2">Opportunity Radar</p>
                  <p className="text-xs text-gray-600">Discover curated global programs</p>
                </div>

                <div className="absolute bottom-0 left-0 w-64 h-40 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                  <img src="/images/Personal Profile.svg" alt="Profile Building" className="w-8 h-8 mb-4" />
                  <p className="text-sm font-semibold text-[#1e3a8a] mb-2">Profile Building</p>
                  <p className="text-xs text-gray-600">Stand out with authentic profiles</p>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-40 bg-gradient-to-br from-[#a488f4] to-[#8a6ef1] rounded-2xl shadow-xl p-6 border border-[#a488f4]/30">
                  <img src="/images/road map.svg" alt="Roadmaps" className="w-8 h-8 mb-4" />
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
                icon: 'Radar.svg',
                title: 'Opportunity Radar',
                description: 'Curated hub of fully funded programs, scholarships, and international exchanges—all in one place.'
              },
              {
                icon: 'road map.svg',
                title: 'Structured Roadmaps',
                description: 'Beginner-friendly guides for coding, research, medicine, and more—from curious to confident.'
              },
              {
                icon: 'Personal Profile.svg',
                title: 'Profile Building',
                description: 'Learn to craft compelling CVs, portfolios, and personal statements that stand out authentically.'
              },
              {
                icon: 'Upgrade.svg',
                title: 'Personal Growth',
                description: 'Develop confidence, leadership, and mindset through curated resources and real challenges.'
              },
              {
                icon: 'Teams.svg',
                title: 'Community Support',
                description: 'Connect with peers, share experiences, and grow together in a supportive environment.'
              },
              {
                icon: 'Cap.svg',
                title: 'AI-Powered Guidance',
                description: 'Get personalized recommendations and mentorship tailored to your unique journey.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-200 hover:border-[#a488f4] hover:shadow-lg transition-all duration-300 group bg-white"
              >
                <img src={`/images/${feature.icon}`} alt={feature.title} className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform duration-300" />
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

      {/* Logos Carousel Section */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#a488f4]/5 to-[#facc15]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Programs We're Proud Of
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              Our founder and community members have been accepted into these prestigious programs. We use their experiences to guide you.
            </p>
            <p className="text-sm text-gray-500 italic">
              Logos shown represent real acceptance experiences. Dear Future Luminary is not officially affiliated with these organizations.
            </p>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden bg-white rounded-2xl border border-gray-100">
            <div className="flex overflow-x-auto gap-6 p-8 snap-x snap-mandatory">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-32 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200 hover:border-[#a488f4] hover:shadow-md transition-all duration-300 snap-center"
                >
                  <img
                    src={`/images/${program.logo}`}
                    alt={program.name}
                    className="w-24 h-24 object-contain"
                  />
                </div>
              ))}
            </div>
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
      <footer className="bg-[#1e3a8a] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/dear.future.luminary.logo.svg.svg" alt="DFL" className="w-8 h-8" />
                <span className="font-bold">Dear Future Luminary</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Luminaries don't shine alone. We light the way for each other.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#facc15]">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#features">Roadmaps</a></li>
                <li><a href="#programs">Scholarship Hub</a></li>
                <li><a href="#features">Profile Building</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#facc15]">About</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">Our Story & Vision</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Space</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#facc15]">Connect With Us</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Join Us (Team)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>Developed by Malak Emad</p>
            <p className="mt-2">&copy; 2026 Dear Future Luminary. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
