import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Menu, X, Award, ArrowRight, CheckCircle, ChevronRight, Hammer, Shield, Users } from 'lucide-react';

const services = [
  {
    title: "Custom Deck Building",
    description: "Transform your backyard with a custom deck designed for your lifestyle. We use premium materials including cedar, composite, and pressure-treated lumber. Our expert craftsmen create multi-level entertainment spaces that become the heart of your home.",
    features: ["Custom Design & 3D Rendering", "Premium Materials", "Structural Engineering", "Weather Resistant Finishes"],
    image: "https://images.unsplash.com/photo-1617850687395-620757feb1f3?w=800&h=600&fit=crop",
    reverse: false
  },
  {
    title: "Landscape Design",
    description: "Complete landscape transformations that enhance your property's beauty and value. From plant selection to irrigation systems, we create outdoor spaces that thrive season after season.",
    features: ["Professional Design", "Native Plant Selection", "Irrigation Systems", "Seasonal Maintenance"],
    image: "https://images.unsplash.com/photo-1734079692087-91bac04efcd1?w=800&h=600&fit=crop",
    reverse: true
  },
  {
    title: "Outdoor Living Spaces",
    description: "Extend your living area outdoors with custom patios, fire pits, outdoor kitchens, and pergolas. Perfect for entertaining or relaxing with family.",
    features: ["Fire Features", "Outdoor Kitchens", "Pergolas & Gazebos", "Lighting Design"],
    image: "https://images.unsplash.com/photo-1696846912973-3233cc80bf86?w=800&h=600&fit=crop",
    reverse: false
  }
];

const processSteps = [
  {
    title: "Consultation",
    description: "Free on-site visit to discuss your vision and requirements",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Design & Quote",
    description: "Detailed proposal with 3D renderings and transparent pricing",
    icon: <Hammer className="w-8 h-8" />
  },
  {
    title: "Permits & Prep",
    description: "We handle all permits and site preparation work",
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: "Construction",
    description: "Expert craftsmanship with regular progress updates",
    icon: <Award className="w-8 h-8" />
  },
  {
    title: "Final Walkthrough",
    description: "Inspection and guarantee you're 100% satisfied",
    icon: <CheckCircle className="w-8 h-8" />
  }
];

const projects = [
  {
    title: "Modern Deck Addition",
    location: "Riverside",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1656646549569-e3ad3ff8f9f9?w=600&h=400&fit=crop",
    size: "large"
  },
  {
    title: "Backyard Oasis",
    location: "Oak Valley",
    type: "Landscaping",
    image: "https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?w=400&h=400&fit=crop",
    size: "small"
  },
  {
    title: "Outdoor Kitchen",
    location: "Pine Ridge",
    type: "Outdoor Living",
    image: "https://images.unsplash.com/photo-1694885090746-d90472e11c0e?w=400&h=400&fit=crop",
    size: "small"
  },
  {
    title: "Custom Patio",
    location: "Hillside",
    type: "Hardscaping",
    image: "https://images.unsplash.com/photo-1624409990662-03f19cc0e0cc?w=600&h=800&fit=crop",
    size: "large"
  },
  {
    title: "Home Extension",
    location: "Downtown",
    type: "Addition",
    image: "https://images.unsplash.com/photo-1704742950992-9815a104820c?w=400&h=600&fit=crop",
    size: "medium"
  },
  {
    title: "Garden Landscaping",
    location: "Westside",
    type: "Landscaping",
    image: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=400&h=400&fit=crop",
    size: "small"
  }
];

const ConstructionSite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeProcess, setActiveProcess] = useState(0);
  const sliderRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const updateSliderPosition = (clientX) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setBeforeAfterSlider(percentage);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div
              className="flex items-center gap-3 text-2xl font-bold text-emerald-700 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src="favicon/favicon.svg"
                alt="Polaris Construction Logo"
                className="w-8 h-8"
              />
              <span>Polaris Construction</span>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {['services', 'process', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-stone-700 hover:text-emerald-600 transition-colors capitalize font-medium cursor-pointer"
                >
                  {item}
                </button>
              ))}
              <a
                href="tel:1234567890"
                className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
              >
                (123) 456-7890
              </a>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div ref={mobileMenuRef} className="lg:hidden mt-4 pt-4 border-t">
              {['services', 'process', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 text-stone-700 hover:text-emerald-600 capitalize cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen mt-16">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=1000&fit=crop"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/70 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 bg-emerald-600 px-4 py-2 rounded-full mb-6">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Build Your Dream<br />Outdoor Space
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Expert construction and landscaping services. From custom decks to complete property transformations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-emerald-600 text-white font-bold text-lg rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  Get Free Estimate <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-lg border-2 border-white hover:bg-white/20 transition-colors cursor-pointer"
                >
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-emerald-600 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-emerald-100">Projects Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-emerald-100">Years Experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-emerald-100">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">A+</p>
              <p className="text-emerald-100">BBB Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mb-4">See The Transformation</h2>
            <p className="text-xl text-stone-600">Drag the slider to reveal the difference</p>
          </div>

          <div
            ref={sliderRef}
            className="relative w-full max-w-5xl mx-auto h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            role="img"
            aria-label="Before and after comparison slider showing construction transformation. Drag the slider to compare before and after images."
          >
            <img
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop"
              alt="Before construction"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - beforeAfterSlider}% 0 0)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=1200&h=800&fit=crop"
                alt="After construction"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${beforeAfterSlider}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-stone-400" />
                  <div className="w-0.5 h-4 bg-stone-400" />
                </div>
              </div>
            </div>

            <div
              className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg font-semibold transition-opacity duration-300"
              style={{ opacity: beforeAfterSlider > 20 ? 1 : 0 }}
            >
              BEFORE
            </div>
            <div
              className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition-opacity duration-300"
              style={{ opacity: beforeAfterSlider < 80 ? 1 : 0 }}
            >
              AFTER
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-stone-50">
        {services.map((service, index) => (
          <div key={index} className={`grid lg:grid-cols-2 ${service.reverse ? 'lg:grid-flow-dense' : ''}`}>
            <div className={`${service.reverse ? 'lg:col-start-2' : ''}`}>
              <img src={service.image} alt={service.title} className="w-full h-full object-cover min-h-96" />
            </div>
            <div className="flex items-center p-12 lg:p-20 bg-white">
              <div>
                <h3 className="text-4xl font-bold text-stone-900 mb-6">{service.title}</h3>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-700">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
                >
                  Learn More <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process Timeline */}
      <section id="process" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mb-4">Our Process</h2>
            <p className="text-xl text-stone-600">Simple, transparent, and stress-free</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-stone-200">
              <div
                className="h-full bg-emerald-600 transition-all duration-500"
                style={{ width: `${(activeProcess / (processSteps.length - 1)) * 100}%` }}
              />
            </div>

            <div className="grid md:grid-cols-5 gap-8 relative">
              {processSteps.map((step, index) => (
                <button
                  key={index}
                  className="text-center cursor-pointer bg-transparent border-0 w-full p-0"
                  onClick={() => setActiveProcess(index)}
                  onMouseEnter={() => setActiveProcess(index)}
                  aria-label={`Step ${index + 1}: ${step.title} - ${step.description}`}
                  aria-pressed={activeProcess === index}
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all ${activeProcess >= index
                      ? 'bg-emerald-600 text-white scale-110'
                      : 'bg-stone-200 text-stone-500'
                      }`}
                  >
                    {step.icon}
                  </div>
                  <h3 className={`font-bold text-lg mb-2 ${activeProcess === index ? 'text-emerald-600' : 'text-stone-900'}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{step.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mb-4">Our Work</h2>
            <p className="text-xl text-stone-600">Real projects, real results</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-lg cursor-pointer ${project.size === 'large' ? 'col-span-2 row-span-2' :
                  project.size === 'medium' ? 'row-span-2' : ''
                  }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm text-emerald-400 mb-2">{project.type}</p>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-emerald-600">
        <div className="max-w-5xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-5xl font-bold mb-4">Start Your Project Today</h2>
            <p className="text-xl text-emerald-100">Get a free consultation and estimate</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Call or Text</p>
                  <a href="tel:1234567890" className="text-emerald-100 hover:text-white text-lg">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email Us</p>
                  <a href="mailto:info@polarisconstruction.com" className="text-emerald-100 hover:text-white">
                    info@polarisconstruction.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Service Area</p>
                  <p className="text-emerald-100">Metro Area & Surrounding Communities</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Business Hours</p>
                  <p className="text-emerald-100">Mon-Fri: 8AM - 6PM<br />Sat: 9AM - 4PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">Request Free Estimate</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-stone-700 font-medium mb-2">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-stone-700 font-medium mb-2">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-stone-700 font-medium mb-2">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-stone-700 font-medium mb-2">Project Details</label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows="4"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <button
                  onClick={() => alert('Form submission would integrate with backend service')}
                  className="w-full py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer"
                >
                  Get Free Estimate
                </button>
                <p className="text-sm text-stone-600 text-center">
                  We respond within 24 hours • No obligation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Polaris Construction</h3>
              <p className="leading-relaxed">Quality craftsmanship for your outdoor space. Licensed, bonded, and insured.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-white cursor-pointer transition-colors text-left">
                    Deck Building
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-white cursor-pointer transition-colors text-left">
                    Landscaping
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-white cursor-pointer transition-colors text-left">
                    Home Additions
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-white cursor-pointer transition-colors text-left">
                    Outdoor Living
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="tel:1234567890" className="hover:text-white transition-colors">
                    (123) 456-7890
                  </a>
                </li>
                <li>
                  <a href="mailto:info@polarisconstruction.com" className="hover:text-white transition-colors">
                    info@polarisconstruction.com
                  </a>
                </li>
                <li>Licensed #123456</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-sm">
            <p>© 2025 Polaris Construction Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ConstructionSite;