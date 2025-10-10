import { useState } from 'react';
import { Menu, X, Award, ArrowRight } from 'lucide-react';

export default function ConstructionSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    </div>
  );
}