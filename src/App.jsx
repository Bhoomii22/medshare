import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import HowItWorks from './components/HowItWorks';
import DualValProp from './components/DualValProp';
import PolicyTeaser from './components/PolicyTeaser';
import Footer from './components/Footer';

// Sub-pages
import DonationWizard from './components/pages/DonationWizard';
import MedicineInventory from './components/pages/MedicineInventory';
import PrescriptionFlow from './components/pages/PrescriptionFlow';
import PharmacistDashboard from './components/pages/PharmacistDashboard';
import AcceptancePolicy from './components/pages/AcceptancePolicy';
import UserDashboard from './components/pages/UserDashboard';

export default function App() {
  const [activePage, setActivePage] = useState('landing');

  const handleNavigate = (pageId, sectionId) => {
    setActivePage(pageId);
    if (sectionId && pageId === 'landing') {
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-med-slate-50 flex flex-col justify-between text-med-navy font-sans antialiased">
      
      {/* Top Navbar */}
      <Navbar activePage={activePage} setActivePage={handleNavigate} />

      {/* Main Dynamic View Content */}
      <main className="flex-grow">
        {activePage === 'landing' && (
          <div>
            <Hero 
              onDonateClick={() => handleNavigate('donation')}
              onRequestClick={() => handleNavigate('prescription')}
            />
            <Metrics />
            <HowItWorks />
            <DualValProp 
              onDonorCTA={() => handleNavigate('donation')}
              onPatientCTA={() => handleNavigate('inventory')}
            />
            <PolicyTeaser 
              onViewFullPolicy={() => handleNavigate('policy')}
            />
          </div>
        )}

        {activePage === 'donation' && (
          <DonationWizard onBack={() => handleNavigate('landing')} />
        )}

        {activePage === 'inventory' && (
          <MedicineInventory 
            onBack={() => handleNavigate('landing')}
            onRequestMed={() => handleNavigate('prescription')}
          />
        )}

        {activePage === 'prescription' && (
          <PrescriptionFlow onBack={() => handleNavigate('landing')} />
        )}

        {activePage === 'pharmacist' && (
          <PharmacistDashboard onBack={() => handleNavigate('landing')} />
        )}

        {activePage === 'policy' && (
          <AcceptancePolicy onBack={() => handleNavigate('landing')} />
        )}

        {activePage === 'dashboard' && (
          <UserDashboard 
            onBack={() => handleNavigate('landing')}
            onNewDonation={() => handleNavigate('donation')}
            onNewRequest={() => handleNavigate('inventory')}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
