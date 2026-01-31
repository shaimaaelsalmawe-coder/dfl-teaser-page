'use client';

import { ChevronDown, Menu, X, Instagram, Mail, Youtube, Facebook, ArrowRight, AlertCircle, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
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
      description: 'A carefully curated collection of real global opportunities—scholarships, summer programs, exchanges, and initiatives—organized clearly so students can understand what fits them and why.'
    },
    {
      title: 'Clear Roadmaps',
      description: 'Structured, beginner-friendly paths that help students move from uncertainty to action. Each roadmap breaks big goals into clear, manageable steps, showing where to start and how to progress.'
    },
    {
      title: 'Profile Building',
      description: 'Practical guidance that helps students present themselves honestly and confidently. From CVs to personal statements, the focus is on clarity, authenticity, and understanding what opportunities are truly looking for.'
    },
    {
      title: 'Personal Growth',
      description: 'A dedicated space for inner development—confidence, mindset, self-awareness, and leadership—because strong applications start with a strong sense of self.'
    },
    {
      title: 'Shared Learning & Support',
      description: 'Students don\'t grow alone. Dear Future Luminary brings together shared experiences, peer learning, and honest stories so no one feels isolated while figuring things out.'
    },
    {
      title: 'Guided Clarity',
      description: 'No shortcuts, no exaggerated promises. Just carefully organized knowledge, clear explanations, and intentional guidance that helps students think, choose, and move forward on their own.'
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

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactFormSubmitted(true);
    setTimeout(() => setContactFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'top-4 left-4 right-4 mx-auto w-[calc(100%-32px)] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DFL</span>
            </div>
            <span className="font-bold text-lg text-gray-900">Dear Future Luminary</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition">Features</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition">About</a>
            <a href="#programs" className="text-gray-700 hover:text-purple-600 transition">Programs</a>
            <a href="#faq" className="text-gray-700 hover:text-purple-600 transition">FAQ</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-purple-600">Features</a>
              <a href="#about" className="block text-gray-700 hover:text-purple-600">About</a>
              <a href="#programs" className="block text-gray-700 hover:text-purple-600">Programs</a>
              <a href="#faq" className="block text-gray-700 hover:text-purple-600">FAQ</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-purple-400 via-purple-300 to-blue-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Dear Future<br />Luminary
              </h1>
              <p className="text-xl text-white/90 mb-4">For the future that's watching.</p>
              <p className="text-lg text-white/80 mb-8">
                Discover your direction. Build your path with clarity. Access real global opportunities.
              </p>
              <p className="text-base text-white/75">
                We're here to help you find where you belong, understand your next step, and move forward with confidence. You're not alone on this journey.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-56 h-56 bg-gradient-to-br from-yellow-300 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-6xl font-bold text-white">★</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
            <div>
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="text-white/80">Opportunities curated</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">100+</p>
              <p className="text-white/80">Students guided</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">5+</p>
              <p className="text-white/80">Countries reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes US Different */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gray-900">What Makes</span><br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">US Different</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Built on Real Experience</h3>
              <p className="text-gray-700 leading-relaxed">
                Everything at Dear Future Luminary is shaped by real journeys, not theory. We break down complex application processes, explain what truly matters, and guide students through paths that members of our community have already walked.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Curated, Not Random</h3>
              <p className="text-gray-700 leading-relaxed">
                You won't find scattered links or overwhelming lists. Every opportunity, roadmap, and resource is selected with intention—so students can apply with clarity, confidence, and strategy, not guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Core Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">
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

      {/* Programs We're Proud Of */}
      <section id="programs" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="text-gray-900">Programs We're</span><br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Proud Of</span>
          </h2>
          <p className="text-center text-gray-600 mb-4">Our founder and community members have been accepted into these programs.</p>
          <p className="text-center text-gray-500 text-sm mb-12">Logos shown represent real acceptance journeys. Dear Future Luminary is not officially affiliated with these organizations.</p>
          
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {[...programs, ...programs].map((program, index) => (
                <div key={index} className="flex-shrink-0 w-32 h-32 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:shadow-lg transition">
                  <img src={`/logos/${program.logo}`} alt={program.name} className="max-w-24 max-h-24 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
          
          <div className="mb-8">
            <p className="text-5xl font-bold mb-4">
              <span className="text-yellow-300">Talent is everywhere.</span><br />
              <span className="text-yellow-300">Access is not.</span>
            </p>
          </div>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Dear Future Luminary exists to close that gap. We support high school and early college students—especially those from underrepresented communities—by providing clear guidance, trusted resources, and a supportive environment that helps them access global opportunities.
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
            <p className="text-white/80 mb-4">Our mission is simple:</p>
            <p className="text-2xl font-bold text-white">
              To turn <span className="text-yellow-300">ambition into direction</span>, <span className="text-yellow-300">confusion into clarity</span>, and <span className="text-yellow-300">potential into real outcomes</span>—so being a luminary becomes possible for everyone, not just a privileged few.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gray-900">Frequently Asked</span><br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-gray-600 mb-12">Everything you need to know about Dear Future Luminary</p>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-2 border-yellow-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 bg-white hover:bg-yellow-50 transition flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-900 text-left">{item.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-purple-600 transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 py-4 bg-yellow-50 border-t-2 border-yellow-300 text-gray-700">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12">
            <p className="text-white/90 mb-6 leading-relaxed text-lg">
              Dear Future Luminary started as a simple idea: no student should feel lost or alone while trying to grow.
              Whether you want to join our team or support our mission, this is your space to make an impact, share what you learn, and help students thrive.
              You don't need to have everything figured out. Together, we'll grow, learn, and build something meaningful.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
              <a
                href="https://forms.gle/pLqpSodiuMmB36Ei8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Join the Movement
              </a>
              <a
                href="https://forms.gle/1uFr976gMZqtJHcw7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Sponsor Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-purple-400 via-purple-300 to-blue-200 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DFL</span>
                </div>
                <span className="font-bold">Dear Future Luminary</span>
              </div>
              <p className="text-white/80 text-sm">Luminaries don't shine alone. We light the way for each other.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" onClick={() => setShowComingSoonModal(true)} className="hover:text-white transition">Home</a></li>
                <li><a href="#" onClick={() => setShowComingSoonModal(true)} className="hover:text-white transition">Roadmaps</a></li>
                <li><a href="#" onClick={() => setShowComingSoonModal(true)} className="hover:text-white transition">Scholarship Hub</a></li>
                <li><a href="#" onClick={() => setShowComingSoonModal(true)} className="hover:text-white transition">Profile Building</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" onClick={() => setShowComingSoonModal(true)} className="hover:text-white transition">Our Story & Vision</a></li>
                <li><a href="#" onClick={() => setShowComingSoonModal(true)} className="hover:text-white transition">Community Space</a></li>
                <li><a href="#" onClick={() => setShowComingSoonModal(true)} className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition">
                  <Mail size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 mb-12">
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <form onSubmit={handleContactFormSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={contactFormData.name}
                  onChange={handleContactFormChange}
                  required
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/50 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={contactFormData.email}
                  onChange={handleContactFormChange}
                  required
                  className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/50 transition"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={contactFormData.message}
                onChange={handleContactFormChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/50 transition"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition flex items-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
              {contactFormSubmitted && (
                <p className="text-green-300 text-sm">Message sent successfully!</p>
              )}
            </form>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
            <p>Made with purpose by Malak Emad</p>
          </div>
        </div>
      </footer>

      {/* Coming Soon Modal */}
      {showComingSoonModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-6 mx-auto">
              <AlertCircle className="text-blue-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Coming Soon</h3>
            <p className="text-gray-600 text-center mb-8">
              This feature is not available right now. But don't worry, we're working on bringing you something amazing very soon!
            </p>
            <button
              onClick={() => setShowComingSoonModal(false)}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
