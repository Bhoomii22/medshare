import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, XCircle, FileText, ArrowLeft, Search, Lock } from 'lucide-react';

export default function AcceptancePolicy({ onBack }) {
  const [search, setSearch] = useState('');

  const rules = [
    {
      type: 'accepted',
      title: 'Oral Solid Dosage (Tablets & Capsules)',
      details: 'Must be in original, unopened factory blister packs, strip packaging, or sealed manufacturer bottles with intact foil seals.',
      expiryRule: 'Minimum 90 days (3 months) prior to expiration date at intake.',
      example: 'Atorvastatin, Metformin, Lisinopril, Amlodipine, Levothyroxine.'
    },
    {
      type: 'accepted',
      title: 'Inhalers & Respiratory Products',
      details: 'Must be in unopened foil overwraps or original boxes with untampered shrink bands.',
      expiryRule: 'Minimum 120 days prior to expiration date.',
      example: 'Albuterol HFA, Fluticasone, Budesonide inhalers.'
    },
    {
      type: 'accepted',
      title: 'Topicals & Unopened Liquids',
      details: 'Ointments, creams, and oral liquids in original unopened packaging with tamper-evident neck bands.',
      expiryRule: 'Minimum 120 days prior to expiration date.',
      example: 'Hydrocortisone cream, unopened antibiotic suspensions.'
    },
    {
      type: 'prohibited',
      title: 'Controlled Substances (Schedule II-V)',
      details: 'STRICTLY PROHIBITED. MedShare does not collect, transport, store, or process any narcotics, opioids, stimulants, or controlled sedatives.',
      reason: 'Federal Controlled Substances Act (DEA compliance).',
      example: 'Oxycodone, Hydrocodone, Alprazolam, Adderall, Tramadol.'
    },
    {
      type: 'prohibited',
      title: 'Opened Containers & Loose Pills',
      details: 'Any bottle with a broken inner foil seal, loose pills in daily pill organizers, or partial blister strips.',
      reason: 'Safety risk of contamination or mislabeling.',
      example: 'Half-empty prescription bottles, pill boxes.'
    },
    {
      type: 'prohibited',
      title: 'Refrigerated Biologicals (Unless Direct Clinic Storage)',
      details: 'Compounded insulin or vaccines from individual donors without continuous digital cold-chain logs.',
      reason: 'Temperature excursion risk.',
      example: 'Individual opened insulin vials, reconstituted biologics.'
    }
  ];

  const filteredRules = rules.filter(r => r.title.toLowerCase().includes(search.toLowerCase()) || r.details.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-med-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        <button 
          onClick={onBack} 
          className="inline-flex items-center text-sm font-medium text-med-slate-600 hover:text-med-navy mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Landing Page
        </button>

        {/* Page Title */}
        <div className="bg-white rounded-3xl border border-med-slate-200 p-8 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-med-teal text-xs font-semibold uppercase tracking-wider bg-med-teal-light px-3 py-1 rounded-full border border-med-teal/20 mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>State Board Compliance</span>
              </div>
              <h1 className="text-3xl font-medium text-med-navy">Medication Acceptance Policy</h1>
              <p className="text-sm text-med-slate-600 font-normal mt-1 max-w-2xl">
                Detailed regulatory standards governing eligible medication donations, packaging requirements, and strict prohibitions.
              </p>
            </div>
            
            <div className="text-right">
              <span className="text-xs font-mono text-med-slate-400">Policy Version 3.4 (2026)</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-med-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search medication category or prohibition rule..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-med-slate-300 text-sm bg-white focus:outline-none focus:border-med-teal"
            />
          </div>
        </div>

        {/* Rules Grid */}
        <div className="space-y-4">
          {filteredRules.map((rule, idx) => (
            <div 
              key={idx}
              className={`bg-white border rounded-2xl p-6 sm:p-8 transition-all ${rule.type === 'accepted' ? 'border-med-slate-200 hover:border-med-teal/40' : 'border-med-slate-200 hover:border-med-navy/40'}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  {rule.type === 'accepted' ? (
                    <div className="w-8 h-8 rounded-xl bg-med-teal-light text-med-teal flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-xl bg-med-slate-100 text-med-navy flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-5 h-5 text-med-navy" />
                    </div>
                  )}

                  <div>
                    <span className={`text-[11px] font-semibold uppercase tracking-wider ${rule.type === 'accepted' ? 'text-med-teal' : 'text-med-navy'}`}>
                      {rule.type === 'accepted' ? 'Accepted Medication Standard' : 'Strictly Prohibited Item'}
                    </span>
                    <h3 className="text-lg font-medium text-med-navy">{rule.title}</h3>
                  </div>
                </div>

                <span className="text-xs font-mono bg-med-slate-100 text-med-slate-600 px-3 py-1 rounded-md">
                  {rule.type === 'accepted' ? rule.expiryRule : rule.reason}
                </span>
              </div>

              <p className="text-sm text-med-slate-600 font-normal mt-4 leading-relaxed">
                {rule.details}
              </p>

              <div className="mt-4 pt-3 border-t border-med-slate-100 text-xs text-med-slate-500 font-mono">
                Examples: {rule.example}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
