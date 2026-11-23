import React, { useState } from 'react';
import { ShieldCheck, ChevronRight, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId, sectionId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    if (sectionId && pageId === 'landing') {
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-med-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Left */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('landing')}>
            <div className="w-10 h-10 rounded-xl bg-med-teal/10 flex items-center justify-center border border-med-teal/20 text-med-teal">
              <ShieldCheck className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-semibold tracking-tight text-med-navy">MedShare</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-med-teal-light text-med-teal px-2 py-0.5 rounded-full border border-med-teal/20">
                  Accredited
                </span>
              </div>
              <p className="text-xs text-med-slate-500 font-normal">Verified Medicine Redistribution</p>
            </div>
          </div>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('landing', 'how-it-works')}
              className={`text-sm font-medium transition-colors ${activePage === 'landing' ? 'text-med-navy hover:text-med-teal' : 'text-med-slate-600 hover:text-med-navy'}`}
            >
              How it works
            </button>
            <button 
              onClick={() => handleNavClick('inventory')}
              className={`text-sm font-medium transition-colors ${activePage === 'inventory' ? 'text-med-teal font-semibold' : 'text-med-slate-600 hover:text-med-navy'}`}
            >
              Inventory
            </button>
            <button 
              onClick={() => handleNavClick('policy')}
              className={`text-sm font-medium transition-colors ${activePage === 'policy' ? 'text-med-teal font-semibold' : 'text-med-slate-600 hover:text-med-navy'}`}
            >
              Policy
            </button>
            <button 
              onClick={() => handleNavClick('dashboard')}
              className={`text-sm font-medium transition-colors ${activePage === 'dashboard' ? 'text-med-teal font-semibold' : 'text-med-slate-600 hover:text-med-navy'}`}
            >
              Dashboard
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleNavClick('dashboard')}
              className="text-sm font-medium text-med-navy hover:text-med-teal transition-colors px-2 py-1"
            >
              Sign in
            </button>
            <button 
              onClick={() => handleNavClick('donation')}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-med-teal hover:bg-med-teal-hover rounded-xl shadow-xs transition-all active:scale-[0.98]"
            >
              Get started
              <ChevronRight className="w-4 h-4 ml-1 stroke-[2]" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-med-navy hover:bg-med-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-med-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <button 
            onClick={() => handleNavClick('landing', 'how-it-works')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-med-slate-700 hover:bg-med-slate-100 rounded-lg"
          >
            How it works
          </button>
          <button 
            onClick={() => handleNavClick('inventory')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-med-slate-700 hover:bg-med-slate-100 rounded-lg"
          >
            Inventory
          </button>
          <button 
            onClick={() => handleNavClick('policy')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-med-slate-700 hover:bg-med-slate-100 rounded-lg"
          >
            Acceptance Policy
          </button>
          <button 
            onClick={() => handleNavClick('dashboard')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-med-slate-700 hover:bg-med-slate-100 rounded-lg"
          >
            User Dashboard
          </button>
          <button 
            onClick={() => handleNavClick('pharmacist')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-med-slate-700 hover:bg-med-slate-100 rounded-lg"
          >
            Pharmacist Portal
          </button>

          <div className="pt-4 border-t border-med-slate-200 space-y-2">
            <button 
              onClick={() => handleNavClick('dashboard')}
              className="w-full text-center py-2.5 text-base font-medium text-med-navy border border-med-slate-300 rounded-xl"
            >
              Sign in
            </button>
            <button 
              onClick={() => handleNavClick('donation')}
              className="w-full text-center py-2.5 text-base font-medium text-white bg-med-teal rounded-xl"
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
