import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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

      {/* Temporary content */}
      <div className="pt-32 px-6 text-center">
        <h1 className="text-4xl font-bold text-stone-900">Header text</h1>
        <p className="mt-4 text-stone-600">Header description text</p>
      </div>
    </div>
  );
}