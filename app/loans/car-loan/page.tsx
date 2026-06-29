import { Metadata } from 'next'
import { loans } from '@/lib/data/loans'
import LoanHero from '@/components/loans/LoanHero'
import FeaturesGrid from '@/components/loans/FeaturesGrid'
import EligibilityCriteria from '@/components/loans/EligibilityCriteria'
import DocChecklist from '@/components/loans/DocChecklist'
import LoanEMISection from '@/components/loans/LoanEMISection'
import LoanFAQ from '@/components/loans/LoanFAQ'
import ApplyNowForm from '@/components/loans/ApplyNowForm'

const loan = loans.find(l => l.slug === 'car-loan')!

export const metadata: Metadata = {
  title: `${loan.name} | Growin Finance`,
  description: loan.tagline,
}

export default function CarLoanPage() {
  return (
    <main>
      <LoanHero loan={loan} />
      <FeaturesGrid features={loan.features} />
      <EligibilityCriteria eligibility={loan.eligibility} />
      <DocChecklist documents={loan.documents} />
      <LoanEMISection
        defaultAmount={loan.defaultAmount}
        defaultRate={loan.defaultRate}
        defaultTenure={loan.defaultTenure}
      />
      <LoanFAQ faqs={loan.faqs} />
      <ApplyNowForm loanName={loan.name} />
    </main>
  )
}
