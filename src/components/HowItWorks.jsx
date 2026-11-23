import React from 'react';
import { ClipboardCheck, Stethoscope, Truck, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Eligibility check',
      desc: 'Donors submit unexpired, unopened factory-sealed blister packs or bottles with >3 months remaining before expiration.',
      icon: ClipboardCheck,
      badge: 'Step 1'
    },
    {
      number: '02',
      title: 'Pharmacist verification',
      desc: 'Accredited PharmD staff inspect serial seals, lot numbers, storage history, and physical integrity of every medication batch.',
      icon: Stethoscope,
      badge: 'Step 2'
    },
    {
      number: '03',
      title: 'Dispatched to patient',
      desc: 'Verified medicines are safely matched to validated patient prescriptions and shipped in temperature-controlled packaging.',
      icon: Truck,
      badge: 'Step 3'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-med-slate-50 border-b border-med-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-med-teal text-xs font-semibold uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-med-slate-200">
            <ShieldCheck className="w-4 h-4 text-med-teal" />
            <span>Regulated Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-med-navy tracking-tight">
            How MedShare operates safely
          </h2>
          <p className="text-med-slate-600 text-base font-normal">
            A seamless three-phase chain-of-custody model ensuring absolute safety from donor pickup to patient delivery.
          </p>
        </div>

        {/* 3-Step Horizontal Layout on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-med-slate-200 -translate-y-8 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="bg-white border border-med-slate-200 rounded-2xl p-6 sm:p-8 relative z-10 flex flex-col justify-between hover:border-med-teal/40 transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-med-teal-light text-med-teal border border-med-teal/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-xs font-mono font-medium text-med-slate-400 bg-med-slate-100 px-2.5 py-1 rounded-md">
                      {step.badge}
                    </span>
                  </div>

                  <div className="text-xs font-semibold uppercase tracking-wider text-med-teal mb-1">Phase {step.number}</div>
                  <h3 className="text-xl font-medium text-med-navy mb-3">{step.title}</h3>
                  <p className="text-sm text-med-slate-600 font-normal leading-relaxed">{step.desc}</p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:flex items-center text-xs text-med-teal font-medium mt-6 pt-4 border-t border-med-slate-100">
                    <span>Proceeds to verification</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                )}
                {idx === steps.length - 1 && (
                  <div className="hidden md:flex items-center text-xs text-med-mint font-medium mt-6 pt-4 border-t border-med-slate-100">
                    <span>Patient fulfillment complete</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
