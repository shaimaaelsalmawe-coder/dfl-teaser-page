import { useEffect, useState } from 'react';
import { ChevronRight, Menu, X, Instagram, Mail, Youtube, Facebook } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Custom Cursor */}
      <style>{`
        * {
          cursor: none;
        }
        @keyframes pulse-cursor {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(164, 136, 244, 0.7);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(164, 136, 244, 0.3);
          }
        }
        .custom-cursor {
          position: fixed;
          width: 12px;
          height: 12px;
          background: #a488f4;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          animation: pulse-cursor 1.5s infinite;
          transform: translate(-50%, -50%);
        }
        .custom-cursor.hover {
          background: #facc15;
          animation: none;
          box-shadow: 0 0 0 8px rgba(250, 204, 21, 0.2);
        }
      `}</style>
      <div 
        className="custom-cursor"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* Sticky Navbar with Rounded Corners */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'top-4 left-4 right-4 bg-white/95 backdrop-blur-md shadow-lg border border-gray-100 rounded-2xl'
            : 'bg-white/80 backdrop-blur-md rounded-none'
        }`}
        style={isScrolled ? { maxWidth: 'calc(100% - 32px)', margin: '0 auto', left: '16px', right: '16px' } : {}}
      >
        <div className={`${isScrolled ? 'px-6' : 'px-4 sm:px-6 lg:px-8'} max-w-7xl mx-auto`}>
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
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href="https://forms.gle/1wEJ8q6ks4hsjFsP8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#a488f4]/30 transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                Join the Movement
              </a>
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
              <div className="flex gap-2 mt-4">
                <a 
                  href="https://forms.gle/1wEJ8q6ks4hsjFsP8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] text-white rounded-full font-semibold text-sm text-center"
                >
                  Join the Movement
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Enhanced Gradient */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#f8f6ff] to-[#f0e6ff]">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#a488f4]/10 rounded-full border border-[#a488f4]/20">
              <span className="w-2 h-2 bg-[#facc15] rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-[#a488f4]">Coming Soon</span>
            </div>

            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-[#1e3a8a] leading-tight mb-4">
                Dear Future Luminary
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-[#a488f4] leading-tight">
                For the Future that's Watching.
              </p>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold text-[#1e3a8a]">Discover Your Inner Light.</span> Build Your Conscious Path. Share Your Impact.
              </p>
              <p>
                We're here to help you find your spark, build your path, and make your mark on the world. You're not alone on this journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="https://forms.gle/1wEJ8q6ks4hsjFsP8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#a488f4]/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 text-center"
              >
                Join the Movement
                <ChevronRight size={20} />
              </a>
              <button className="px-8 py-4 border-2 border-[#a488f4] text-[#a488f4] rounded-full font-semibold hover:bg-[#a488f4]/5 transition-all duration-300">
                Learn More
              </button>
            </div>

            <div className="flex gap-8 pt-12 border-t border-gray-200">
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
        </div>
      </section>

      {/* What Makes US Different Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1e3a8a] mb-6">
              What Makes US Different
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              We don't just list opportunities. We teach you how to become competitive for them.
            </p>
          </div>

          <div className="space-y-12">
            <div className="border-l-4 border-[#a488f4] pl-8 py-4">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Built on Real Experience</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Dear Future Luminary, everything is built on real experience—not theory. We break down complex application processes, show you how to build a strong profile, and guide you step by step through the same paths that helped our community access top global programs.
              </p>
            </div>

            <div className="border-l-4 border-[#facc15] pl-8 py-4">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">No Random Links</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every opportunity is vetted, explained, and connected to a clear path. We don't overwhelm you with lists. We guide you through structured roadmaps that show you exactly what to do, when to do it, and why it matters.
              </p>
            </div>

            <div className="border-l-4 border-[#a488f4] pl-8 py-4">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Six Core Features</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {[
                  { icon: 'Radar.svg', title: 'Opportunity Radar', desc: 'Curated hub of fully funded programs' },
                  { icon: 'road map.svg', title: 'Structured Roadmaps', desc: 'Beginner-friendly guides for any path' },
                  { icon: 'Personal Profile.svg', title: 'Profile Building', desc: 'Craft compelling applications' },
                  { icon: 'Upgrade.svg', title: 'Personal Growth', desc: 'Develop confidence and mindset' },
                  { icon: 'Teams.svg', title: 'Community Support', desc: 'Connect with peers and mentors' },
                  { icon: 'Cap.svg', title: 'AI-Powered Guidance', desc: 'Personalized recommendations' },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <img src={`/images/${feature.icon}`} alt={feature.title} className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1e3a8a]">{feature.title}</p>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Carousel Section */}
      <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#a488f4]/5 to-[#facc15]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-[#1e3a8a] mb-6">
              Programs We're Proud Of
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              Our founder and community members have been accepted into these prestigious programs. We use their experiences to guide you.
            </p>
            <p className="text-sm text-gray-500 italic">
              Logos shown represent real acceptance experiences. Dear Future Luminary is not officially affiliated with these organizations.
            </p>
          </div>

          {/* Animated Carousel */}
          <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-100 py-8">
            <style>{`
              @keyframes scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
              .logos-carousel {
                display: flex;
                gap: 2rem;
                animation: scroll-left 40s linear infinite;
                width: fit-content;
              }
              .logos-carousel:hover {
                animation-play-state: paused;
              }
              .logo-item {
                flex-shrink-0;
                width: 100px;
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #f9fafb;
                border-radius: 12px;
                border: 1px solid #e5e7eb;
              }
              .logo-item img {
                max-width: 80px;
                max-height: 80px;
                object-fit: contain;
              }
            `}</style>
            <div className="logos-carousel">
              {[...programs, ...programs].map((program, index) => (
                <div key={index} className="logo-item">
                  <img
                    src={`/images/${program.logo}`}
                    alt={program.name}
                    title={program.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[#1e3a8a] mb-8">
            Our Mission
          </h2>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p className="text-3xl font-bold text-[#a488f4]">
              Talent is everywhere. Access is not.
            </p>

            <p>
              Dear Future Luminary exists to close that gap. We support high school and early college students—especially those from underrepresented communities—by giving them clear guidance, trusted resources, and a supportive community to help them access global opportunities.
            </p>

            <div className="bg-gradient-to-r from-[#a488f4]/10 to-[#facc15]/10 p-8 rounded-2xl border border-[#a488f4]/20">
              <p className="text-xl font-semibold text-[#1e3a8a] mb-4">Our mission is simple:</p>
              <p className="text-lg">
                To turn <span className="font-bold">ambition into direction</span>, <span className="font-bold">confusion into clarity</span>, and <span className="font-bold">potential into real outcomes</span>—so being a luminary becomes possible for everyone, not just a privileged few.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/dear.future.luminary.logo.svg.svg" alt="Dear Future Luminary" className="w-8 h-8" />
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
              <div className="flex gap-4 mb-4">
                <a href="https://www.instagram.com/dear.future.luminary" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] transition-colors" title="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/dear.future.luminary" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] transition-colors" title="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="mailto:contact@dearfutureluminary.com" className="hover:text-[#facc15] transition-colors" title="Email">
                  <Mail size={20} />
                </a>
                <a href="https://www.youtube.com/@malak_luminary" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] transition-colors" title="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
              <p className="text-sm text-white/70">Join Us (Team)</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>
              Developed by{' '}
              <a 
                href="https://www.linkedin.com/in/loka-luminary/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#facc15] transition-colors font-semibold"
              >
                Malak Emad
              </a>
            </p>
            <p className="mt-2">&copy; 2026 Dear Future Luminary. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
