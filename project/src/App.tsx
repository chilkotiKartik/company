import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import { companies } from './data/companies';
import { CompanyCard } from './components/CompanyCard';
import { CompanyModal } from './components/CompanyModal';
import { Logo } from './components/Logo';
import type { Company } from './types/company';

function App() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">
                Top 10 Indian Companies
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              onClick={setSelectedCompany}
            />
          ))}
        </div>
      </main>

      {selectedCompany && (
        <CompanyModal
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Top Companies. All rights reserved.</p>
          <p>
            Built with <span className="text-red-500">♥</span> by Kartik Chilkoti.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
