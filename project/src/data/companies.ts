import type { Company } from '../types/company';

export const companies: Company[] = [
  {
    id: 1,
    name: "Reliance Industries",
    founded: "1966",
    founder: "Dhirubhai Ambani",
    headquarters: "Mumbai, Maharashtra",
    description: "India's largest private sector company, pioneering in energy, petrochemicals, retail, telecommunications, and digital services. The company has transformed India's retail and telecom landscape through its subsidiaries Reliance Retail and Jio Platforms.",
    history: "Founded by Dhirubhai Ambani in 1966 as a small textile trading company, Reliance Industries began its journey in Mumbai's textile markets. The company's first major facility was established in Naroda, Gujarat. After going public in 1977, Reliance expanded rapidly into petrochemicals, refining, and oil & gas exploration. The company saw a strategic transformation under Mukesh Ambani's leadership, venturing into telecommunications with Jio and organized retail, becoming India's most valuable company.",
    imageUrl: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&w=1600",
    leaders: [
      {
        name: "Mukesh Ambani",
        role: "Chairman & Managing Director",
        since: "2002",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800",
        bio: "Mukesh Ambani has transformed Reliance from a textile and petrochemical company into a global conglomerate. Under his leadership, Reliance executed the world's largest start-up in telecom with Jio."
      }
    ],
    milestones: [
      {
        year: "1966",
        description: "Company founded as Reliance Commercial Corporation"
      },
      {
        year: "1977",
        description: "Initial Public Offering (IPO)"
      },
      {
        year: "2002",
        description: "Mukesh Ambani becomes Chairman after Dhirubhai Ambani's death"
      },
      {
        year: "2016",
        description: "Launch of Jio telecommunications service"
      }
    ],
    financials: {
      revenue: "$92 billion (2023)",
      netIncome: "$8.3 billion (2023)",
      marketCap: "$200 billion (2023)",
      employees: "236,334"
    },
    subsidiaries: [
      "Jio Platforms",
      "Reliance Retail",
      "Reliance Petroleum",
      "Reliance Life Sciences"
    ],
    industries: [
      "Oil & Gas",
      "Petrochemicals",
      "Retail",
      "Telecommunications",
      "Digital Services"
    ],
    stockSymbol: {
      nse: "RELIANCE",
      bse: "500325"
    },
    globalPresence: [
      "India",
      "United States",
      "United Kingdom",
      "UAE",
      "Singapore"
    ],
    awards: [
      "World's Most Admired Companies - Fortune",
      "India's Most Valuable Company",
      "World's Largest Oil Refining Complex"
    ],
    csr: "Through Reliance Foundation, the company focuses on rural transformation, education, healthcare, sports, disaster response, and arts & culture. The foundation has impacted over 51 million lives across India."
  },
  {
    id: 2,
    name: "Tata Consultancy Services",
    founded: "1968",
    founder: "F.C. Kohli",
    headquarters: "Mumbai, Maharashtra",
    description: "India's largest IT services company and a global leader in digital transformation, consulting, and business solutions. TCS partners with many of the world's largest businesses in their transformation journeys.",
    history: "Established in 1968 as a division of Tata Sons, TCS was a pioneer in India's IT services industry. Under F.C. Kohli's visionary leadership, the company introduced computers to India and helped computerize the country's banking operations. TCS became the first Indian IT company to enter the bioinformatics market and has consistently led technological innovation in India. The company went public in 2004 in what was then India's largest IPO.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600",
    leaders: [
      {
        name: "K Krithivasan",
        role: "CEO & Managing Director",
        since: "2023",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800",
        bio: "K Krithivasan has been with TCS for over 34 years, leading global operations and driving digital transformation initiatives."
      }
    ],
    milestones: [
      {
        year: "1968",
        description: "Founded as part of Tata Sons"
      },
      {
        year: "1981",
        description: "Established India's first dedicated software research center"
      },
      {
        year: "2004",
        description: "Initial Public Offering"
      },
      {
        year: "2018",
        description: "Became first Indian IT company to reach $100 billion market cap"
      }
    ],
    financials: {
      revenue: "$27.9 billion (2023)",
      netIncome: "$5.7 billion (2023)",
      marketCap: "$170 billion (2023)",
      employees: "614,000"
    },
    subsidiaries: [
      "TCS Financial Solutions",
      "CMC Limited",
      "TCS eServe",
      "Diligenta"
    ],
    industries: [
      "IT Services",
      "Consulting",
      "Digital Solutions",
      "Business Process Services"
    ],
    stockSymbol: {
      nse: "TCS",
      bse: "532540"
    },
    globalPresence: [
      "India",
      "United States",
      "United Kingdom",
      "Singapore",
      "Australia"
    ],
    awards: [
      "Fortune World's Most Admired Companies",
      "Top Employer Global 2023",
      "Forbes World's Best Employers"
    ],
    csr: "TCS's CSR initiatives focus on education, skill development, and digital empowerment. The company's Adult Literacy Program has benefited over 500,000 people, while its goIT program promotes STEM education among students."
  },
  {
    id: 3,
    name: "HDFC Bank",
    founded: "1994",
    founder: "Hasmukhbhai Parekh",
    headquarters: "Mumbai, Maharashtra",
    description: "India's largest private sector bank by assets, providing innovative financial products and services to retail and corporate customers. Known for its digital banking initiatives and strong financial performance.",
    history: "HDFC Bank was established in 1994 as a subsidiary of Housing Development Finance Corporation. It was among the first to receive approval from the Reserve Bank of India (RBI) to set up a private sector bank as part of the RBI's liberalization policies. The bank has grown through a combination of organic growth and strategic acquisitions, including the merger with parent HDFC Ltd in 2023.",
    imageUrl: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=1600",
    leaders: [
      {
        name: "Sashidhar Jagdishan",
        role: "CEO & Managing Director",
        since: "2020",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800",
        bio: "Sashidhar Jagdishan has been with HDFC Bank since 1996 and has played a crucial role in the bank's growth story."
      }
    ],
    milestones: [
      {
        year: "1994",
        description: "Establishment of HDFC Bank"
      },
      {
        year: "1995",
        description: "Initial Public Offering"
      },
      {
        year: "2008",
        description: "Merger with Centurion Bank of Punjab"
      },
      {
        year: "2023",
        description: "Merger with HDFC Ltd"
      }
    ],
    financials: {
      revenue: "$23.5 billion (2023)",
      netIncome: "$5.1 billion (2023)",
      marketCap: "$172 billion (2023)",
      employees: "141,579"
    },
    subsidiaries: [
      "HDFC Securities",
      "HDB Financial Services",
      "HDFC Sales"
    ],
    industries: [
      "Banking",
      "Financial Services",
      "Insurance",
      "Asset Management"
    ],
    stockSymbol: {
      nse: "HDFCBANK",
      bse: "500180"
    },
    globalPresence: [
      "India",
      "Bahrain",
      "Hong Kong",
      "Dubai",
      "Singapore"
    ],
    awards: [
      "Best Bank in India - Euromoney",
      "Best Digital Bank - Asiamoney",
      "Best Private Bank in India - PWM/The Banker"
    ],
    csr: "HDFC Bank's Parivartan initiative focuses on rural development, education, skill training, healthcare, and financial literacy. The bank has impacted over 9 million lives through various social initiatives."
  },
  {
    id: 4,
    name: "Infosys",
    founded: "1981",
    founder: "N. R. Narayana Murthy",
    headquarters: "Bangalore, Karnataka",
    description: "A global leader in next-generation digital services and consulting, helping clients navigate their digital transformation. Known for its innovative solutions and strong corporate governance.",
    history: "Started by seven engineers with just $250 in Pune, Infosys has grown into one of India's largest IT companies. The company pioneered the Global Delivery Model and became the first Indian company to be listed on NASDAQ. Infosys has been instrumental in putting Indian IT services on the global map.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600",
    leaders: [
      {
        name: "Salil Parekh",
        role: "CEO & Managing Director",
        since: "2018",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800",
        bio: "Salil Parekh has led Infosys through its digital transformation journey and strengthened its industry leadership."
      }
    ],
    milestones: [
      {
        year: "1981",
        description: "Founded in Pune"
      },
      {
        year: "1993",
        description: "IPO in India"
      },
      {
        year: "1999",
        description: "First Indian company listed on NASDAQ"
      },
      {
        year: "2017",
        description: "Launched Infosys Digital Innovation Platform"
      }
    ],
    financials: {
      revenue: "$18.2 billion (2023)",
      netIncome: "$3.9 billion (2023)",
      marketCap: "$85 billion (2023)",
      employees: "335,186"
    },
    subsidiaries: [
      "EdgeVerve Systems",
      "Infosys BPM",
      "Infosys Consulting",
      "Panaya"
    ],
    industries: [
      "IT Services",
      "Consulting",
      "Software Development",
      "Digital Transformation"
    ],
    stockSymbol: {
      nse: "INFY",
      bse: "500209"
    },
    globalPresence: [
      "India",
      "United States",
      "Europe",
      "Australia",
      "China"
    ],
    awards: [
      "World's Most Ethical Companies - Ethisphere Institute",
      "Top Employer Global Certification",
      "Forbes Best Regarded Companies"
    ],
    csr: "Through the Infosys Foundation, the company focuses on education, healthcare, rural development, and arts & culture. The foundation has implemented numerous programs benefiting millions across India."
  },
  {
    id: 5,
    name: "ICICI Bank",
    founded: "1994",
    founder: "Industrial Credit and Investment Corporation of India",
    headquarters: "Mumbai, Maharashtra",
    description: "One of India's leading private sector banks offering a wide range of banking products and financial services to corporate and retail customers through various delivery channels.",
    history: "ICICI Bank was originally promoted in 1994 by ICICI Limited, an Indian financial institution. The bank pioneered retail banking in India and was instrumental in driving technology adoption in Indian banking. In 2002, it became the first Indian bank to list on the NYSE.",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1600",
    leaders: [
      {
        name: "Sandeep Bakhshi",
        role: "CEO & Managing Director",
        since: "2018",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800",
        bio: "Under Sandeep Bakhshi's leadership, ICICI Bank has strengthened its retail franchise and digital capabilities."
      }
    ],
    milestones: [
      {
        year: "1994",
        description: "Incorporation of ICICI Bank"
      },
      {
        year: "1998",
        description: "First Indian company to list on NYSE"
      },
      {
        year: "2002",
        description: "Merger with parent ICICI Ltd"
      },
      {
        year: "2020",
        description: "Launch of digital banking platform iMobile Pay"
      }
    ],
    financials: {
      revenue: "$20.5 billion (2023)",
      netIncome: "$4.2 billion (2023)",
      marketCap: "$75 billion (2023)",
      employees: "103,010"
    },
    subsidiaries: [
      "ICICI Prudential Life Insurance",
      "ICICI Lombard General Insurance",
      "ICICI Securities",
      "ICICI Venture"
    ],
    industries: [
      "Banking",
      "Insurance",
      "Investment Banking",
      "Asset Management"
    ],
    stockSymbol: {
      nse: "ICICIBANK",
      bse: "532174"
    },
    globalPresence: [
      "India",
      "Singapore",
      "Hong Kong",
      "Dubai",
      "New York"
    ],
    awards: [
      "Best Digital Bank - Global Finance",
      "Best Private Bank in India - Asian Private Banker",
      "Best Bank in India - FinanceAsia"
    ],
    csr: "ICICI Foundation focuses on skill development, rural livelihood, and social & environmental initiatives. The foundation has trained over 580,000 individuals in various vocational skills."
  },
  {
    id: 6,
    name: "Hindustan Unilever",
    founded: "1933",
    founder: "Lever Brothers",
    headquarters: "Mumbai, Maharashtra",
    description: "India's largest FMCG company with a heritage of over 85 years, touching the lives of two out of three Indians with its wide range of home care, personal care, and food & refreshment products.",
    history: "Started as Lever Brothers India Limited in 1933, the company merged with Hindustan Vanaspati Manufacturing Company and United Traders Limited to form HUL in 1956. The company has been at the forefront of introducing innovative products and sustainable business practices in India.",
    imageUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1600",
    leaders: [
      {
        name: "Rohit Jawa",
        role: "CEO & Managing Director",
        since: "2023",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800",
        bio: "Rohit Jawa brings extensive FMCG experience across markets and has been instrumental in driving HUL's digital transformation."
      }
    ],
    milestones: [
      {
        year: "1933",
        description: "Establishment in India"
      },
      {
        year: "1956",
        description: "Formation of Hindustan Lever Limited"
      },
      {
        year: "2007",
        description: "Launch of Project Shakti for rural women empowerment"
      },
      {
        year: "2020",
        description: "Merger with GSK Consumer Healthcare"
      }
    ],
    financials: {
      revenue: "$7.2 billion (2023)",
      netIncome: "$1.3 billion (2023)",
      marketCap: "$78 billion (2023)",
      employees: "21,000"
    },
    subsidiaries: [
      "Unilever India Exports",
      "Lakme Lever",
      "Pond's Exports",
      "Unilever Nepal"
    ],
    industries: [
      "FMCG",
      "Personal Care",
      "Home Care",
      "Food & Beverages"
    ],
    stockSymbol: {
      nse: "HINDUNILVR",
      bse: "500696"
    },
    globalPresence: [
      "India",
      "Nepal",
      "Bangladesh",
      "Sri Lanka"
    ],
    awards: [
      "Most Innovative Company - Forbes",
      "Best Employer in India - Aon Hewitt",
      "Excellence in Corporate Governance - ICSI"
    ],
    csr: "Through Project Shakti, HUL empowers rural women entrepreneurs. The company also focuses on water conservation, hygiene education, and sustainable living through various initiatives."
  },
  {
    id: 7,
    name: "Bharti Airtel",
    founded: "1995",
    founder: "Sunil Bharti Mittal",
    headquarters: "New Delhi, Delhi",
    description: "One of India's leading integrated telecommunications companies with operations across Asia and Africa, providing mobile services, fixed broadband, digital TV solutions, and enterprise services.",
    history: "Started as a small enterprise in 1976, Bharti Airtel entered the telecommunications sector in 1995. Through strategic acquisitions and organic growth, it has become one of the world's largest telecommunications companies, serving millions of customers across 18 countries.",
    imageUrl: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1600",
    leaders: [
      {
        name: "Sunil Bharti Mittal",
        role: "Chairman",
        since: "1995",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800",
        bio: "Sunil Bharti Mittal transformed Airtel from a small telecom enterprise into a global telecommunications leader."
      }
    ],
    milestones: [
      {
        year: "1995",
        description: "Launch of mobile services in Delhi"
      },
      {
        year: "2004",
        description: "Pan-India presence achieved"
      },
      {
        year: "2010",
        description: "Acquisition of Zain's African operations"
      },
      {
        year: "2020",
        description: "Launch of 5G services in India"
      }
    ],
    financials: {
      revenue: "$18.8 billion (2023)",
      netIncome: "$2.1 billion (2023)",
      marketCap: "$65 billion (2023)",
      employees: "98,000"
    },
    subsidiaries: [
      "Airtel Africa",
      "Airtel Payments Bank",
      "Airtel Digital",
      "Nxtra Data"
    ],
    industries: [
      "Telecommunications",
      "Digital TV",
      "Enterprise Services",
      "Mobile Payments"
    ],
    stockSymbol: {
      nse: "BHARTIARTL",
      bse: "532454"
    },
    globalPresence: [
      "India",
      "Sri Lanka",
      "14 African Countries",
      "Seychelles"
    ],
    awards: [
      "Best Mobile Network - Opensignal",
      "Most Innovative Company - Fast Company",
      "Best Telecom Company - ET Telecom Awards"
    ],
    csr: "Bharti Foundation focuses on education for underprivileged children, running several educational institutions and programs benefiting over 250,000 students across India."
  },
  {
    id: 8,
    name: "State Bank of India",
    founded: "1806",
    founder: "British East India Company",
    headquarters: "Mumbai, Maharashtra",
    description: "India's largest public sector bank and a Fortune 500 company, serving over 450 million customers through its vast network of branches and digital banking solutions.",
    history: "Originated as Bank of Calcutta in 1806, it became Imperial Bank of India in 1921 and finally State Bank of India in 1955. The bank has played a crucial role in India's economic development and financial inclusion initiatives.",
    imageUrl: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=1600",
    leaders: [
      {
        name: "Dinesh Kumar Khara",
        role: "Chairman",
        since: "2020",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800",
        bio: "Under Dinesh Khara's leadership, SBI has accelerated its digital transformation and strengthened its market position."
      }
    ],
    milestones: [
      {
        year: "1806",
        description: "Established as Bank of Calcutta"
      },
      {
        year: "1955",
        description: "Formation of State Bank of India"
      },
      {
        year: "2017",
        description: "Merger with associate banks"
      },
      {
        year: "2020",
        description: "Launch of YONO digital banking platform"
      }
    ],
    financials: {
      revenue: "$54.3 billion (2023)",
      netIncome: "$5.5 billion (2023)",
      marketCap: "$71 billion (2023)",
      employees: "235,000"
    },
    subsidiaries: [
      "SBI Life Insurance",
      "SBI Cards",
      "SBI Mutual Fund",
      "SBI Capital Markets"
    ],
    industries: [
      "Banking",
      "Insurance",
      "Asset Management",
      "Investment Banking"
    ],
    stockSymbol: {
      nse: "SBIN",
      bse: "500112"
    },
    globalPresence: [
      "India",
      "United States",
      "United Kingdom",
      "Singapore",
      "Japan"
    ],
    awards: [
      "Best Digital Bank - Global Finance",
      "Best Transaction Bank in India - The Asian Banker",
      "Most Trusted Brand - Brand Trust Report"
    ],
    csr: "SBI Foundation works in areas of rural development, healthcare, education, and skill development. The bank has been instrumental in financial inclusion through its extensive rural network."
  },
  {
    id: 9,
    name: "Asian Paints",
    founded: "1942",
    founder: "Champaklal Choksey",
    headquarters: "Mumbai, Maharashtra",
    description: "India's leading paint company and ranked among the top decorative paints companies globally. Known for its innovative products, color expertise, and home décor solutions.",
    history: "Founded during World War II when paint imports were restricted, Asian Paints grew from a small partnership firm to India's largest paint company. The company revolutionized the Indian paint industry through technological innovations and marketing initiatives.",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600",
    leaders: [
      {
        name: "Amit Syngle",
        role: "CEO & Managing Director",
        since: "2020",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800",
        bio: "Amit Syngle has been instrumental in transforming Asian Paints from a paint company to a home décor solutions provider."
      }
    ],
    milestones: [
      {
        year: "1942",
        description: "Company establishment"
      },
      {
        year: "1945",
        description: "First factory in Mumbai"
      },
      {
        year: "2000",
        description: "Launch of Home Solutions business"
      },
      {
        year: "2020",
        description: "Entry into home sanitization services"
      }
    ],
    financials: {
      revenue: "$4.2 billion (2023)",
      netIncome: "$0.6 billion (2023)",
      marketCap: "$45 billion (2023)",
      employees: "7,500"
    },
    subsidiaries: [
      "Asian Paints International",
      "Berger International",
      "Sleek International",
      "White Teak"
    ],
    industries: [
      "Paints",
      "Home Décor",
      "Waterproofing",
      "Bath Fittings"
    ],
    stockSymbol: {
      nse: "ASIANPAINT",
      bse: "500820"
    },
    globalPresence: [
      "India",
      "Nepal",
      "UAE",
      "Indonesia",
      "Singapore"
    ],
    awards: [
      "Most Innovative Company - Forbes Asia",
      "Best Managed Company - Business Today",
      "Excellence in Corporate Governance - ICSI"
    ],
    csr: "Asian Paints focuses on skill development, water management, and education through various community initiatives. The company has implemented several water conservation projects in water-stressed regions."
  },
  {
    id: 10,
    name: "Larsen & Toubro",
    founded: "1938",
    founder: "Henning Holck-Larsen and Søren Kristian Toubro",
    headquarters: "Mumbai, Maharashtra",
    description: "India's largest engineering and construction company, with significant presence in technology, defense, and financial services. Known for executing complex projects across various sectors.",
    history: "Started by two Danish engineers in Mumbai, L&T began as a representative of Danish manufacturers of dairy equipment. The company grew into a construction giant and has been involved in building some of India's most iconic infrastructure projects.",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600",
    leaders: [
      {
        name: "S.N. Subrahmanyan",
        role: "CEO & Managing Director",
        since: "2017",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800",
        bio: "S.N. Subrahmanyan has led L&T's transformation into a more technology-oriented company while maintaining its engineering excellence."
      }
    ],
    milestones: [
      {
        year: "1938",
        description: "Company foundation"
      },
      {
        year: "1950",
        description: "Entry into construction business"
      },
      {
        year: "1999",
        description: "Launch of L&T Infotech"
      },
      {
        year: "2018",
        description: "Entry into defense manufacturing"
      }
    ],
    financials: {
      revenue: "$23.1 billion (2023)",
      netIncome: "$1.8 billion (2023)",
      marketCap: "$52 billion (2023)",
      employees: "117,000"
    },
    subsidiaries: [
      "L&T Technology Services",
      "L&T Finance Holdings",
      "L&T Infotech",
      "L&T Realty"
    ],
    industries: [
      "Engineering",
      "Construction",
      "Defense",
      "Information Technology"
    ],
    stockSymbol: {
      nse: "LT",
      bse: "500510"
    },
    globalPresence: [
      "India",
      "Middle East",
      "Africa",
      "South East Asia",
      "Europe"
    ],
    awards: [
      "Most Admired Company - Fortune India",
      "Best Infrastructure Company - Dun & Bradstreet",
      "Company of the Year - Economic Times"
    ],
    csr: "L&T's integrated community development approach focuses on water conservation, skill development, and healthcare. The company runs several vocational training centers across India."
  }
];