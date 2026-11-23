import React, { useState } from 'react';
import { Stethoscope, CheckCircle2, XCircle, AlertTriangle, ShieldCheck, ArrowLeft, Filter, Search, FileText } from 'lucide-react';

export default function PharmacistDashboard({ onBack }) {
  const [queue, setQueue] = useState([
    {
      id: 'BATCH-8942',
      medName: 'Atorvastatin Calcium 20mg',
      qty: '90 Tablets',
      expiry: '2027-11',
      ndc: '00093-1048-01',
      donor: 'St. Jude Community Pharmacy',
      tempLog: '21.2°C (Optimal)',
      sealStatus: 'Intact Blister Pack',
      status: 'Pending Verification'
    },
    {
      id: 'BATCH-8943',
      medName: 'Metformin HCl 500mg',
      qty: '120 Tablets',
      expiry: '2027-08',
      ndc: '50111-0432-02',
      donor: 'Apex Healthcare Clinic',
      tempLog: '20.8°C (Optimal)',
      sealStatus: 'Unopened Bottle Seal',
      status: 'Pending Verification'
    },
    {
      id: 'BATCH-8944',
      medName: 'Albuterol Inhaler 90mcg',
      qty: '10 Inhalers',
      expiry: '2026-12',
      ndc: '00085-1132-01',
      donor: 'Dr. Evelyn Vance, MD',
      tempLog: '22.0°C (Optimal)',
      sealStatus: 'Foil Sealed Box',
      status: 'Pending Verification'
    }
  ]);

  const [activeBatch, setActiveBatch] = useState(queue[0]);

  const handleAction = (batchId, action) => {
    setQueue(queue.map(b => b.id === batchId ? { ...b, status: action === 'approve' ? 'Approved & Logged' : 'Rejected' } : b));
    if (activeBatch && activeBatch.id === batchId) {
      setActiveBatch({ ...activeBatch, status: action === 'approve' ? 'Approved & Logged' : 'Rejected' });
    }
  };

  return (
    <div className="min-h-screen bg-med-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <button 
          onClick={onBack} 
          className="inline-flex items-center text-sm font-medium text-med-slate-600 hover:text-med-navy mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Landing Page
        </button>

        {/* Dashboard Header */}
        <div className="bg-med-navy text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-med-teal flex items-center justify-center text-white">
                <Stethoscope className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="text-xs font-mono text-med-mint bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                  PharmD Console • License #TX-884920
                </span>
                <h1 className="text-2xl font-medium text-white mt-1">Pharmacist Verification Dashboard</h1>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs">
              <span className="bg-white/10 px-3 py-1.5 rounded-xl text-med-slate-200">
                Pending Queue: <strong className="text-med-mint font-mono">{queue.filter(q => q.status === 'Pending Verification').length}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Console Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Queue List Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-med-navy">Incoming Batch Queue</h3>
            
            <div className="space-y-3">
              {queue.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveBatch(item)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${activeBatch.id === item.id ? 'bg-white border-med-teal shadow-xs' : 'bg-med-slate-100/70 border-med-slate-200 hover:bg-white'}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-med-navy font-medium">{item.id}</span>
                    <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${item.status === 'Approved & Logged' ? 'bg-med-mint-light text-med-mint border-med-mint/30' : item.status === 'Rejected' ? 'bg-red-50 text-red-600 border-red-200' : 'bg-med-teal-light text-med-teal border-med-teal/20'}`}>
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-med-navy">{item.medName}</h4>
                  <p className="text-xs text-med-slate-500 font-normal mt-1">{item.donor} • {item.qty}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Active Inspection Desk Column */}
          <div className="lg:col-span-7">
            {activeBatch && (
              <div className="bg-white border border-med-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
                
                <div className="flex items-center justify-between pb-4 border-b border-med-slate-200">
                  <div>
                    <span className="text-xs font-mono text-med-slate-500">Inspecting Lot: {activeBatch.id}</span>
                    <h2 className="text-xl font-medium text-med-navy">{activeBatch.medName}</h2>
                  </div>
                  <span className="text-xs font-mono bg-med-slate-100 px-3 py-1 rounded-lg text-med-navy border border-med-slate-200">
                    NDC: {activeBatch.ndc}
                  </span>
                </div>

                {/* Audit Grid Details */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-med-slate-50 p-3 rounded-xl border border-med-slate-200">
                    <span className="text-[10px] text-med-slate-500 block">DONOR SOURCE</span>
                    <span className="font-medium text-med-navy">{activeBatch.donor}</span>
                  </div>
                  <div className="bg-med-slate-50 p-3 rounded-xl border border-med-slate-200">
                    <span className="text-[10px] text-med-slate-500 block">TEMPERATURE LOG</span>
                    <span className="font-mono text-med-teal font-medium">{activeBatch.tempLog}</span>
                  </div>
                  <div className="bg-med-slate-50 p-3 rounded-xl border border-med-slate-200">
                    <span className="text-[10px] text-med-slate-500 block">EXPIRATION</span>
                    <span className="font-mono text-med-navy font-medium">{activeBatch.expiry}</span>
                  </div>
                </div>

                {/* Photo Verification Panel Simulation */}
                <div className="bg-med-slate-50 border border-med-slate-200 rounded-2xl p-4 text-center space-y-3">
                  <div className="flex items-center justify-between text-xs font-medium text-med-navy px-1">
                    <span>Batch Packaging Photo Proof</span>
                    <span className="text-med-teal font-mono">{activeBatch.sealStatus}</span>
                  </div>
                  <div className="h-40 bg-med-slate-200/70 rounded-xl flex items-center justify-center text-med-slate-500 text-xs font-mono border border-med-slate-300">
                    [ High-Resolution Packaging & Serial Lot Photo View ]
                  </div>
                </div>

                {/* Verification Decision Bar */}
                <div className="pt-4 border-t border-med-slate-200 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-med-navy">PharmD Verification Action</p>
                  
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => handleAction(activeBatch.id, 'approve')}
                      disabled={activeBatch.status !== 'Pending Verification'}
                      className="flex-1 inline-flex items-center justify-center py-3 px-4 text-xs font-medium text-white bg-med-teal hover:bg-med-teal-hover disabled:opacity-50 rounded-xl transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Approve & Certificate Seal
                    </button>

                    <button 
                      onClick={() => handleAction(activeBatch.id, 'reject')}
                      disabled={activeBatch.status !== 'Pending Verification'}
                      className="flex-1 inline-flex items-center justify-center py-3 px-4 text-xs font-medium text-med-navy bg-white border border-med-slate-300 hover:bg-med-slate-100 disabled:opacity-50 rounded-xl transition-colors"
                    >
                      <XCircle className="w-4 h-4 mr-2 text-red-500" /> Flag / Reject Batch
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
