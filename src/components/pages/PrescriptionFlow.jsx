import React, { useState } from 'react';
import { FileUp, ShieldCheck, CheckCircle2, ArrowLeft, Truck, AlertCircle, User, FileText } from 'lucide-react';

export default function PrescriptionFlow({ onBack }) {
  const [rxUploaded, setRxUploaded] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [patientData, setPatientData] = useState({
    name: 'Robert Garcia',
    dob: '1978-04-12',
    phone: '(555) 234-8901',
    address: '428 Oakwood Ave, Austin, TX 78701',
    prescriber: 'Dr. Evelyn Carter, MD (NPI #1982039120)',
    medicationRequested: 'Atorvastatin Calcium 20mg'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-med-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        <button 
          onClick={onBack} 
          className="inline-flex items-center text-sm font-medium text-med-slate-600 hover:text-med-navy mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Landing Page
        </button>

        <div className="bg-white rounded-3xl border border-med-slate-200 p-6 sm:p-10 shadow-xs">
          
          <div className="flex items-center justify-between pb-6 border-b border-med-slate-200 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-med-navy bg-med-slate-100 px-2.5 py-1 rounded-full border border-med-slate-200">
                Patient Prescription Intake
              </span>
              <h1 className="text-2xl font-medium text-med-navy mt-2">Request Verified Medication</h1>
            </div>
            <ShieldCheck className="w-8 h-8 text-med-teal" />
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Prescription Upload Area */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-med-navy">1. Upload Doctor's Prescription (Rx)</label>
                <p className="text-xs text-med-slate-500">Must display patient name, prescriber NPI, drug name, dosage, and valid refills.</p>
                
                <div 
                  className="border-2 border-dashed border-med-slate-300 rounded-2xl p-6 text-center bg-med-slate-50 hover:bg-white transition-colors cursor-pointer"
                  onClick={() => setRxUploaded(true)}
                >
                  <FileUp className="w-8 h-8 text-med-teal mx-auto mb-2" />
                  <p className="text-sm font-medium text-med-navy">Click to attach prescription photo or PDF</p>
                </div>

                {rxUploaded && (
                  <div className="bg-med-teal-light/60 border border-med-teal/20 rounded-xl p-3.5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-med-teal" />
                      <div>
                        <p className="text-xs font-medium text-med-navy">rx_carter_atorvastatin_2026.pdf</p>
                        <p className="text-[11px] text-med-slate-500">Verified format • Valid NPI matched</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-med-mint bg-white px-2.5 py-1 rounded-full border border-med-mint/20">Rx Attached</span>
                  </div>
                )}
              </div>

              {/* Patient Details */}
              <div className="space-y-4 pt-4 border-t border-med-slate-200">
                <label className="block text-xs font-semibold uppercase tracking-wider text-med-navy">2. Patient & Delivery Information</label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-med-slate-700 mb-1">Full Patient Name</label>
                    <input 
                      type="text" 
                      value={patientData.name}
                      onChange={(e) => setPatientData({...patientData, name: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-med-slate-300 text-sm focus:outline-none focus:border-med-teal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-med-slate-700 mb-1">Date of Birth</label>
                    <input 
                      type="date" 
                      value={patientData.dob}
                      onChange={(e) => setPatientData({...patientData, dob: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-med-slate-300 text-sm focus:outline-none focus:border-med-teal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-med-slate-700 mb-1">Phone Number</label>
                    <input 
                      type="text" 
                      value={patientData.phone}
                      onChange={(e) => setPatientData({...patientData, phone: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-med-slate-300 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-med-slate-700 mb-1">Prescribing Doctor / NPI</label>
                    <input 
                      type="text" 
                      value={patientData.prescriber}
                      onChange={(e) => setPatientData({...patientData, prescriber: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-med-slate-300 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-med-slate-700 mb-1">Delivery Address</label>
                  <input 
                    type="text" 
                    value={patientData.address}
                    onChange={(e) => setPatientData({...patientData, address: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-med-slate-300 text-sm"
                  />
                </div>
              </div>

              {/* Patient Acknowledgement */}
              <div className="bg-med-slate-50 p-4 rounded-2xl border border-med-slate-200 text-xs text-med-slate-600 flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-med-teal flex-shrink-0 mt-0.5" />
                <p>MedShare will verify this prescription with your prescribing doctor's office before dispatching temperature-tracked medication.</p>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 px-6 text-base font-medium text-white bg-med-teal hover:bg-med-teal-hover rounded-xl shadow-xs transition-colors"
              >
                Submit Prescription Request
              </button>

            </form>
          ) : (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 bg-med-mint-light text-med-mint rounded-full flex items-center justify-center mx-auto border border-med-mint/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-medium text-med-navy">Prescription Submitted for Review</h2>
              <p className="text-sm text-med-slate-600 max-w-md mx-auto">
                Request #RX-9921 for <strong className="text-med-navy">{patientData.medicationRequested}</strong> has been sent to our PharmD verification desk. You will receive an SMS update at {patientData.phone}.
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
