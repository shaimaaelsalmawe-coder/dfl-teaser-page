import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X, Instagram, Mail, Youtube, Facebook, ArrowRight, AlertCircle, Send, Radar, Map, Sparkles, Leaf, Handshake, Target, Zap, Lightbulb, Users, Gift, Compass, BookOpen, UserCheck, Heart, ExternalLink, Globe, Star, ShieldCheck, Rocket } from 'lucide-react';

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
    { label: 'Scholarships Hub', href: '#' },
    { label: 'Roadmaps', href: '#' },
    { label: 'Profile Building', href: '#' }
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
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
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

        /* Smooth Scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Slack-like Card Hover */
        .slack-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .slack-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -10px rgba(0,0,0,0.1);
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
              <a href="#" className="text-gray-600 hover:text-[#a488f4] font-medium transition-colors">Home</a>
              <a href="#what-we-offer" className="text-gray-600 hover:text-[#a488f4] font-medium transition-colors">What We Offer</a>
              <a href="#about" className="text-gray-600 hover:text-[#a488f4] font-medium transition-colors">About</a>
              <a href="#programs" className="text-gray-600 hover:text-[#a488f4] font-medium transition-colors">Programs</a>
              <a href="#faq" className="text-gray-600 hover:text-[#a488f4] font-medium transition-colors">FAQ</a>
              <button
                onClick={() => setShowJoinModal(true)}
                className="px-6 py-2 bg-[#1e3a8a] text-white rounded-xl font-bold hover:bg-[#a488f4] transition-all"
              >
                Join Us
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-[#1e3a8a]"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 bg-white">
              <a href="#" className="block py-2 text-gray-600 hover:text-[#a488f4] text-sm">
                Home
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

      {/* Who Are We Section - Slack Style Refined */}
      <section id="who-we-are" className="py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#a488f4]/10 rounded-full text-[#a488f4] font-bold text-xs tracking-widest uppercase">
                <Users size={16} />
                Our Identity
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-[#1e3a8a] leading-[1.1] tracking-tight">
                Built by students, <br />
                <span className="text-[#a488f4]">for students.</span>
              </h2>
              <div className="space-y-8 text-xl text-gray-600 leading-relaxed max-w-xl">
                <p>
                  We're <span className="font-bold text-[#1e3a8a]">Dear Future Luminary</span>—a youth-led initiative born from the real struggles of navigating growth.
                </p>
                <p>
                  Our mission is to empower Gen Z students, especially across MENA, with access to fully funded opportunities and self-growth resources.
                </p>
              </div>
              <div className="pt-4">
                <a href="#about" className="inline-flex items-center gap-3 px-8 py-4 bg-[#1e3a8a] text-white rounded-2xl font-black text-lg hover:bg-[#a488f4] hover:shadow-xl transition-all group">
                  Learn about our vision
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Users size={32} />, title: "Youth-Led", desc: "Built by those who understand the journey.", color: "bg-[#a488f4]/5 text-[#a488f4]" },
                { icon: <Target size={32} />, title: "Mission Driven", desc: "Empowering Gen Z across the MENA region.", color: "bg-[#facc15]/5 text-[#facc15]" },
                { icon: <Compass size={32} />, title: "Guidance", desc: "Practical tools for every step of your growth.", color: "bg-[#facc15]/5 text-[#facc15]" },
                { icon: <Sparkles size={32} />, title: "Impact", desc: "Helping young people leave their unique mark.", color: "bg-[#a488f4]/5 text-[#a488f4]" }
              ].map((item, idx) => (
                <div key={idx} className={`p-10 rounded-[3rem] border border-gray-50 slack-card ${item.color.split(' ')[0]}`}>
                  <div className={`mb-6 ${item.color.split(' ')[1]}`}>{item.icon}</div>
                  <h3 className="font-black text-[#1e3a8a] text-2xl mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section - Slack Feature Style */}
      <section id="what-we-offer" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-24">
            <h2 className="text-6xl font-black text-[#1e3a8a] mb-8 leading-tight">
              What We <span className="text-[#a488f4]">Offer</span>
            </h2>
            <p className="text-2xl text-gray-500 leading-relaxed">
              Reimagine your future with tools and support designed for the modern student.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Personal Growth',
                desc: "For every student who's felt lost, stuck, or unsure — we help you rediscover yourself and grow with purpose.",
                icon: <Star size={32} />,
                color: 'text-[#a488f4]',
                bg: 'bg-[#a488f4]/10'
              },
              {
                title: 'Opportunities',
                desc: "Because you deserve access to what's out there — scholarships, programs, and spaces that match your dreams.",
                icon: <Globe size={32} />,
                color: 'text-[#facc15]',
                bg: 'bg-[#facc15]/10'
              },
              {
                title: 'Guides & Roadmaps',
                desc: "We don't just tell you what to do, we walk you through how to start — step by step, like a friend who's been there.",
                icon: <Map size={32} />,
                color: 'text-[#a488f4]',
                bg: 'bg-[#a488f4]/10'
              },
              {
                title: 'Mentorship',
                desc: "Real guidance, honest feedback, and a community that reminds you: you're capable of more than you think.",
                icon: <ShieldCheck size={32} />,
                color: 'text-[#facc15]',
                bg: 'bg-[#facc15]/10'
              },
              {
                title: 'Community',
                desc: "A safe, inspiring corner of the internet where you can belong, learn, and believe in your light again.",
                icon: <Handshake size={32} />,
                color: 'text-[#a488f4]',
                bg: 'bg-[#a488f4]/10'
              },
              {
                title: 'Success Stories',
                desc: "Learn from those who made it. Real stories, real paths, and real inspiration to fuel your own journey.",
                icon: <Rocket size={32} />,
                color: 'text-[#facc15]',
                bg: 'bg-[#facc15]/10'
              }
            ].map((offer, i) => (
              <div key={i} className="p-12 bg-white rounded-[3.5rem] border border-gray-100 slack-card group">
                <div className={`w-16 h-16 rounded-2xl ${offer.bg} ${offer.color} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                  {offer.icon}
                </div>
                <h3 className="text-3xl font-black text-[#1e3a8a] mb-6">{offer.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section - Refined Carousel */}
      <section id="programs" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-black text-[#1e3a8a] mb-8">
              Programs We're <span className="text-[#a488f4]">Proud Of</span>
            </h2>
            <p className="text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Our community members have been accepted into world-class programs. Explore their journeys.
            </p>
          </div>

          <style>{`
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .carousel-left {
              animation: scroll-left 60s linear infinite;
            }
            .carousel-container:hover .carousel-left {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="carousel-container overflow-hidden py-12">
            <div className="carousel-left flex gap-12">
              {[...programs, ...programs].map((program, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-48 bg-white border border-gray-100 rounded-[2.5rem] p-10 flex items-center justify-center hover:shadow-2xl hover:border-[#a488f4]/30 transition-all duration-500 group"
                  title={program.name}
                >
                  <img
                    src={`/images/${program.logo}`}
                    alt={program.name}
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section - Slack Dark Style */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1e3a8a] rounded-[4rem] p-16 md:p-32 relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#facc15]/10 rounded-full -ml-40 -mb-40 blur-3xl"></div>
            
            <div className="relative z-10 max-w-5xl">
              <div className="space-y-16">
                <div className="space-y-8">
                  <h2 className="text-3xl font-black text-[#facc15] uppercase tracking-[0.2em]">
                    Our Mission
                  </h2>
                  <p className="text-6xl md:text-8xl font-black text-white leading-[1] tracking-tight">
                    Talent is everywhere. <br />
                    <span className="text-[#facc15]">Access is not.</span>
                  </p>
                </div>
                
                <p className="text-3xl text-white/80 leading-relaxed max-w-4xl font-medium">
                  Dear Future Luminary exists to close that gap. We support high school and early college students—especially those from underrepresented communities—by providing clear guidance, trusted resources, and a supportive environment.
                </p>

                <div className="pt-16 border-t border-white/10">
                  <div className="grid md:grid-cols-3 gap-16">
                    {[
                      { title: "Ambition", desc: "Turn curiosity into focused direction." },
                      { title: "Clarity", desc: "Convert confusion into actionable steps." },
                      { title: "Outcomes", desc: "Translate potential into real global success." }
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="text-[#facc15] font-black text-3xl mb-4">{stat.title}</div>
                        <p className="text-white/60 text-xl leading-relaxed">{stat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Slack Clean Style */}
      <section id="faq" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-6xl font-black text-[#1e3a8a]">Frequently Asked Questions</h2>
            <p className="text-2xl text-gray-500">Everything you need to know about starting your journey.</p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden transition-all hover:border-[#a488f4]/20">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-10 py-10 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <h3 className="text-2xl font-black text-[#1e3a8a] text-left">{item.question}</h3>
                  <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-500 ${expandedFAQ === index ? 'rotate-180 bg-[#a488f4] text-white' : 'text-gray-400'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                {expandedFAQ === index && (
                  <div className="px-10 pb-10 faq-answer">
                    <p className="text-gray-500 text-xl leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement - Slack Style CTA Refined */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#a488f4] to-[#8a6ef1] rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#facc15] rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 space-y-12 max-w-4xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[1] tracking-tight">
                Ready to find your <br />
                <span className="text-[#facc15]">own light?</span>
              </h2>
              <p className="text-2xl text-white/90 leading-relaxed font-medium">
                Join a community of students who act, grow, and support each other. Whether you want to join our team or support our mission, this is your space to thrive.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <a
                  href="https://forms.gle/pLqpSodiuMmB36Ei8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-6 bg-white text-[#1e3a8a] rounded-2xl font-black text-xl hover:bg-[#facc15] hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 group"
                >
                  Join the Movement
                  <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://forms.gle/1uFr976gMZqtJHcw7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-6 bg-transparent border-2 border-white/30 text-white rounded-2xl font-black text-xl hover:bg-white/10 transition-all duration-500 flex items-center justify-center gap-3"
                >
                  Sponsor Us
                  <Heart size={28} />
                </a>
              </div>
              
              <p className="text-white/60 text-base font-bold tracking-widest uppercase">
                No commitment required. Start your journey today.
              </p>
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
                  required
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#facc15] transition-colors"
                  value={contactFormData.name}
                  onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#facc15] transition-colors"
                  value={contactFormData.email}
                  onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                />
              </div>
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#facc15] transition-colors"
                value={contactFormData.message}
                onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-[#facc15] text-[#1e3a8a] rounded-xl font-bold hover:bg-white transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              {contactFormSubmitted && (
                <div className="flex items-center gap-2 text-[#facc15] font-bold mt-2">
                  <Sparkles size={18} />
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
            <p>© {new Date().getFullYear()} Dear Future Luminary. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Join Us Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#1e3a8a]/40 backdrop-blur-md" onClick={() => setShowJoinModal(false)}></div>
          <div className="bg-white rounded-[2.5rem] w-full max-w-lg relative z-10 overflow-hidden modal-content shadow-2xl">
            <div className="bg-gradient-to-r from-[#a488f4] to-[#8a6ef1] p-8 text-white relative">
              <button 
                onClick={() => setShowJoinModal(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-3xl font-black mb-2">Join the Luminary Team</h3>
              <p className="text-white/80">Be part of something bigger than yourself.</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-4">
                <a 
                  href="https://forms.gle/pLqpSodiuMmB36Ei8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#a488f4] hover:bg-[#a488f4]/5 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#a488f4]/10 rounded-xl flex items-center justify-center text-[#a488f4]">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e3a8a]">Become a Member</h4>
                      <p className="text-sm text-gray-500">Join our growing community</p>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-gray-300 group-hover:text-[#a488f4] group-hover:translate-x-1 transition-all" />
                </a>
                
                <a 
                  href="https://forms.gle/1uFr976gMZqtJHcw7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#facc15] hover:bg-[#facc15]/5 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#facc15]/10 rounded-xl flex items-center justify-center text-[#facc15]">
                      <Heart size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e3a8a]">Partner With Us</h4>
                      <p className="text-sm text-gray-500">Sponsor or collaborate</p>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-gray-300 group-hover:text-[#facc15] group-hover:translate-x-1 transition-all" />
                </a>
              </div>
              <p className="text-center text-gray-400 text-sm">
                Questions? <a href="mailto:contact@dearfutureluminary.com" className="text-[#a488f4] font-bold hover:underline">Contact us</a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Coming Soon Modal */}
      {showComingSoonModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#1e3a8a]/40 backdrop-blur-md" onClick={() => setShowComingSoonModal(false)}></div>
          <div className="bg-white rounded-[2.5rem] w-full max-w-md relative z-10 overflow-hidden modal-content shadow-2xl text-center">
            <div className="p-12 space-y-6">
              <div className="w-24 h-24 bg-[#facc15]/10 rounded-full flex items-center justify-center text-[#facc15] mx-auto mb-4">
                <Sparkles size={48} />
              </div>
              <h3 className="text-4xl font-black text-[#1e3a8a]">Coming Soon</h3>
              <p className="text-xl text-gray-500 leading-relaxed">
                We're currently polishing this experience to make it absolutely perfect for you. Stay tuned!
              </p>
              <button
                onClick={() => setShowComingSoonModal(false)}
                className="w-full py-5 bg-[#1e3a8a] text-white rounded-2xl font-black text-xl hover:bg-[#a488f4] transition-all shadow-lg"
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
