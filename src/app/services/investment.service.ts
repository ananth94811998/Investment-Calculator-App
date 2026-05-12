import { Injectable, signal } from '@angular/core';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentResults } from '../investment-results.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  resultData = signal<InvestmentResults[] | undefined>(undefined);

  constructor() {}

  onCalculateInvestmentResults(data: InvestmentInput) {
    const annualData = [];
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultData.set(annualData);
  }
}
