import React from 'react';
import { X, Building2, Trophy, Globe2, Heart } from 'lucide-react';
import type { Company } from '../types/company';

interface CompanyModalProps {
  company: Company;
  onClose: () => void;
}

export function CompanyModal({ company, onClose }: CompanyModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{company.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <img
            src={company.imageUrl}
            alt={company.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Company Overview</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Founded:</span> {company.founded}</p>
                  <p><span className="font-medium">Founder:</span> {company.founder}</p>
                  <p><span className="font-medium">Headquarters:</span> {company.headquarters}</p>
                  <p><span className="font-medium">Stock Symbol:</span> NSE: {company.stockSymbol.nse}, BSE: {company.stockSymbol.bse}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Financial Information</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Revenue:</span> {company.financials.revenue}</p>
                  <p><span className="font-medium">Net Income:</span> {company.financials.netIncome}</p>
                  <p><span className="font-medium">Market Cap:</span> {company.financials.marketCap}</p>
                  <p><span className="font-medium">Employees:</span> {company.financials.employees}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Leadership</h3>
                {company.leaders.map((leader, index) => (
                  <div key={index} className="flex items-start space-x-3 mb-3">
                    <img
                      src={leader.imageUrl}
                      alt={leader.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{leader.name}</p>
                      <p className="text-sm text-gray-600">{leader.role}</p>
                      <p className="text-sm text-gray-500">Since {leader.since}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Building2 className="mr-2" /> About
              </h3>
              <p className="text-gray-700">{company.description}</p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3">History</h3>
              <p className="text-gray-700 mb-4">{company.history}</p>
              <div className="space-y-3">
                <h4 className="font-medium">Key Milestones</h4>
                {company.milestones.map((milestone, index) => (
                  <div key={index} className="flex">
                    <span className="font-medium w-20">{milestone.year}</span>
                    <span className="text-gray-700">{milestone.description}</span>
                  </div>
                ))}
              </div>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Globe2 className="mr-2" /> Global Presence & Operations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Industries</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {company.industries.map((industry, index) => (
                      <li key={index}>{industry}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Global Presence</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {company.globalPresence.map((country, index) => (
                      <li key={index}>{country}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Trophy className="mr-2" /> Recognition
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {company.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Heart className="mr-2" /> Corporate Social Responsibility
              </h3>
              <p className="text-gray-700">{company.csr}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}