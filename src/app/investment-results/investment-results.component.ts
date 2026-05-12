import { Component, OnInit, computed } from '@angular/core';
import { InvestmentService } from '../services/investment.service';
import { InvestmentResults } from '../investment-results.model';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService) {}

  results = computed(() => {
    return this.investmentService.resultData();
  });
}
