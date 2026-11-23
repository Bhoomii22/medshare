import React from 'react';
import { Check, X, ShieldAlert, FileText, ArrowRight } from 'lucide-react';

export default function PolicyTeaser({ onViewFullPolicy }) {
  const policyRows = [
    {
      category: 'Oral Solids (Tablets / Capsules)',
      accepted: 'Sealed factory blister cards or unopened manufacturer bottles',
      prohibited: 'Loose pills, pill organizers, opened bottles with broken seals'
    },
    {
      category: 'Inhalers & Liquids',
      accepted: 'Unopened foil wrap or intact tamper ring with >90 days expiry',
      prohibited: 'Partially used sprays, compounding liquids, opened suspensions'
    },
    {
      category: 'Controlled Substances',
      accepted: 'None (Strictly zero controlled substances handled)',
      prohibited: 'Schedule II-V drugs (opioids, sedatives, narcotics, stimulants)'
    }
  ];

  return (
    <section id="policy" className="py-16 md:py-24 bg-med-slate-50 border-b border-med-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-med-teal text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4 text-med-teal" />
              <span>Safety Standards Preview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-med-navy tracking-tight">
              Acceptance & prohibition teaser
            </h2>
          </div>
          <button 
            onClick={onViewFullPolicy}
            className="inline-flex items-center text-sm font-medium text-med-teal hover:text-med-teal-hover mt-3 md:mt-0 transition-colors"
          >
            View complete policy guide
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>

        {/* Compact Table Comparison Preview */}
        <div className="bg-white border border-med-slate-200 rounded-2xl overflow-hidden shadow-xs">
          
          <div className="grid grid-cols-12 bg-med-slate-100/70 p-4 border-b border-med-slate-200 text-xs font-semibold uppercase tracking-wider text-med-navy">
            <div className="col-span-12 md:col-span-4">Medication Category</div>
            <div className="col-span-12 md:col-span-4 mt-2 md:mt-0 text-med-teal">Accepted Criteria</div>
            <div className="col-span-12 md:col-span-4 mt-2 md:mt-0 text-med-slate-500">Prohibited Items</div>
          </div>

          <div className="divide-y divide-med-slate-200">
            {policyRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 md:p-5 items-center hover:bg-med-slate-50/50 transition-colors">
                
                {/* Category */}
                <div className="col-span-12 md:col-span-4 font-medium text-med-navy text-sm mb-2 md:mb-0">
                  {row.category}
                </div>

                {/* Accepted */}
                <div className="col-span-12 md:col-span-4 mb-2 md:mb-0">
                  <div className="inline-flex items-start space-x-2 text-xs text-med-slate-700 bg-med-teal-light/60 p-2.5 rounded-xl border border-med-teal/20 w-full">
                    <Check className="w-4 h-4 text-med-teal flex-shrink-0 mt-0.5" />
                    <span>{row.accepted}</span>
                  </div>
                </div>

                {/* Prohibited */}
                <div className="col-span-12 md:col-span-4">
                  <div className="inline-flex items-start space-x-2 text-xs text-med-slate-600 bg-med-slate-100 p-2.5 rounded-xl border border-med-slate-200 w-full">
                    <X className="w-4 h-4 text-med-slate-400 flex-shrink-0 mt-0.5" />
                    <span>{row.prohibited}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Footer Callout Bar inside Card */}
          <div className="bg-med-slate-100/50 p-4 border-t border-med-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-med-slate-600 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-med-teal" />
              <span>Full rules detail cold-chain requirements, NDC batch logging, and pharmacy disposal.</span>
            </div>
            <button
              onClick={onViewFullPolicy}
              className="text-med-teal font-medium hover:underline flex items-center"
            >
              Read full policy PDF / guide
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
