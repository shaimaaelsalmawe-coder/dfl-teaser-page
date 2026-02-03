import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X, Instagram, Mail, Youtube, Facebook, ArrowRight, AlertCircle, Send, Radar, Map, Sparkles, Leaf, Handshake, Target, Zap, Lightbulb, Users, Gift, Compass, BookOpen, UserCheck, Heart } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [contactFormData, setContactFormData] = useState({ name: '', email: '', message: '' });
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [cursorColor, setCursorColor] = useState('#a488f4');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isInteractive = target?.closest('button, a, input, textarea, [role="button"]');
      setCursorColor(isInteractive ? '#facc15' : '#a488f4');
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
      icon: <Radar size={36} className="text-[#a488f4]" />
    },
    {
      title: 'Clear Roadmaps',
      description: 'Structured, beginner-friendly paths that help students move from uncertainty to action. Each roadmap breaks big goals into clear, manageable steps, showing where to start and how to progress.',
      icon: <Map size={36} className="text-[#a488f4]" />
    },
    {
      title: 'Profile Building',
      description: 'Practical guidance that helps students present themselves honestly and confidently. From CVs to personal statements, the focus is on clarity, authenticity, and understanding what opportunities are truly looking for.',
      icon: <Sparkles size={36} className="text-[#a488f4]" />
    },
    {
      title: 'Personal Growth',
      description: 'A dedicated space for inner development—confidence, mindset, self-awareness, and leadership—because strong applications start with a strong sense of self.',
      icon: <Leaf size={36} className="text-[#a488f4]" />
    },
    {
      title: 'Shared Learning & Support',
      description: 'Students don\'t grow alone. Dear Future Luminary brings together shared experiences, peer learning, and honest stories so no one feels isolated while figuring things out.',
      icon: <Handshake size={36} className="text-[#a488f4]" />
    },
    {
      title: 'Guided Clarity',
      description: 'No shortcuts, no exaggerated promises. Just carefully organized knowledge, clear explanations, and intentional guidance that helps students think, choose, and move forward on their own.',
      icon: <Target size={36} className="text-[#a488f4]" />
    }
  ];

  const faqItems = [
    {
      question: 'What is Dear Future Luminary?',
      answer: 'Think of Dear Future Luminary as the friend who already figured things out and decided to share the map. We organize real global opportunities and explain them in a way that actually makes sense—so you stop feeling lost and start moving forward.'
    },
    {
      question: 'Do I need to be "exceptional" to belong here?',
      answer: 'Not at all. You don\'t need awards, experience, or a perfect profile. If you\'re curious, motivated, or even just trying to figure things out, you\'re exactly where you\'re supposed to be.'
    },
    {
      question: 'Will this guarantee I get accepted into programs?',
      answer: 'No magic promises here. But we will help you understand opportunities, prepare better, and apply with confidence instead of guessing. And honestly? That already changes everything.'
    },
    {
      question: 'I\'m still in high school and totally confused. Is this for me?',
      answer: 'Yes—100%. This was built for that exact phase: when you know you want more, but don\'t know where to start. Most of what you\'ll find here starts from zero and walks with you step by step.'
    },
    {
      question: 'How can I get involved?',
      answer: 'Start by exploring. Read, learn, try things out. If you want to contribute, share your journey, or join the team, there\'s always space for people who care and want to grow—just like you.'
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

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xqaqankn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactFormData)
      });
      if (response.ok) {
        setContactFormSubmitted(true);
        setContactFormData({ name: '', email: '', message: '' });
        setTimeout(() => setContactFormSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Custom Styles */}
      <style>{`
        * {
          cursor: none;
        }
        @keyframes pulse-cursor-purple {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(164, 136, 244, 0.7), 0 0 20px 0 rgba(164, 136, 244, 0.5);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(164, 136, 244, 0.2), 0 0 30px 5px rgba(164, 136, 244, 0.3);
          }
        }
        @keyframes pulse-cursor-yellow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.7), 0 0 20px 0 rgba(250, 204, 21, 0.5);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(250, 204, 21, 0.2), 0 0 30px 5px rgba(250, 204, 21, 0.3);
          }
        }
        .custom-cursor {
          position: fixed;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: background-color 0.2s ease;
        }
        .custom-cursor.purple {
          animation: pulse-cursor-purple 1.5s infinite;
        }
        .custom-cursor.yellow {
          animation: pulse-cursor-yellow 1.5s infinite;
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
          animation: scroll-seamless 80s linear infinite;
          width: fit-content;
        }
        .logos-carousel:hover {
          animation-play-state: paused;
        }
        .logo-item {
          flex-shrink-0;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        .logo-item:hover {
          border-color: #a488f4;
          box-shadow: 0 8px 20px rgba(164, 136, 244, 0.2);
          transform: translateY(-4px);
        }
        .logo-item img {
          max-width: 90px;
          max-height: 90px;
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

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }
        .faq-answer {
          animation: slideDown 0.3s ease-out;
        }

        /* Mesh Gradient Background */
        .mesh-gradient {
          background-color: #a488f4;
          background-image: 
            radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
            radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
            radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
        }

        .feature-card {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: 0.5s;
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
        className={`custom-cursor ${cursorColor === '#facc15' ? 'yellow' : 'purple'}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, background: cursorColor }}
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
              <a href="#who-we-are" className="text-gray-600 hover:text-[#a488f4] transition-colors font-medium text-sm">
                Who We Are
              </a>
              <a href="#what-we-offer" className="text-gray-600 hover:text-[#a488f4] transition-colors font-medium text-sm">
                What We Offer
              </a>
              <a href="#about" className="text-gray-600 hover:text-[#a488f4] transition-colors font-medium text-sm">
                About
              </a>
              <a href="#programs" className="text-gray-600 hover:text-[#a488f4] transition-colors font-medium text-sm">
                Programs
              </a>
              <a href="#faq" className="text-gray-600 hover:text-[#a488f4] transition-colors font-medium text-sm">
                FAQ
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
              <a href="#who-we-are" className="block py-2 text-gray-600 hover:text-[#a488f4] text-sm">
                Who We Are
              </a>
              <a href="#what-we-offer" className="block py-2 text-gray-600 hover:text-[#a488f4] text-sm">
                What We Offer
              </a>
              <a href="#about" className="block py-2 text-gray-600 hover:text-[#a488f4] text-sm">
                About
              </a>
              <a href="#programs" className="block py-2 text-gray-600 hover:text-[#a488f4] text-sm">
                Programs
              </a>
              <a href="#faq" className="block py-2 text-gray-600 hover:text-[#a488f4] text-sm">
                FAQ
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Professional Two-Column Layout */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#a488f4] via-[#8a6ef1] to-[#7b5fde] relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
                  Dear Future<br />Luminary
                </h1>
                <p className="text-2xl md:text-3xl font-serif text-[#facc15] mb-6 relative inline-block">
                  For the future that's watching.
                  <span className="absolute bottom-0 left-0 w-24 h-1 bg-[#facc15] rounded-full"></span>
                </p>
              </div>

              <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                <p>Discover your direction. Build your path with clarity. Access real global opportunities.</p>
                <p>We're here to help you find where you belong, understand your next step, and move forward with confidence. You're not alone on this journey.</p>
              </div>

              {/* Impact Snapshot */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="space-y-1">
                  <p className="text-3xl font-black text-[#facc15]">500+</p>
                  <p className="text-sm text-white/80">Opportunities curated</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-black text-[#facc15]">100+</p>
                  <p className="text-sm text-white/80">Students guided</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-black text-[#facc15]">5+</p>
                  <p className="text-sm text-white/80">Countries reached</p>
                </div>
              </div>
            </div>

            {/* Right Column - Logo/Visual */}
            <div className="hidden md:flex justify-center items-center">
              <img 
                src="/images/dear.future.luminary.logo.svg.svg" 
                alt="Dear Future Luminary" 
                className="w-full h-auto max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section id="who-we-are" className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-black text-[#1e3a8a] mb-8 leading-tight">
                Who Are<br />
                <span className="text-[#a488f4]">We</span>
              </h2>
              <div className="space-y-6">
                <p className="text-2xl font-bold text-[#1e3a8a] leading-tight">
                  We're Dear Future Luminary—a youth-led initiative built by students, for students.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our mission is to empower Gen Z students, especially across MENA, with access to fully funded opportunities and self-growth resources.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We provide the tools, guidance, and inspiration every young person needs to shine and leave their mark.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#a488f4]/20 to-[#facc15]/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#a488f4]/10 flex items-center justify-center">
                    <Users className="text-[#a488f4]" size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-[#1e3a8a]">Our Community</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Youth-Led', desc: 'Built by those who understand the journey.' },
                    { label: 'Student-Focused', desc: 'Every resource is designed for your success.' },
                    { label: 'MENA Impact', desc: 'Special focus on regional opportunities.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="text-[#facc15] font-bold text-xl">0{i+1}</div>
                      <div>
                        <div className="font-bold text-[#1e3a8a]">{item.label}</div>
                        <div className="text-gray-600">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="what-we-offer" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-[#1e3a8a] mb-6">
              What We <span className="text-[#a488f4]">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support designed to take you from where you are to where you want to be.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Personal Growth',
                desc: "For every student who's felt lost, stuck, or unsure — we help you rediscover yourself and grow with purpose.",
                icon: <Sparkles size={32} />,
                color: 'bg-[#a488f4]'
              },
              {
                title: 'Opportunities',
                desc: "Because you deserve access to what's out there — scholarships, programs, and spaces that match your dreams.",
                icon: <Gift size={32} />,
                color: 'bg-[#facc15]'
              },
              {
                title: 'Guides & Roadmaps',
                desc: "We don't just tell you what to do, we walk you through how to start — step by step, like a friend who's been there.",
                icon: <Compass size={32} />,
                color: 'bg-[#a488f4]'
              },
              {
                title: 'Mentorship',
                desc: "Real guidance, honest feedback, and a community that reminds you: you're capable of more than you think.",
                icon: <UserCheck size={32} />,
                color: 'bg-[#facc15]'
              },
              {
                title: 'Community',
                desc: "A safe, inspiring corner of the internet where you can belong, learn, and believe in your light again.",
                icon: <Users size={32} />,
                color: 'bg-[#a488f4]'
              }
            ].map((offer, i) => (
              <div key={i} className={`group p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#a488f4]/50 hover:shadow-2xl transition-all duration-300 ${i === 3 ? 'md:col-start-1 md:col-end-2' : ''}`}>
                <div className={`w-16 h-16 rounded-2xl ${offer.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {offer.icon}
                </div>
                <h3 className="text-2xl font-black text-[#1e3a8a] mb-4">{offer.title}</h3>
                <p className="text-gray-600 leading-relaxed">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-[#1e3a8a] mb-8 leading-tight">
              Programs We're<br />
              <span className="text-[#a488f4]">Proud Of</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our founder and community members have been accepted into these programs. Explore their journeys and find your own path.
            </p>
          </div>

          {/* Dual Carousel - Asana Style */}
          <style>{`
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            @keyframes scroll-right {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(0); }
            }
            .carousel-left {
              animation: scroll-left 30s linear infinite;
            }
            .carousel-right {
              animation: scroll-right 30s linear infinite;
            }
            .carousel-container:hover .carousel-left,
            .carousel-container:hover .carousel-right {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="space-y-8">
            {/* First Carousel - Left to Right */}
            <div className="carousel-container overflow-hidden">
              <div className="carousel-left flex gap-6">
                {[...programs, ...programs].map((program, index) => (
                  <a
                    key={`carousel1-${index}`}
                    href={program.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-shrink-0 w-32 h-32 flex items-center justify-center p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#a488f4] hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#a488f4]/10 to-white transition-all duration-300"
                    title={program.name}
                  >
                    <img
                      src={`/images/${program.logo}`}
                      alt={program.name}
                      className="h-10 object-contain group-hover:scale-125 transition-transform duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Second Carousel - Right to Left */}
            <div className="carousel-container overflow-hidden">
              <div className="carousel-right flex gap-6">
                {[...programs, ...programs].map((program, index) => (
                  <a
                    key={`carousel2-${index}`}
                    href={program.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-shrink-0 w-32 h-32 flex items-center justify-center p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#a488f4] hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#a488f4]/10 to-white transition-all duration-300"
                    title={program.name}
                  >
                    <img
                      src={`/images/${program.logo}`}
                      alt={program.name}
                      className="h-10 object-contain group-hover:scale-125 transition-transform duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-12">
            Hover to pause. Click any logo to explore the program.
          </p>
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

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl md:text-7xl font-black text-[#1e3a8a] mb-8 leading-tight">
              Frequently Asked<br />
              <span className="text-[#a488f4]">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Everything you need to know about Dear Future Luminary
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#a488f4]/50 transition-colors duration-300">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-bold text-[#1e3a8a] text-left">{item.question}</h3>
                  <ChevronDown 
                    size={24} 
                    className={`text-[#a488f4] flex-shrink-0 transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="faq-answer px-8 py-6 bg-gradient-to-br from-[#f8f6ff] to-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed text-lg">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor/Join Section - Improved to match Mission Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e3a8a] via-[#2d4a9f] to-[#1e3a8a] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#a488f4]/20 to-transparent rounded-full -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#facc15]/10 to-transparent rounded-full -mr-48 -mb-48"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-12">
            <div>
              <h2 className="text-6xl md:text-7xl font-black text-white mb-12 leading-tight">
                Join the Movement
              </h2>
              
              <p className="text-4xl md:text-5xl font-black text-[#facc15] mb-16 leading-tight">
                Dear Future Luminary started as a simple idea: no student should feel lost or alone while trying to grow.
              </p>

              <p className="text-2xl text-white/90 leading-relaxed mb-12">
                Whether you want to join our team or support our mission, this is your space to make an impact, share what you learn, and help students thrive. You don't need to have everything figured out. Together, we'll grow, learn, and build something meaningful.
              </p>
            </div>

            {/* Action Box */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#facc15] flex items-center justify-center text-[#1e3a8a]">
                    <Heart size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-white">Join the Movement</h3>
                  <p className="text-white/80 text-lg">Be part of a community that acts, grows, and supports each other.</p>
                  <a
                    href="https://forms.gle/pLqpSodiuMmB36Ei8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-[#facc15] text-[#1e3a8a] rounded-xl font-bold hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Get Started
                  </a>
                </div>
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#a488f4] flex items-center justify-center text-white">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-white">Sponsor Us</h3>
                  <p className="text-white/80 text-lg">Help us reach more students and provide better resources for the next generation.</p>
                  <a
                    href="https://forms.gle/1uFr976gMZqtJHcw7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-[#a488f4] text-white rounded-xl font-bold hover:bg-[#facc15] hover:text-[#1e3a8a] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    Support Mission
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#a488f4] via-[#8a6ef1] to-[#7b5fde] text-white py-20 px-4 sm:px-6 lg:px-8">
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

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 mb-12">
            <h4 className="font-bold mb-6 text-[#facc15] text-lg">Contact Us</h4>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={contactFormData.name}
                  onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                  required
                  className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#facc15] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={contactFormData.email}
                  onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                  required
                  className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#facc15] transition-colors"
                />
              </div>
              <textarea
                placeholder="Your Message"
                value={contactFormData.message}
                onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                required
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#facc15] transition-colors resize-none"
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-[#facc15] text-[#1e3a8a] rounded-full font-bold hover:shadow-lg hover:shadow-[#facc15]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <Send size={18} />
                Send Message
              </button>
              {contactFormSubmitted && (
                <p className="text-[#facc15] font-semibold">Thank you! Your message has been sent successfully. Malak will get back to you as soon as possible ..... ♡</p>
              )}
            </form>
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
          <div className="modal-content bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-8 flex items-center justify-between">
              <h2 className="text-3xl font-black text-[#1e3a8a]">Join Our Community</h2>
              <button 
                onClick={() => setShowJoinModal(false)}
                className="text-gray-400 hover:text-gray-600 rounded-full p-2 transition-colors"
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
                    <span className="text-[#a488f4] font-bold text-xl mt-0.5">•</span>
                    <span className="text-lg">A positive attitude toward learning.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a488f4] font-bold text-xl mt-0.5">•</span>
                    <span className="text-lg">Clear communication and reliability.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a488f4] font-bold text-xl mt-0.5">•</span>
                    <span className="text-lg">Respect for others' time and ideas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a488f4] font-bold text-xl mt-0.5">•</span>
                    <span className="text-lg">A genuine interest in the mission.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#a488f4]/5 to-[#facc15]/5 border border-[#a488f4]/20 rounded-2xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  If this feels like you, apply below. Let's build something meaningful together.
                </p>
                <a 
                  href="https://forms.gle/1wEJ8q6ks4hsjFsP8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-8 py-4 bg-[#a488f4] text-white rounded-xl font-bold hover:bg-[#facc15] hover:text-[#1e3a8a] transition-all duration-300"
                >
                  Apply to Join
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Coming Soon Modal */}
      {showComingSoonModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="modal-content bg-white rounded-3xl max-w-md w-full p-12 text-center space-y-8 shadow-2xl border border-gray-100">
            <div className="w-24 h-24 bg-gradient-to-br from-[#a488f4]/10 to-[#facc15]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles size={48} className="text-[#a488f4]" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-[#1e3a8a]">Coming Soon</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're currently lighting the way for this section. It will be available very soon!
              </p>
            </div>
            <button 
              onClick={() => setShowComingSoonModal(false)}
              className="w-full py-4 bg-[#a488f4] text-white rounded-xl font-bold hover:bg-[#facc15] hover:text-[#1e3a8a] transition-all duration-300 text-lg shadow-lg shadow-[#a488f4]/20"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
