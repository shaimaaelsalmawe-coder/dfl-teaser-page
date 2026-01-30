import { useEffect, useState } from 'react';
import { ChevronRight, Menu, X, Instagram, Mail, Youtube, Facebook, ArrowRight, AlertCircle } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

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

  const coreFeatures = [
    {
      title: 'Opportunity Radar',
      description: 'A carefully curated collection of real global opportunities—scholarships, summer programs, exchanges, and initiatives—organized clearly so students can understand what fits them and why.',
      icon: '📡'
    },
    {
      title: 'Clear Roadmaps',
      description: 'Structured, beginner-friendly paths that help students move from uncertainty to action. Each roadmap breaks big goals into clear, manageable steps, showing where to start and how to progress.',
      icon: '🗺️'
    },
    {
      title: 'Profile Building',
      description: 'Practical guidance that helps students present themselves honestly and confidently. From CVs to personal statements, the focus is on clarity, authenticity, and understanding what opportunities are truly looking for.',
      icon: '✨'
    },
    {
      title: 'Personal Growth',
      description: 'A dedicated space for inner development—confidence, mindset, self-awareness, and leadership—because strong applications start with a strong sense of self.',
      icon: '🌱'
    },
    {
      title: 'Shared Learning & Support',
      description: 'Students don\'t grow alone. Dear Future Luminary brings together shared experiences, peer learning, and honest stories so no one feels isolated while figuring things out.',
      icon: '🤝'
    },
    {
      title: 'Guided Clarity',
      description: 'No shortcuts, no exaggerated promises. Just carefully organized knowledge, clear explanations, and intentional guidance that helps students think, choose, and move forward on their own.',
      icon: '🎯'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Roadmaps', href: '#' },
    { label: 'Scholarship Hub', href: '#' },
    { label: 'Profile Building', href: '#' },
    { label: 'Our Story & Vision', href: '#' },
    { label: 'Community Space', href: '#' },
    { label: 'Blog', href: '#' }
  ];

  const handleQuickLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowComingSoonModal(true);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Custom Styles */}
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
        
        @keyframes scroll-seamless {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .logos-carousel {
          display: flex;
          gap: 2rem;
          animation: scroll-seamless 60s linear infinite;
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
          transition: all 0.3s ease;
        }
        .logo-item:hover {
          border-color: #a488f4;
          box-shadow: 0 4px 12px rgba(164, 136, 244, 0.15);
        }
        .logo-item img {
          max-width: 80px;
          max-height: 80px;
          object-fit: contain;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .modal-content {
          animation: slideIn 0.3s ease-out;
        }

        /* Mesh Gradient Background */
        .mesh-gradient {
          background: linear-gradient(135deg, #f8f6ff 0%, #f0e6ff 25%, #fff5e6 50%, #f8f6ff 75%, #f0e6ff 100%);
          position: relative;
          overflow: hidden;
        }

        .mesh-gradient::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 20% 50%, rgba(164, 136, 244, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(250, 204, 21, 0.05) 0%, transparent 50%);
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, 50px); }
        }

        /* Feature Card Hover Effect */
        .feature-card {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .feature-card:hover::before {
          left: 100%;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(164, 136, 244, 0.15);
          border-color: #a488f4;
        }

        /* Smooth Scroll */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* Sticky Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'top-4 left-4 right-4 bg-white/95 backdrop-blur-xl shadow-xl border border-gray-100 rounded-2xl'
            : 'bg-white/80 backdrop-blur-xl rounded-none border-b border-gray-100/50'
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

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 mesh-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="space-y-12 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#a488f4]/10 rounded-full border border-[#a488f4]/20 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#facc15] rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-[#a488f4]">Coming Soon</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-7xl md:text-8xl font-black text-[#1e3a8a] leading-tight">
                Dear Future<br />
                <span className="bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] bg-clip-text text-transparent">
                  Luminary
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-[#a488f4] leading-tight">
                For the future that's watching.
              </p>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              <div className="space-y-3">
                <p className="font-semibold text-[#1e3a8a]">Discover your direction.</p>
                <p className="font-semibold text-[#1e3a8a]">Build your path with clarity.</p>
                <p className="font-semibold text-[#1e3a8a]">Access real global opportunities.</p>
              </div>
              <p className="text-gray-600 pt-4">
                We're here to help you find where you belong, understand your next step, and move forward with confidence. You're not alone on this journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a 
                href="https://forms.gle/1wEJ8q6ks4hsjFsP8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] text-white rounded-full font-bold hover:shadow-xl hover:shadow-[#a488f4]/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 text-center text-lg"
              >
                Join the Movement
                <ArrowRight size={20} />
              </a>
              <button className="px-8 py-4 border-2 border-[#a488f4] text-[#a488f4] rounded-full font-bold hover:bg-[#a488f4]/5 transition-all duration-300 text-lg">
                Learn More
              </button>
            </div>

            {/* Impact Snapshot */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200">
              <div className="space-y-2">
                <p className="text-4xl font-black text-[#a488f4]">500+</p>
                <p className="text-gray-600 font-medium">Opportunities carefully curated</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-black text-[#a488f4]">100+</p>
                <p className="text-gray-600 font-medium">Students supported and guided</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-black text-[#a488f4]">5+</p>
                <p className="text-gray-600 font-medium">Countries reached so far</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes US Different Section */}
      <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-[#1e3a8a] mb-8 leading-tight">
              What Makes<br />
              <span className="text-[#a488f4]">US Different</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              We don't just list opportunities. We teach you how to become competitive for them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-10 hover:border-[#a488f4]/50 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#a488f4]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">🔬</div>
                  <h3 className="text-3xl font-bold text-[#1e3a8a] pt-2">Built on Real Experience</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Everything at Dear Future Luminary is shaped by real journeys, not theory. We break down complex application processes, explain what truly matters, and guide students through paths that members of our community have already walked.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-10 hover:border-[#facc15]/50 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#facc15]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">✨</div>
                  <h3 className="text-3xl font-bold text-[#1e3a8a] pt-2">Curated, Not Random</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  You won't find scattered links or overwhelming lists. Every opportunity, roadmap, and resource is selected with intention—so students can apply with clarity, confidence, and strategy, not guesswork.
                </p>
              </div>
            </div>
          </div>

          {/* Core Features Grid */}
          <div className="mt-20">
            <h3 className="text-4xl font-bold text-[#1e3a8a] mb-12">Core Features</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {coreFeatures.map((feature, index) => (
                <div key={index} className="feature-card p-8 rounded-2xl border border-gray-200 bg-white hover:border-[#a488f4]">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h4 className="font-bold text-[#1e3a8a] mb-4 text-lg">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-[#1e3a8a] mb-8 leading-tight">
              Programs We're<br />
              <span className="text-[#a488f4]">Proud Of</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
              Our founder and community members have been accepted into these programs. Their real experiences shape how we guide others.
            </p>
            <p className="text-base text-gray-500 italic">
              Logos shown represent real acceptance journeys. Dear Future Luminary is not officially affiliated with these organizations.
            </p>
          </div>

          {/* Seamless Infinite Carousel */}
          <div className="relative overflow-hidden bg-white rounded-3xl border border-gray-200 py-12">
            <div className="relative overflow-hidden">
              <div className="logos-carousel">
                {[...programs, ...programs, ...programs].map((program, index) => (
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
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e3a8a] via-[#2d4a9f] to-[#1e3a8a] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#a488f4]/20 to-transparent rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#facc15]/10 to-transparent rounded-full -ml-48 -mb-48"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-12">
            <div>
              <h2 className="text-6xl md:text-7xl font-black text-white mb-12 leading-tight">
                Our Mission
              </h2>
              
              <p className="text-5xl md:text-6xl font-black text-[#facc15] mb-16 leading-tight">
                Talent is everywhere.<br />
                Access is not.
              </p>

              <p className="text-2xl text-white/90 leading-relaxed mb-12">
                Dear Future Luminary exists to close that gap. We support high school and early college students—especially those from underrepresented communities—by providing clear guidance, trusted resources, and a supportive environment that helps them access global opportunities.
              </p>
            </div>

            {/* Mission Statement Box */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16">
              <p className="text-xl font-bold text-[#facc15] mb-8">Our mission is simple:</p>
              <p className="text-3xl md:text-4xl font-black text-white leading-relaxed">
                To turn <span className="text-[#facc15]">ambition into direction</span>, <span className="text-[#facc15]">confusion into clarity</span>, and <span className="text-[#facc15]">potential into real outcomes</span>—so being a luminary becomes possible for everyone, not just a privileged few.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img src="/images/dear.future.luminary.logo.svg.svg" alt="Dear Future Luminary" className="w-8 h-8" />
                <span className="font-bold text-lg">Dear Future Luminary</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Luminaries don't shine alone. We light the way for each other.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[#facc15] text-lg">Quick Links</h4>
              <ul className="space-y-3 text-white/70">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      onClick={handleQuickLinkClick}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[#facc15] text-lg">About</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">Our Story & Vision</a></li>
                <li><a href="#" onClick={handleQuickLinkClick} className="hover:text-white transition-colors cursor-pointer">Community Space</a></li>
                <li><a href="#" onClick={handleQuickLinkClick} className="hover:text-white transition-colors cursor-pointer">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-[#facc15] text-lg">Connect With Us</h4>
              <div className="flex gap-4 mb-6">
                <a href="https://www.instagram.com/dear.future.luminary" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] transition-colors" title="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/dear.future.luminary" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] transition-colors" title="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="mailto:contact@dearfutureluminary.com" className="hover:text-[#facc15] transition-colors" title="Email">
                  <Mail size={24} />
                </a>
                <a href="https://www.youtube.com/@malak_luminary" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] transition-colors" title="YouTube">
                  <Youtube size={24} />
                </a>
              </div>
              <button 
                onClick={() => setShowJoinModal(true)}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] text-white rounded-full font-bold hover:shadow-lg hover:shadow-[#a488f4]/40 transition-all duration-300 hover:-translate-y-1"
              >
                Join our team
              </button>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
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
            <p className="mt-4">&copy; 2026 Dear Future Luminary. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Join Team Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="modal-content bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] p-8 flex items-center justify-between">
              <h2 className="text-3xl font-black text-white">Welcome to Dear Future Luminary!</h2>
              <button 
                onClick={() => setShowJoinModal(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are building a community of students who act, grow, and support each other. If you value honesty, consistency, and purpose, you'll fit here.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1e3a8a]">Here is what we look for:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#a488f4] font-bold text-xl mt-0.5">✓</span>
                    <span className="text-lg">A positive attitude toward learning.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a488f4] font-bold text-xl mt-0.5">✓</span>
                    <span className="text-lg">Clear communication and reliability.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a488f4] font-bold text-xl mt-0.5">✓</span>
                    <span className="text-lg">Respect for others' time and ideas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a488f4] font-bold text-xl mt-0.5">✓</span>
                    <span className="text-lg">A genuine interest in the mission.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#a488f4]/10 to-[#facc15]/10 border border-[#a488f4]/20 rounded-2xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  If this feels like you, apply below. Let's build something meaningful together.
                </p>
                <a 
                  href="https://forms.gle/1wEJ8q6ks4hsjFsP8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] text-white rounded-full font-bold hover:shadow-lg hover:shadow-[#a488f4]/40 transition-all duration-300 hover:-translate-y-1 text-lg"
                >
                  Fill out the Application Form
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Coming Soon Modal */}
      {showComingSoonModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="modal-content bg-white rounded-3xl max-w-md w-full shadow-2xl">
            <div className="bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] p-8 flex items-center justify-between">
              <h2 className="text-2xl font-black text-white">Oopsyy!!</h2>
              <button 
                onClick={() => setShowComingSoonModal(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            <div className="p-8 space-y-6 text-center">
              <AlertCircle size={48} className="mx-auto text-[#facc15]" />
              <div className="space-y-3">
                <p className="text-lg font-bold text-[#1e3a8a]">This feature is not available right now...</p>
                <p className="text-gray-600">BUT don't worry, we're coming ASAP!</p>
              </div>
              <button 
                onClick={() => setShowComingSoonModal(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] text-white rounded-full font-bold hover:shadow-lg transition-all duration-300"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
