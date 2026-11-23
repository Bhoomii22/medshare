import React from 'react';
import { PackageCheck, FileCheck, CheckCircle2, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export default function DualValProp({ onDonorCTA, onPatientCTA }) {
  return (
    <section id="dual-prop" className="py-16 md:py-24 bg-white border-b border-med-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-med-teal text-xs font-semibold uppercase tracking-wider bg-med-teal-light px-3 py-1 rounded-full border border-med-teal/20">
            <Sparkles className="w-4 h-4" />
            <span>Tailored Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium text-med-navy tracking-tight">
            Designed for both donors and patients
          </h2>
          <p className="text-med-slate-600 text-base font-normal">
            Clear guidelines and streamlined workflows built for safety, transparency, and speed.
          </p>
        </div>

        {/* Dual Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: For Donors */}
          <div className="bg-med-slate-50 border border-med-slate-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-med-teal/30 transition-all">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-med-teal text-white flex items-center justify-center">
                  <PackageCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-xs font-medium text-med-teal bg-white px-3 py-1 rounded-full border border-med-slate-200">
                  Quick & Safe To Give
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-med-navy mb-2">For Donors</h3>
                <p className="text-sm text-med-slate-600 font-normal leading-relaxed">
                  Turn surplus maintenance medications into life-saving resources. Reduce medical waste and receive a tax deduction receipt for eligible institutional gifts.
                </p>
              </div>

              {/* Requirement Checklist */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-med-navy">Donor Acceptance Rules</p>
                
                <div className="flex items-start space-x-3 bg-white p-3.5 rounded-xl border border-med-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-med-mint flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-med-navy">Sealed Blister Packs & Bottles</h4>
                    <p className="text-xs text-med-slate-500 font-normal">Original factory packaging with intact tamper-evident seals.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white p-3.5 rounded-xl border border-med-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-med-mint flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-med-navy">3+ Months Expiration Window</h4>
                    <p className="text-xs text-med-slate-500 font-normal">Sufficient shelf life remaining for inspection & distribution.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white p-3.5 rounded-xl border border-med-slate-200/80">
                  <CheckCircle2 className="w-5 h-5 text-med-mint flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-med-navy">Non-Narcotic Medications Only</h4>
                    <p className="text-xs text-med-slate-500 font-normal">Maintenance drugs (cardiovascular, metabolic, respiratory, etc.).</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-8">
              <button 
                onClick={onDonorCTA}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-med-teal hover:bg-med-teal-hover rounded-xl shadow-xs transition-all active:scale-[0.99]"
              >
                Start donation flow
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Card 2: For Patients */}
          <div className="bg-med-slate-50 border border-med-slate-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-med-navy/30 transition-all">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-med-navy text-white flex items-center justify-center">
                  <FileCheck className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-xs font-medium text-med-navy bg-white px-3 py-1 rounded-full border border-med-slate-200">
                  Verified Patient Access
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-med-navy mb-2">For Patients</h3>
                <p className="text-sm text-med-slate-600 font-normal leading-relaxed">
                  Access essential, high-cost maintenance prescriptions at zero cost. Every order is reviewed by licensed clinical pharmacists before dispatch.
                </p>
              </div>

              {/* Patient Step Checklist */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-med-navy">3-Step Patient Process</p>

                <div className="flex items-start space-x-3 bg-white p-3.5 rounded-xl border border-med-slate-200/80">
                  <div className="w-5 h-5 rounded-full bg-med-teal-light text-med-teal flex items-center justify-center font-medium text-xs flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <h4 className="text-sm font-medium text-med-navy">Upload Doctor's Prescription</h4>
                    <p className="text-xs text-med-slate-500 font-normal">Submit photo or PDF of valid Rx issued by licensed physician.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white p-3.5 rounded-xl border border-med-slate-200/80">
                  <div className="w-5 h-5 rounded-full bg-med-teal-light text-med-teal flex items-center justify-center font-medium text-xs flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <h4 className="text-sm font-medium text-med-navy">Pharmacist Verification</h4>
                    <p className="text-xs text-med-slate-500 font-normal">Our clinical team validates prescription details and dosage match.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-white p-3.5 rounded-xl border border-med-slate-200/80">
                  <div className="w-5 h-5 rounded-full bg-med-teal-light text-med-teal flex items-center justify-center font-medium text-xs flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <h4 className="text-sm font-medium text-med-navy">Receive Tracked Delivery</h4>
                    <p className="text-xs text-med-slate-500 font-normal">Dispatched direct to your doorstep with chain-of-custody tracking.</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-8">
              <button 
                onClick={onPatientCTA}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-med-navy bg-white border-2 border-med-navy hover:bg-med-navy hover:text-white rounded-xl shadow-xs transition-all active:scale-[0.99]"
              >
                Find available medicine
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
