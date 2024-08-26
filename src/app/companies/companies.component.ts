import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'] // Corrected spelling here
})
export class CompaniesComponent implements OnInit {
  company: any = [];
 private arr= [56,85];
  constructor(private companiesService: CompaniesService) {} // Lowercased `companiesService`

  ngOnInit(): void {
    this.companiesService.companyData().subscribe((data) => { // Corrected syntax here
      this.company = data;
      console.log(this.company); // You might want to log the data to the console
    });
  }
}
