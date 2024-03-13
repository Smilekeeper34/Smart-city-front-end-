import { Component, OnInit } from '@angular/core';
import { tariffRateService } from 'src/app/services/tarriffRate.service';

interface Tariff {
  tariffID: number;
  description: string;
  rate: number;
  createdAt: string;
  updatedAt: string;
  LocationID: number;
  CategoryID: number;
}
@Component({
  selector: 'app-tarriff-table',
  templateUrl: './tarriff-table.component.html',
  styleUrls: ['./tarriff-table.component.scss'],
})
export class TarriffTableComponent implements OnInit {

  Tariffs: Tariff[] = [];
  tariffs: any[];
  constructor(private tariffservice: tariffRateService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllTariffs();
  }

  getAllTariffs(): void {
    this.tariffservice.getTariffs().subscribe((data) => {
      if (data.success) {
        this.tariffs = data.tariffs;
      }
    });
  }

  deleteTariff(tariffID: number): void {
    this.tariffservice.deleteTariff(tariffID).subscribe(
      (response) => {
        this.getAllTariffs();
      },
      (error) => {}
    );
  }
}
