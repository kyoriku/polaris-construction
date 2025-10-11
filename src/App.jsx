import { useState, useRef, useEffect } from 'react';
import { Menu, X, Award, ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Custom Deck Building",
    description: "Transform your backyard with a custom deck designed for your lifestyle. We use premium materials including cedar, composite, and pressure-treated lumber. Our expert craftsmen create multi-level entertainment spaces that become the heart of your home.",
    features: ["Custom Design & 3D Rendering", "Premium Materials", "Structural Engineering", "Weather Resistant Finishes"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    reverse: false
  },
  {
    title: "Landscape Design",
    description: "Complete landscape transformations that enhance your property's beauty and value. From plant selection to irrigation systems, we create outdoor spaces that thrive season after season.",
    features: ["Professional Design", "Native Plant Selection", "Irrigation Systems", "Seasonal Maintenance"],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
    reverse: true
  },
  {
    title: "Outdoor Living Spaces",
    description: "Extend your living area outdoors with custom patios, fire pits, outdoor kitchens, and pergolas. Perfect for entertaining or relaxing with family.",
    features: ["Fire Features", "Outdoor Kitchens", "Pergolas & Gazebos", "Lighting Design"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    reverse: false
  }
];

const ConstructionSite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

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

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-emerald-700 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Elite Construction
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {['services', 'process', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  className="text-stone-700 hover:text-emerald-600 transition-colors capitalize font-medium cursor-pointer"
                >
                  {item}
                </button>
              ))}
              <a href="tel:1234567890" className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer">
                (123) 456-7890
              </a>
            </nav>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden cursor-pointer">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t">
              {['services', 'process', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
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
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=1000&fit=crop"
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
                Build Your Dream<br />
                Outdoor Space
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Expert construction and landscaping services. From custom decks to complete property transformations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-emerald-600 text-white font-bold text-lg rounded-lg hover:bg-emerald-700 transition-colors cursor-pointer flex items-center justify-center gap-2">
                  Get Free Estimate <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-lg border-2 border-white hover:bg-white/20 transition-colors cursor-pointer">
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
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop"
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - beforeAfterSlider}% 0 0)` }}
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop"
                alt="After"
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

            <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg font-semibold">
              BEFORE
            </div>
            <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold">
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
                <button className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                  Learn More <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ConstructionSite;