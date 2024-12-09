import React from 'react';
import { Building2, ChevronRight } from 'lucide-react';
import type { Company } from '../types/company';

interface CompanyCardProps {
  company: Company;
  onClick: (company: Company) => void;
}

export function CompanyCard({ company, onClick }: CompanyCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
      onClick={() => onClick(company)}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={company.imageUrl} 
          alt={company.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <Building2 className="h-5 w-5 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{company.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {company.industries.slice(0, 3).map((industry, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
            >
              {industry}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm">
          <div>
            <p className="text-gray-500">Founded: {company.founded}</p>
            <p className="text-gray-500">Revenue: {company.financials.revenue}</p>
          </div>
          <ChevronRight className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}