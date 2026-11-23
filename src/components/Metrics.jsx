import React from 'react';
import { Pill, Users, Send, HeartHandshake, TrendingUp } from 'lucide-react';

export default function Metrics() {
  const stats = [
    {
      id: 'pills',
      label: 'Pills Saved',
      value: '148,500+',
      trend: '+12.4% this month',
      desc: 'High-value maintenance medications rescued from wastage',
      icon: Pill,
    },
    {
      id: 'families',
      label: 'Families Helped',
      value: '12,400+',
      trend: 'Zero-cost access',
      desc: 'Patients provided with verified prescription treatments',
      icon: Users,
    },
    {
      id: 'dispatched',
      label: 'Medicines Dispatched',
      value: '35,200+',
      trend: '100% temperature tracked',
      desc: 'Direct shipments fulfilled via verified partner pharmacies',
      icon: Send,
    },
    {
      id: 'donors',
      label: 'Active Donors',
      value: '8,900+',
      trend: 'Individual & Institutional',
      desc: 'Accredited clinics, pharmacies, and verified individuals',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="metrics" className="py-16 md:py-24 bg-white border-b border-med-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-med-teal text-xs font-semibold uppercase tracking-wider mb-2">
              <TrendingUp className="w-4 h-4" />
              <span>Real-Time Audit Metrics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-med-navy tracking-tight">
              Measurable clinical & community impact
            </h2>
          </div>
          <p className="text-med-slate-600 text-sm md:text-base font-normal max-w-md mt-3 md:mt-0">
            Every rescued dose is verified, logged, and tracked to prevent pharmaceutical waste and alleviate healthcare expenses.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.id}
                className="bg-med-slate-50 border border-med-slate-200 rounded-2xl p-6 transition-all hover:border-med-teal/30 hover:bg-white hover:shadow-xs group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-med-slate-200 flex items-center justify-center text-med-teal group-hover:bg-med-teal group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-[11px] font-medium text-med-teal bg-med-teal-light px-2.5 py-1 rounded-full border border-med-teal/20">
                    {stat.trend}
                  </span>
                </div>

                {/* Mint Accent Number */}
                <div className="text-3xl sm:text-4xl font-semibold text-med-mint tracking-tight font-sans mb-1.5">
                  {stat.value}
                </div>

                <h3 className="text-base font-medium text-med-navy mb-1.5">{stat.label}</h3>
                <p className="text-xs text-med-slate-600 font-normal leading-relaxed">{stat.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
