import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, CheckCircle2, ArrowLeft, PackageCheck, AlertCircle } from 'lucide-react';

export default function MedicineInventory({ onBack, onRequestMed }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const medications = [
    {
      id: 'MED-101',
      name: 'Atorvastatin Calcium',
      dosage: '20 mg',
      category: 'Cardiovascular',
      form: 'Blister Pack',
      availableQty: '450 Tabs',
      expiry: '2027-11',
      status: 'Pharmacist Verified',
      lot: 'TX-884920'
    },
    {
      id: 'MED-102',
      name: 'Metformin Hydrochloride',
      dosage: '500 mg',
      category: 'Diabetes / Metabolic',
      form: 'Unopened Bottle',
      availableQty: '320 Tabs',
      expiry: '2027-08',
      status: 'Pharmacist Verified',
      lot: 'TX-901238'
    },
    {
      id: 'MED-103',
      name: 'Lisopril (ACE Inhibitor)',
      dosage: '10 mg',
      category: 'Cardiovascular',
      form: 'Blister Pack',
      availableQty: '180 Tabs',
      expiry: '2026-12',
      status: 'Pharmacist Verified',
      lot: 'CA-102938'
    },
    {
      id: 'MED-104',
      name: 'Albuterol Sulfate HFA Inhaler',
      dosage: '90 mcg/actuation',
      category: 'Respiratory',
      form: 'Foil Sealed Box',
      availableQty: '40 Units',
      expiry: '2027-05',
      status: 'Pharmacist Verified',
      lot: 'NY-448201'
    },
    {
      id: 'MED-105',
      name: 'Levothyroxine Sodium',
      dosage: '75 mcg',
      category: 'Endocrine',
      form: 'Unopened Bottle',
      availableQty: '210 Tabs',
      expiry: '2027-09',
      status: 'Pharmacist Verified',
      lot: 'FL-991023'
    },
    {
      id: 'MED-106',
      name: 'Amoxicillin Trihydrate',
      dosage: '500 mg',
      category: 'Antibiotics',
      form: 'Blister Pack',
      availableQty: '150 Caps',
      expiry: '2026-11',
      status: 'Pharmacist Verified',
      lot: 'OH-773019'
    }
  ];

  const categories = ['All', 'Cardiovascular', 'Diabetes / Metabolic', 'Respiratory', 'Endocrine', 'Antibiotics'];

  const filteredMeds = medications.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.dosage.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'All' || m.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen bg-med-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation back */}
        <button 
          onClick={onBack} 
          className="inline-flex items-center text-sm font-medium text-med-slate-600 hover:text-med-navy mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Landing Page
        </button>

        {/* Page Title Header */}
        <div className="bg-white rounded-3xl border border-med-slate-200 p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-med-teal text-xs font-semibold uppercase tracking-wider bg-med-teal-light px-3 py-1 rounded-full border border-med-teal/20 mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Live Accredited Catalog</span>
              </div>
              <h1 className="text-3xl font-medium text-med-navy">Verified Medicine Inventory</h1>
              <p className="text-sm text-med-slate-600 font-normal mt-1">
                Browse unexpired, pharmacist-inspected medications currently in stock for verified patient request.
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono bg-med-slate-100 text-med-navy px-3 py-1.5 rounded-lg border border-med-slate-200">
                Total Available Batches: <strong className="text-med-teal">1,420</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-med-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search medication name or dosage..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-med-slate-300 text-sm bg-white focus:outline-none focus:border-med-teal"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${selectedCategory === cat ? 'bg-med-navy text-white' : 'bg-white text-med-slate-600 border border-med-slate-200 hover:bg-med-slate-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Inventory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMeds.map((med) => (
            <div 
              key={med.id}
              className="bg-white border border-med-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-med-teal/40 transition-all shadow-xs"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-med-slate-500 bg-med-slate-100 px-2.5 py-1 rounded-md">
                    {med.id}
                  </span>
                  <span className="text-xs font-medium text-med-mint bg-med-mint-light px-2.5 py-1 rounded-full border border-med-mint/20 flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> {med.status}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-med-navy">{med.name}</h3>
                  <p className="text-xs font-semibold text-med-teal mt-0.5">{med.dosage} • {med.form}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs bg-med-slate-50 p-3 rounded-xl border border-med-slate-200/80">
                  <div>
                    <span className="text-[10px] text-med-slate-500 block">AVAILABLE QTY</span>
                    <span className="font-mono text-med-navy font-medium">{med.availableQty}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-med-slate-500 block">EXPIRATION</span>
                    <span className="font-mono text-med-navy font-medium">{med.expiry}</span>
                  </div>
                </div>

                <div className="text-[11px] text-med-slate-500 flex items-center justify-between border-t border-med-slate-100 pt-3">
                  <span>Category: {med.category}</span>
                  <span className="font-mono">Lot: {med.lot}</span>
                </div>

              </div>

              <div className="pt-5 mt-2">
                <button 
                  onClick={onRequestMed}
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 text-xs font-medium text-white bg-med-teal hover:bg-med-teal-hover rounded-xl shadow-xs transition-colors"
                >
                  Request with Prescription
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
