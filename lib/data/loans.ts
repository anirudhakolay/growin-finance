export interface LoanFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface LoanData {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  interestRate: string;
  tenure: string;
  maxAmount: string;
  processingFee: string;
  minAmount: string;
  features: LoanFeature[];
  eligibility: {
    salaried: string[];
    selfEmployed: string[];
  };
  documents: { category: string; items: string[] }[];
  faqs: { q: string; a: string }[];
  defaultAmount: number;
  defaultRate: number;
  defaultTenure: number;
  color: string;
  icon: string;
}

export const loans: LoanData[] = [
  {
    id: 'home-loan',
    slug: 'home-loan',
    name: 'Home Loan',
    tagline: 'Make your dream home a reality with our affordable home loan',
    interestRate: '7.10% p.a. onwards',
    tenure: 'Up to 25 years',
    maxAmount: '₹100 Crore',
    processingFee: '0.5%',
    minAmount: '₹10 Lakh',
    features: [
      { icon: '🏠', title: 'Low Rate of Interest', desc: 'Competitive rates starting at 7.10% p.a. to keep your EMIs affordable' },
      { icon: '📅', title: 'High Tenure', desc: 'Repay comfortably with loan tenures of up to 25 years' },
      { icon: '🔄', title: 'Balance Transfer', desc: 'Transfer your existing home loan to us and save on interest' },
      { icon: '💰', title: 'Top-Up Loan', desc: 'Get additional funds on your existing home loan for renovation or other needs' },
      { icon: '📊', title: 'Flexible EMI', desc: 'Step-up or step-down EMI options to match your income growth' },
      { icon: '💡', title: 'Tax Benefits', desc: 'Enjoy deductions under Section 80C and Section 24(b) of the Income Tax Act' },
    ],
    eligibility: {
      salaried: [
        'Age: 21 to 60 years',
        'Minimum monthly income: ₹25,000',
        'Minimum 2 years of employment',
        'CIBIL score of 700 or above',
      ],
      selfEmployed: [
        'Age: 25 to 65 years',
        'ITR filing for at least 2 years',
        'Business vintage of 3 or more years',
        'CIBIL score of 700 or above',
      ],
    },
    documents: [
      {
        category: 'KYC Documents',
        items: ['Aadhaar Card', 'PAN Card', 'Passport or Driving License'],
      },
      {
        category: 'Income Documents',
        items: ['3 months salary slips', 'Form 16 (last 2 years)', '6 months bank statement'],
      },
      {
        category: 'Property Documents',
        items: ['Sale Agreement', 'Title Deed', 'NOC from Society'],
      },
    ],
    faqs: [
      {
        q: 'What is the maximum home loan amount I can get?',
        a: 'You can get a home loan of up to ₹5 Crore depending on your income, credit profile, and the value of the property. We generally fund up to 80-90% of the property value.',
      },
      {
        q: 'How long does it take to get a home loan approved?',
        a: 'Once all documents are submitted, we typically process and approve home loan applications within 5-7 working days. The disbursement follows shortly after legal and technical verification of the property.',
      },
      {
        q: 'Can I prepay my home loan without any penalty?',
        a: 'Yes, as per RBI guidelines, there is no prepayment penalty on floating rate home loans. For fixed rate loans, a nominal prepayment charge may apply. Please check the loan agreement for exact terms.',
      },
      {
        q: 'What tax benefits can I avail on my home loan?',
        a: 'You can claim a deduction of up to ₹1.5 Lakh on principal repayment under Section 80C, and up to ₹2 Lakh on interest paid under Section 24(b) of the Income Tax Act each financial year.',
      },
      {
        q: 'Can I transfer my existing home loan to Growin Finserv?',
        a: 'Absolutely. We offer a balance transfer facility that allows you to transfer your existing home loan from another lender to us, often at a lower interest rate, helping you save significantly over the tenure.',
      },
    ],
    defaultAmount: 5000000,
    defaultRate: 7.10,
    defaultTenure: 240,
    color: 'bg-blue-600',
    icon: '🏠',
  },
  {
    id: 'loan-against-property',
    slug: 'loan-against-property',
    name: 'Loan Against Property',
    tagline: 'Unlock the value of your property for any financial need',
    interestRate: '8.10% p.a. onwards',
    tenure: 'Up to 20 years',
    maxAmount: '₹100 Crore',
    processingFee: '1%',
    minAmount: '₹5 Lakh',
    features: [
      { icon: '🏢', title: 'High Loan Amount', desc: 'Borrow up to ₹100 Crore or up to 70% of your property value' },
      { icon: '📉', title: 'Lower Rate of Interest', desc: 'Secured loan means lower interest rates compared to personal loans' },
      { icon: '⏳', title: 'Long Tenure', desc: 'Repay the loan over up to 20 years with ease' },
      { icon: '🎯', title: 'Any Purpose', desc: 'Use the funds for business expansion, education, medical, or any other need' },
      { icon: '🔄', title: 'Balance Transfer', desc: 'Transfer your existing LAP to us at better rates and save on interest costs' },
      { icon: '💳', title: 'Overdraft Facility', desc: 'Opt for an overdraft facility and pay interest only on the amount utilized' },
    ],
    eligibility: {
      salaried: [
        'Age: 21 to 60 years',
        'Minimum monthly income: ₹30,000',
        'Minimum 2 years of employment',
        'CIBIL score of 700 or above',
      ],
      selfEmployed: [
        'Age: 25 to 65 years',
        'ITR filing for at least 2 years',
        'Business vintage of 3 or more years',
        'CIBIL score of 700 or above',
      ],
    },
    documents: [
      {
        category: 'KYC Documents',
        items: ['Aadhaar Card', 'PAN Card', 'Passport or Driving License'],
      },
      {
        category: 'Income Documents',
        items: ['3 months salary slips', 'Form 16 (last 2 years)', '6 months bank statement'],
      },
      {
        category: 'Property Documents',
        items: ['Property Papers (Title Deed, Sale Deed)', 'Valuation Report from approved valuer', 'Encumbrance Certificate'],
      },
    ],
    faqs: [
      {
        q: 'What types of properties are accepted as collateral for a Loan Against Property?',
        a: 'We accept residential properties, commercial properties, and industrial properties. The property must be free from any litigation, and the title should be clear. We lend up to 60-70% of the market value of the property.',
      },
      {
        q: 'Can I use a rented property to avail a Loan Against Property?',
        a: 'Yes, you can mortgage a rented property to avail a loan. The rental income may also be considered while assessing your loan eligibility, which could increase the amount you are eligible for.',
      },
      {
        q: 'What is the difference between Loan Against Property and a Home Loan?',
        a: 'A home loan is specifically for purchasing or constructing a home, whereas a Loan Against Property allows you to mortgage an existing property you own to raise funds for any purpose, including business, education, or medical expenses.',
      },
      {
        q: 'How is the loan amount determined for a Loan Against Property?',
        a: `The loan amount is primarily determined by the market value of your property, your repayment capacity based on income, and your credit profile. Typically, lenders offer 50-70% of the property's market value.`,
      },
      {
        q: 'Is there a prepayment option for Loan Against Property?',
        a: 'Yes, you can prepay your loan at any time. For floating rate loans, there is no prepayment penalty as per RBI guidelines. For fixed rate loans, a nominal foreclosure charge may be levied.',
      },
    ],
    defaultAmount: 3000000,
    defaultRate: 8.10,
    defaultTenure: 180,
    color: 'bg-indigo-600',
    icon: '🏢',
  },
  {
    id: 'personal-loan',
    slug: 'personal-loan',
    name: 'Personal Loan',
    tagline: 'Instant funds for all your personal needs - no collateral required',
    interestRate: '9.98% p.a. onwards',
    tenure: 'Up to 7 years',
    maxAmount: '₹1 Crore',
    processingFee: '2%',
    minAmount: '₹50,000',
    features: [
      { icon: '⚡', title: 'Instant Approval', desc: 'Get loan approval within hours with our streamlined digital process' },
      { icon: '🛡️', title: 'No Collateral', desc: 'Completely unsecured loan - no need to pledge any asset' },
      { icon: '🎯', title: 'Flexible Use', desc: 'Use for any purpose - medical, travel, wedding, education, home renovation' },
      { icon: '🚀', title: 'Quick Disbursal', desc: 'Funds credited directly to your bank account within 24-48 hours of approval' },
      { icon: '📄', title: 'Minimal Docs', desc: 'Simple documentation process with just the essential KYC and income proofs' },
      { icon: '💫', title: 'Prepayment Option', desc: 'Reduce your interest burden by prepaying the loan at your convenience' },
    ],
    eligibility: {
      salaried: [
        'Age: 21 to 58 years',
        'Minimum monthly income: ₹20,000',
        'Minimum 1 year of employment (6 months with current employer)',
        'CIBIL score of 700 or above',
      ],
      selfEmployed: [
        'Age: 25 to 65 years',
        'Minimum annual income: ₹2 Lakh p.a.',
        'Business vintage of 2 or more years',
        'CIBIL score of 700 or above',
      ],
    },
    documents: [
      {
        category: 'KYC Documents',
        items: ['Aadhaar Card', 'PAN Card'],
      },
      {
        category: 'Income Documents',
        items: ['3 months salary slips', '3 months bank statement'],
      },
      {
        category: 'Employment Documents',
        items: ['Offer letter or employment certificate', 'Employee ID card'],
      },
    ],
    faqs: [
      {
        q: 'How quickly will I receive the personal loan amount after approval?',
        a: 'Once your personal loan is approved and all documents are verified, the funds are typically disbursed directly to your bank account within 24 to 48 hours. In some cases, with complete documentation, same-day disbursal is also possible.',
      },
      {
        q: 'What can I use a personal loan for?',
        a: 'A personal loan can be used for virtually any legitimate personal expense - medical emergencies, weddings, travel, home renovation, higher education fees, debt consolidation, or even purchasing consumer goods. There are no end-use restrictions.',
      },
      {
        q: 'Will my personal loan application affect my CIBIL score?',
        a: 'When you apply for a personal loan, the lender makes a hard inquiry on your credit report, which may marginally reduce your CIBIL score by a few points. However, timely repayment of your EMIs will gradually improve your score.',
      },
      {
        q: 'Is there a penalty for paying off my personal loan early?',
        a: 'A foreclosure charge of 2-4% may be levied on the outstanding principal if you close the loan before the end of the tenure. Some lenders allow part-prepayment after a lock-in period. Please check the specific loan terms at the time of application.',
      },
      {
        q: 'What is the minimum CIBIL score required for a personal loan?',
        a: 'A CIBIL score of 700 and above is generally required to qualify for a personal loan. A higher score can help you get a larger loan amount at a lower interest rate. If your score is below 700, we can guide you on ways to improve it before applying.',
      },
    ],
    defaultAmount: 500000,
    defaultRate: 9.98,
    defaultTenure: 60,
    color: 'bg-purple-600',
    icon: '💳',
  },
  {
    id: 'business-loan',
    slug: 'business-loan',
    name: 'Business Loan',
    tagline: 'Fuel your business growth with fast and flexible financing',
    interestRate: '12% p.a. onwards',
    tenure: 'Up to 36 months or 3 years',
    maxAmount: '₹2 Crore',
    processingFee: '1.5%',
    minAmount: '₹1 Lakh',
    features: [
      { icon: '⚡', title: 'Quick Approval', desc: 'Fast-track processing with approval decisions in as little as 48 hours' },
      { icon: '🛡️', title: 'Collateral Free', desc: 'Unsecured business loans available under CGTSME scheme for eligible borrowers' },
      { icon: '💰', title: 'High Loan Amount', desc: 'Borrow up to ₹2 Crore to meet your business capital requirements' },
      { icon: '📊', title: 'Flexible Repayment', desc: 'Choose repayment tenure from 12 to 36 months based on your cash flow' },
      { icon: '📈', title: 'Business Growth', desc: 'Fund expansion, purchase equipment, hire staff, or open new locations' },
      { icon: '🔄', title: 'Working Capital', desc: 'Dedicated working capital loans to manage day-to-day business operations' },
    ],
    eligibility: {
      salaried: [
        'Not applicable - Business Loan is designed for self-employed individuals and business owners',
      ],
      selfEmployed: [
        'Age: 25 to 65 years',
        'Business vintage of 3 or more years',
        'ITR filing for at least 2 years',
        'Annual business turnover of ₹10 Lakh or above',
        'CIBIL score of 700 or above',
      ],
    },
    documents: [
      {
        category: 'KYC Documents',
        items: ['Aadhaar Card', 'PAN Card (personal and business)', 'Business Registration Certificate'],
      },
      {
        category: 'Financial Documents',
        items: ['ITR for last 2 years', 'Audited balance sheet and P&L statement', '6 months business bank statement'],
      },
      {
        category: 'Business Documents',
        items: ['GST registration certificate', 'Business licence or shop establishment certificate'],
      },
    ],
    faqs: [
      {
        q: 'What types of businesses can apply for a business loan?',
        a: 'We cater to a wide range of businesses including sole proprietorships, partnerships, private limited companies, LLPs, and MSMEs. Whether you are in retail, manufacturing, services, or trading, you can apply for a business loan with us.',
      },
      {
        q: 'Do I need collateral to get a business loan?',
        a: 'Not necessarily. We offer collateral-free business loans under government-backed CGTMSE schemes for eligible borrowers. However, for larger loan amounts, providing collateral can improve your eligibility and help you get a better interest rate.',
      },
      {
        q: 'How is the business loan amount determined?',
        a: 'The loan amount is assessed based on your business turnover, profitability, cash flow, years of operation, and credit profile. Providing audited financials and a good banking history significantly strengthens your loan application.',
      },
      {
        q: 'Can I get a business loan if my CIBIL score is low?',
        a: 'While a CIBIL score of 700+ is preferred, we evaluate applications holistically considering business performance, turnover, and banking history. Our advisors can guide you on improving your eligibility before reapplying if your score is below the threshold.',
      },
      {
        q: 'How long does it take to get a business loan disbursed?',
        a: 'With complete documentation and a straightforward application, business loan approvals can be given within 48-72 hours. Disbursement typically happens within 5-7 working days after approval and documentation verification.',
      },
    ],
    defaultAmount: 2000000,
    defaultRate: 12,
    defaultTenure: 36,
    color: 'bg-green-600',
    icon: '💼',
  },
  {
    id: 'car-loan',
    slug: 'car-loan',
    name: 'Car Loan',
    tagline: 'Drive home your dream car with our easy and affordable car loan',
    interestRate: '7.5% p.a. onwards',
    tenure: 'Up to 5 years',
    maxAmount: '₹1 Crore',
    processingFee: '0.5%',
    minAmount: '₹1 Lakh',
    features: [
      { icon: '🚗', title: 'Low Rate of Interest', desc: 'Among the lowest car loan rates in the market starting at just 7.5% p.a.' },
      { icon: '⚡', title: 'Quick Approval', desc: 'Loan approval within 24 hours so you can drive away faster' },
      { icon: '🔄', title: 'New & Used Cars', desc: 'Finance both brand new vehicles and pre-owned cars up to 10 years old' },
      { icon: '💰', title: 'High LTV', desc: 'Get financing up to 90% of the on-road price of the vehicle' },
      { icon: '📅', title: 'Flexible Tenure', desc: 'Choose repayment period from 12 to 60 months to suit your budget' },
      { icon: '🏠', title: 'Doorstep Service', desc: 'Our representatives come to your home for documentation and verification' },
    ],
    eligibility: {
      salaried: [
        'Age: 21 to 60 years',
        'Minimum monthly income: ₹20,000',
        'Minimum 1 year of employment',
        'CIBIL score of 700 or above',
      ],
      selfEmployed: [
        'Age: 25 to 65 years',
        'Minimum annual income: ₹2 Lakh p.a.',
        'Business vintage of 2 or more years',
        'CIBIL score of 700 or above',
      ],
    },
    documents: [
      {
        category: 'KYC Documents',
        items: ['Aadhaar Card', 'PAN Card'],
      },
      {
        category: 'Income Documents',
        items: ['3 months salary slips', '3 months bank statement'],
      },
      {
        category: 'Vehicle Documents',
        items: ['Proforma invoice (for new car) or RC Book (for used car)', 'Vehicle insurance document'],
      },
    ],
    faqs: [
      {
        q: 'Can I get a loan for a used car?',
        a: 'Yes, we finance pre-owned cars as well. The car should generally be not more than 10 years old at the end of the loan tenure. The loan amount for used cars is typically up to 80% of the valuation assessed by our approved valuers.',
      },
      {
        q: 'What is the maximum loan-to-value (LTV) ratio for a new car?',
        a: 'For new cars, we offer financing up to 90% of the on-road price, which includes ex-showroom price, registration charges, and insurance. The remaining 10% needs to be arranged as a down payment by you.',
      },
      {
        q: 'Is there any benefit to making a larger down payment on a car loan?',
        a: `Yes, a larger down payment reduces the principal loan amount, which lowers your monthly EMI and the total interest paid over the tenure. It also reduces the lender's risk, which may help you negotiate a better interest rate.`,
      },
      {
        q: 'Can I prepay my car loan before the tenure ends?',
        a: 'Yes, you can prepay your car loan either partially or fully. A nominal foreclosure fee of 2-5% of the outstanding amount may be applicable depending on the lender and the loan agreement. Prepaying reduces your overall interest burden.',
      },
      {
        q: 'Does the car remain under my name when I take a car loan?',
        a: `Yes, the car is registered in your name. However, the lender's name is noted as a hypothecation on the RC book as security for the loan. Once the loan is fully repaid, the hypothecation is removed and you get a No Objection Certificate (NOC) from the lender.`,
      },
    ],
    defaultAmount: 800000,
    defaultRate: 7.5,
    defaultTenure: 60,
    color: 'bg-orange-500',
    icon: '🚗',
  },
  {
    id: 'working-capital',
    slug: 'working-capital',
    name: 'Working Capital (CC, OD)',
    tagline: 'Empower your day-to-day operations with flexible working capital',
    interestRate: '9% p.a. onwards',
    tenure: 'Renewable Yearly',
    maxAmount: '₹100 Crore',
    processingFee: '1%',
    minAmount: '₹10 Lakh',
    features: [
      { icon: '🔄', title: 'Revolving Credit', desc: 'Withdraw and repay funds as per your business cash flow needs' },
      { icon: '📉', title: 'Pay for What You Use', desc: 'Interest is charged only on the utilized amount, not the entire limit' },
      { icon: '⚡', title: 'Instant Access', desc: 'Seamlessly access funds to manage inventory, payroll, and receivables' },
      { icon: '📈', title: 'Limit Enhancement', desc: 'Facility to increase limit based on business performance and track record' },
      { icon: '🛡️', title: 'Secured & Unsecured', desc: 'Available both with collateral and without collateral based on business profile' },
      { icon: '💼', title: 'Dedicated RM', desc: 'Get a dedicated Relationship Manager for all your banking needs' },
    ],
    eligibility: {
      salaried: [
        'Not applicable - Working Capital is designed for businesses',
      ],
      selfEmployed: [
        'Age: 25 to 65 years',
        'Business vintage of 3 or more years',
        'ITR filing for at least 2 years',
        'Annual business turnover of ₹50 Lakh or above',
        'CIBIL score of 700 or above',
      ],
    },
    documents: [
      {
        category: 'KYC Documents',
        items: ['Aadhaar Card', 'PAN Card', 'Business Registration (GST/Udyam)'],
      },
      {
        category: 'Financial Documents',
        items: ['Audited financials for last 2 years', 'ITR for 2 years', '12 months bank statements'],
      },
      {
        category: 'Business Documents',
        items: ['Property documents (if secured)', 'Stock and Receivables statement'],
      },
    ],
    faqs: [
      {
        q: 'What is the difference between CC and OD?',
        a: 'Cash Credit (CC) is usually backed by inventory and receivables. Overdraft (OD) is backed by property or financial securities. Both charge interest only on the utilized amount.',
      },
      {
        q: 'How is interest charged?',
        a: 'Interest is calculated daily on the outstanding debit balance, so you only pay for what you use.',
      },
      {
        q: 'Can the limit be increased?',
        a: 'Yes, working capital limits are reviewed annually and can be enhanced based on business turnover and performance.',
      },
    ],
    defaultAmount: 5000000,
    defaultRate: 9,
    defaultTenure: 12,
    color: 'bg-teal-600',
    icon: '🔄',
  },
];

export function getLoanBySlug(slug: string): LoanData | undefined {
  return loans.find((loan) => loan.slug === slug);
}
