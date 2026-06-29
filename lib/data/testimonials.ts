export interface Testimonial {
  id: string;
  name: string;
  city: string;
  loanType: string;
  rating: number;
  text: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    city: 'Mumbai',
    loanType: 'Home Loan',
    rating: 5,
    text: 'Growin Finserv made the entire home loan process incredibly smooth. Their team guided me through every step and got my loan approved within a week. The interest rate they secured was better than what my bank offered — I saved lakhs over the tenure!',
    initials: 'RS',
  },
  {
    id: '2',
    name: 'Priya Nair',
    city: 'Thane',
    loanType: 'Personal Loan',
    rating: 5,
    text: 'I needed funds urgently for a medical emergency and Growin Finserv came through in just 24 hours. The staff was extremely helpful and empathetic throughout the process. I would highly recommend them to anyone needing quick financial support.',
    initials: 'PN',
  },
  {
    id: '3',
    name: 'Suresh Patil',
    city: 'Pune',
    loanType: 'Business Loan',
    rating: 5,
    text: 'I was struggling to get a business loan from traditional banks due to my relatively short business history. Growin Finserv understood my situation, evaluated my cash flow, and arranged a ₹50 Lakh business loan within 5 days. My business has grown significantly since then.',
    initials: 'SP',
  },
  {
    id: '4',
    name: 'Anita Desai',
    city: 'Navi Mumbai',
    loanType: 'Loan Against Property',
    rating: 5,
    text: 'I mortgaged my commercial property to fund my daughter\'s higher education abroad. Growin Finserv offered the best LTV ratio I found and the documentation process was completely paperless. Their team is professional and transparent — no hidden charges at all.',
    initials: 'AD',
  },
  {
    id: '5',
    name: 'Vikram Joshi',
    city: 'Kalyan',
    loanType: 'Car Loan',
    rating: 5,
    text: 'I purchased my first car with the help of Growin Finserv and the experience was fantastic. They offered me a loan at 7.9% interest with 90% funding, and the entire process was completed at my doorstep. The representative was knowledgeable and patient with all my queries.',
    initials: 'VJ',
  },
  {
    id: '6',
    name: 'Meena Kulkarni',
    city: 'Mumbai',
    loanType: 'Home Loan',
    rating: 5,
    text: 'After being rejected by two banks, Growin Finserv not only got my home loan approved but also helped me improve my CIBIL score before reapplying. Their expert advice saved me from making costly financial mistakes. I now own my dream 2BHK in Borivali.',
    initials: 'MK',
  },
  {
    id: '7',
    name: 'Anil Mehta',
    city: 'Thane',
    loanType: 'Personal Loan',
    rating: 5,
    text: 'The speed and efficiency of Growin Finserv is unmatched. I applied online, submitted documents via WhatsApp, and had ₹5 Lakh in my account the very next morning. Their customer service team followed up even after the loan was disbursed — truly exceptional service.',
    initials: 'AM',
  },
  {
    id: '8',
    name: 'Deepa Sawant',
    city: 'Navi Mumbai',
    loanType: 'Business Loan',
    rating: 5,
    text: 'As a woman entrepreneur, I was apprehensive about getting a business loan, but Growin Finserv was incredibly supportive. They helped me access a government-backed collateral-free loan under the CGTMSE scheme. My boutique business has now expanded to three locations thanks to their timely support.',
    initials: 'DS',
  },
];
