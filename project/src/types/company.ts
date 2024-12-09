export interface Leader {
  name: string;
  role: string;
  since: string;
  imageUrl: string;
  bio: string;
}

export interface Milestone {
  year: string;
  description: string;
}

export interface FinancialInfo {
  revenue: string;
  netIncome: string;
  marketCap: string;
  employees: string;
}

export interface Company {
  id: number;
  name: string;
  founded: string;
  founder: string;
  headquarters: string;
  description: string;
  history: string;
  imageUrl: string;
  leaders: Leader[];
  milestones: Milestone[];
  financials: FinancialInfo;
  subsidiaries: string[];
  industries: string[];
  stockSymbol: {
    nse: string;
    bse: string;
  };
  globalPresence: string[];
  awards: string[];
  csr: string;
}