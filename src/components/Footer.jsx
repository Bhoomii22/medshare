import React from 'react';
import { ShieldCheck, FileText, Lock, Globe, Heart } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-med-navy text-white pt-16 pb-12 border-t border-med-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('landing')}>
              <div className="w-10 h-10 rounded-xl bg-med-teal flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="text-xl font-semibold tracking-tight text-white">MedShare</span>
                <p className="text-xs text-med-slate-300 font-normal">Medicine Rescue & Redistribution</p>
              </div>
            </div>

            <p className="text-xs text-med-slate-300 leading-relaxed font-normal max-w-sm">
              An accredited digital healthcare platform redirecting unexpired, unused pharmaceutical inventory to verified patients in compliance with state pharmacy boards.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/10 text-med-mint border border-white/10">
                <Lock className="w-3 h-3 mr-1 text-med-mint" /> HIPAA Compliant
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/10 text-med-teal-light border border-white/10">
                GxP Cold-Chain Certified
              </span>
            </div>
          </div>

          {/* Core Navigation Links */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-med-slate-300 mb-4">Core Platform Views</h4>
              <ul className="space-y-2.5 text-xs text-med-slate-300 font-normal">
                <li>
                  <button onClick={() => onNavigate('donation')} className="hover:text-white transition-colors">
                    Donation Wizard
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('inventory')} className="hover:text-white transition-colors">
                    Medicine Inventory
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('prescription')} className="hover:text-white transition-colors">
                    Prescription Flow
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('pharmacist')} className="hover:text-white transition-colors">
                    Pharmacist Dashboard
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-med-slate-300 mb-4">Governance & Portal</h4>
              <ul className="space-y-2.5 text-xs text-med-slate-300 font-normal">
                <li>
                  <button onClick={() => onNavigate('policy')} className="hover:text-white transition-colors">
                    Acceptance Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('dashboard')} className="hover:text-white transition-colors">
                    User Dashboard
                  </button>
                </li>
                <li>
                  <a href="#how-it-works" onClick={() => onNavigate('landing', 'how-it-works')} className="hover:text-white transition-colors">
                    Verification Standard
                  </a>
                </li>
                <li>
                  <a href="#metrics" onClick={() => onNavigate('landing', 'metrics')} className="hover:text-white transition-colors">
                    Impact Reports
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Social Links & Support */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-med-slate-300 mb-4">Network & Social</h4>
            <div className="flex space-x-3 text-xs text-med-slate-300">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-med-teal transition-colors">
                LinkedIn
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-med-teal transition-colors">
                Twitter
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-med-teal transition-colors">
                GitHub
              </a>
            </div>

            <div className="pt-2 text-xs text-med-slate-400">
              <p className="font-medium text-med-slate-300">Pharmacist Helpline:</p>
              <p className="font-mono text-med-mint">1-800-MEDSHARE (24/7)</p>
            </div>
          </div>

        </div>

        {/* Compliance / Legal Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-med-slate-400 space-y-4 sm:space-y-0">
          <p>© 2026 MedShare Inc. All rights reserved. MedShare operates in accordance with United States State Board of Pharmacy Medication Donation Redistribution Act regulations.</p>
          <div className="flex space-x-6 text-med-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">HIPAA Disclosure</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
