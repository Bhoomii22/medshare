import React, { useState } from 'react';
import { Package, ShieldCheck, CheckCircle2, Upload, AlertCircle, ArrowLeft, ArrowRight, Camera } from 'lucide-react';

export default function DonationWizard({ onBack }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    medName: 'Metformin HCl 500mg',
    dosage: '500mg',
    quantity: '60 Tablets',
    expiry: '2027-08',
    form: 'Blister Pack',
    ndcCode: '00093-1048-01',
    packagingStatus: 'Factory Sealed',
    donorType: 'Individual Donor',
    donorName: 'Sarah Jenkins',
    email: 'sarah.jenkins@example.com'
  });
  const [photoUploaded, setPhotoUploaded] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-med-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Button Header */}
        <button 
          onClick={onBack} 
          className="inline-flex items-center text-sm font-medium text-med-slate-600 hover:text-med-navy mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Landing Page
        </button>

        {/* Wizard Container */}
        <div className="bg-white rounded-3xl border border-med-slate-200 p-6 sm:p-10 shadow-xs">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-med-slate-200 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-med-teal bg-med-teal-light px-2.5 py-1 rounded-full border border-med-teal/20">
                Donation Intake Flow
              </span>
              <h1 className="text-2xl font-medium text-med-navy mt-2">Medicine Donation Wizard</h1>
            </div>
            <div className="text-right">
              <span className="text-xs text-med-slate-400 font-mono">Step {step} of 3</span>
            </div>
          </div>

          {!submitted ? (
            <div>
              {/* Progress Bar */}
              <div className="grid grid-cols-3 gap-2 mb-8">
                <div className={`h-1.5 rounded-full ${step >= 1 ? 'bg-med-teal' : 'bg-med-slate-200'}`} />
                <div className={`h-1.5 rounded-full ${step >= 2 ? 'bg-med-teal' : 'bg-med-slate-200'}`} />
                <div className={`h-1.5 rounded-full ${step >= 3 ? 'bg-med-teal' : 'bg-med-slate-200'}`} />
              </div>

              {/* Step 1: Medication Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-med-navy">1. Enter Medication Details</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-med-slate-700 mb-1">Medication Name</label>
                      <input 
                        type="text" 
                        value={formData.medName}
                        onChange={(e) => setFormData({...formData, medName: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-med-slate-300 text-sm focus:outline-none focus:border-med-teal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-med-slate-700 mb-1">NDC Code (National Drug Code)</label>
                      <input 
                        type="text" 
                        value={formData.ndcCode}
                        onChange={(e) => setFormData({...formData, ndcCode: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-med-slate-300 text-sm font-mono focus:outline-none focus:border-med-teal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-med-slate-700 mb-1">Quantity</label>
                      <input 
                        type="text" 
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-med-slate-300 text-sm focus:outline-none focus:border-med-teal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-med-slate-700 mb-1">Expiry Date (Must be &gt;3 months)</label>
                      <input 
                        type="month" 
                        value={formData.expiry}
                        onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-med-slate-300 text-sm focus:outline-none focus:border-med-teal"
                      />
                    </div>
                  </div>

                  <div className="bg-med-slate-50 p-4 rounded-2xl border border-med-slate-200">
                    <label className="block text-xs font-medium text-med-slate-700 mb-2">Packaging Format</label>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      {['Blister Pack', 'Unopened Bottle', 'Foil Seal Inhaler', 'Injectable Box'].map((fmt) => (
                        <button
                          key={fmt}
                          type="button"
                          onClick={() => setFormData({...formData, form: fmt})}
                          className={`p-3 rounded-xl border text-left transition-all ${formData.form === fmt ? 'border-med-teal bg-med-teal-light text-med-teal font-medium' : 'border-med-slate-200 bg-white text-med-slate-700'}`}
                        >
                          {fmt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Verification Photo Upload */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-med-navy">2. Packaging Verification & Photos</h3>
                  <p className="text-xs text-med-slate-600">
                    Please upload clear photos showing the intact factory seal, expiration date, and manufacturer box/label.
                  </p>

                  <div className="border-2 border-dashed border-med-slate-300 rounded-2xl p-8 text-center bg-med-slate-50 hover:bg-white transition-colors cursor-pointer" onClick={() => setPhotoUploaded(true)}>
                    <Camera className="w-10 h-10 text-med-teal mx-auto mb-2" />
                    <p className="text-sm font-medium text-med-navy">Click to simulate uploading batch photo</p>
                    <p className="text-xs text-med-slate-500 mt-1">Supported: JPG, PNG, HEIC up to 10MB</p>
                  </div>

                  {photoUploaded && (
                    <div className="bg-med-teal-light/60 border border-med-teal/20 rounded-2xl p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-med-teal" />
                        <div>
                          <p className="text-xs font-medium text-med-navy">metformin_blister_seal_batch8942.jpg</p>
                          <p className="text-[11px] text-med-slate-500">2.4 MB • Tamper seal clearly visible</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-med-mint bg-white px-2.5 py-1 rounded-full border border-med-mint/20">AI Pre-verified</span>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Donor Declaration */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-med-navy">3. Legal Declaration & Prepaid Shipping</h3>
                  
                  <div className="bg-med-slate-50 p-4 rounded-2xl border border-med-slate-200 text-xs text-med-slate-700 space-y-3">
                    <div className="flex items-start space-x-2">
                      <ShieldCheck className="w-4 h-4 text-med-teal flex-shrink-0 mt-0.5" />
                      <p>I confirm that the donated medication has been stored under recommended room temperature conditions and is non-controlled.</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <ShieldCheck className="w-4 h-4 text-med-teal flex-shrink-0 mt-0.5" />
                      <p>I acknowledge that all donated items will undergo physical inspection by a licensed pharmacist prior to patient dispatch.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-med-slate-700 mb-1">Donor Name / Pharmacy Name</label>
                      <input 
                        type="text" 
                        value={formData.donorName}
                        onChange={(e) => setFormData({...formData, donorName: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-med-slate-300 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-med-slate-700 mb-1">Email for Prepaid Shipping Label</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-med-slate-300 text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Action Bar */}
              <div className="flex items-center justify-between pt-8 mt-8 border-t border-med-slate-200">
                {step > 1 ? (
                  <button 
                    onClick={() => setStep(step - 1)}
                    className="px-5 py-2.5 text-sm font-medium text-med-slate-600 bg-med-slate-100 rounded-xl hover:bg-med-slate-200"
                  >
                    Previous
                  </button>
                ) : <div />}

                <button 
                  onClick={handleNext}
                  className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-med-teal hover:bg-med-teal-hover rounded-xl shadow-xs"
                >
                  {step === 3 ? 'Submit Donation Batch' : 'Continue'}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              </div>

            </div>
          ) : (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 bg-med-mint-light text-med-mint rounded-full flex items-center justify-center mx-auto border border-med-mint/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-medium text-med-navy">Donation Batch Submitted!</h2>
              <p className="text-sm text-med-slate-600 max-w-md mx-auto">
                We've generated your prepaid UPS shipping label and sent it to <strong className="text-med-navy">{formData.email}</strong>. Once received, our PharmD team will verify batch #{formData.ndcCode}.
              </p>
              <button 
                onClick={onBack}
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-med-navy rounded-xl"
              >
                Return to MedShare Home
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
