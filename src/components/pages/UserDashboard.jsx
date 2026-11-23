import React from 'react';
import { User, Package, FileText, CheckCircle2, Clock, Truck, ArrowLeft, ShieldCheck, Download } from 'lucide-react';

export default function UserDashboard({ onBack, onNewDonation, onNewRequest }) {
  const donations = [
    {
      id: 'DON-9921',
      medName: 'Atorvastatin 20mg (90 Tabs)',
      date: '2026-08-28',
      status: 'Verified & Tax Receipt Issued',
      value: '$142.00 Tax Value'
    },
    {
      id: 'DON-9904',
      medName: 'Metformin 500mg (60 Tabs)',
      date: '2026-07-14',
      status: 'Dispatched to Patient',
      value: '$68.00 Tax Value'
    }
  ];

  const requests = [
    {
      id: 'REQ-4482',
      medName: 'Lisinopril 10mg (30 Tabs)',
      rxNumber: 'RX-884910',
      date: '2026-09-02',
      status: 'Out for Delivery (UPS #9920192)',
      eta: 'Tomorrow by 3 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-med-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <button 
          onClick={onBack} 
          className="inline-flex items-center text-sm font-medium text-med-slate-600 hover:text-med-navy mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Landing Page
        </button>

        {/* User Profile Banner */}
        <div className="bg-white rounded-3xl border border-med-slate-200 p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-med-teal/10 text-med-teal flex items-center justify-center border border-med-teal/20 text-xl font-medium">
                SJ
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-medium text-med-navy">Sarah Jenkins</h1>
                  <span className="text-xs font-medium text-med-mint bg-med-mint-light px-2.5 py-0.5 rounded-full border border-med-mint/20">
                    Verified Donor & Patient
                  </span>
                </div>
                <p className="text-xs text-med-slate-500 font-normal mt-0.5">
                  Member ID: MS-USR-88492 • sarah.jenkins@example.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button 
                onClick={onNewDonation}
                className="px-4 py-2.5 text-xs font-medium text-white bg-med-teal hover:bg-med-teal-hover rounded-xl shadow-xs transition-colors"
              >
                + New Donation
              </button>
              <button 
                onClick={onNewRequest}
                className="px-4 py-2.5 text-xs font-medium text-med-navy bg-white border border-med-slate-300 hover:bg-med-slate-100 rounded-xl transition-colors"
              >
                + Request Medicine
              </button>
            </div>

          </div>
        </div>

        {/* Dashboard Activity Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Donations Section */}
          <div className="bg-white border border-med-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-med-slate-200">
              <div className="flex items-center space-x-2">
                <Package className="w-5 h-5 text-med-teal" />
                <h3 className="text-lg font-medium text-med-navy">Your Medicine Donations</h3>
              </div>
              <span className="text-xs font-mono text-med-slate-400">Total Given: 2 Batches</span>
            </div>

            <div className="space-y-4">
              {donations.map((don) => (
                <div key={don.id} className="p-4 bg-med-slate-50 rounded-2xl border border-med-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-med-slate-500">{don.id} • {don.date}</span>
                    <span className="text-med-mint font-medium bg-white px-2 py-0.5 rounded-md border border-med-mint/20">{don.status}</span>
                  </div>
                  <h4 className="text-sm font-medium text-med-navy">{don.medName}</h4>
                  <div className="flex items-center justify-between pt-2 text-xs border-t border-med-slate-200/80">
                    <span className="text-med-teal font-medium">{don.value}</span>
                    <button className="text-med-navy hover:underline inline-flex items-center text-[11px]">
                      <Download className="w-3 h-3 mr-1" /> Download 501(c)(3) Receipt
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Requested Medicine Section */}
          <div className="bg-white border border-med-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-med-slate-200">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-med-navy" />
                <h3 className="text-lg font-medium text-med-navy">Requested Prescription Orders</h3>
              </div>
              <span className="text-xs font-mono text-med-slate-400">Active Requests: 1</span>
            </div>

            <div className="space-y-4">
              {requests.map((req) => (
                <div key={req.id} className="p-4 bg-med-slate-50 rounded-2xl border border-med-slate-200 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-med-slate-500">{req.id} • Rx #{req.rxNumber}</span>
                    <span className="text-med-teal font-medium bg-med-teal-light px-2 py-0.5 rounded-md border border-med-teal/20">{req.status}</span>
                  </div>
                  <h4 className="text-sm font-medium text-med-navy">{req.medName}</h4>
                  <div className="flex items-center justify-between pt-2 text-xs border-t border-med-slate-200/80">
                    <span className="text-med-slate-600">ETA: {req.eta}</span>
                    <span className="text-med-teal font-medium flex items-center">
                      <Truck className="w-3.5 h-3.5 mr-1" /> Track Courier Package
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
