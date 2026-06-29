export function formatCurrency(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} L`;
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function calculateEMI(principal: number, annualRate: number, tenureMonths: number): number {
  const monthlyRate = annualRate / 12 / 100;
  if (monthlyRate === 0) return Math.round(principal / tenureMonths);
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  return Math.round(emi);
}

export interface AmortizationRow {
  year: number;
  principal: number;
  interest: number;
  balance: number;
  totalPrincipal: number;
  totalInterest: number;
}

export function calculateAmortization(principal: number, annualRate: number, tenureMonths: number): AmortizationRow[] {
  const monthlyRate = annualRate / 12 / 100;
  const emi = calculateEMI(principal, annualRate, tenureMonths);
  let balance = principal;
  const yearlyData: AmortizationRow[] = [];
  let totalPrincipalPaid = 0;
  let totalInterestPaid = 0;

  for (let year = 1; year <= Math.ceil(tenureMonths / 12); year++) {
    let yearPrincipal = 0;
    let yearInterest = 0;
    const monthsThisYear = Math.min(12, tenureMonths - (year - 1) * 12);
    for (let m = 0; m < monthsThisYear && balance > 0; m++) {
      const interest = Math.round(balance * monthlyRate);
      const principalPaid = Math.min(emi - interest, balance);
      yearPrincipal += principalPaid;
      yearInterest += interest;
      balance = Math.max(0, balance - principalPaid);
    }
    totalPrincipalPaid += yearPrincipal;
    totalInterestPaid += yearInterest;
    yearlyData.push({
      year,
      principal: yearPrincipal,
      interest: yearInterest,
      balance: Math.round(balance),
      totalPrincipal: totalPrincipalPaid,
      totalInterest: totalInterestPaid,
    });
    if (balance <= 0) break;
  }
  return yearlyData;
}
