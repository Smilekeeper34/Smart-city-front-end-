import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataShareService } from 'src/app/services/DataShareService.service';
import { HouseService } from 'src/app/services/house.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.scss']
})
export class AddHouseComponent implements OnInit{
  customerId: string;
  houses: any[] = [];
  houseForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private houseService:HouseService, private dataShareService: DataShareService
    ) {}

  ngOnInit(): void {
    this.houseForm = this.formBuilder.group({
      customerId:['',Validators.required],
      houseNumber: ['', Validators.required],
      suburb: ['', Validators.required],
      streetName:['',Validators.required],
      
      
    });
    this.dataShareService.customerId$.subscribe((id) => {
      this.customerId = id;
    });
  }

  onSubmit() {
    if (this.houseForm.valid) {
      const customerId = this.houseForm.get('customerId').value;
      this.houseService.createHouse(this.houseForm.value, customerId).subscribe(
        (response) => {
          Swal.fire({
            title: 'Success!',
            text: 'House created successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.houseForm.reset();
        },
        (error) => {
          console.log(this.houseForm.value);
          console.error('Error creating house:', error);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to create house',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      );
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }
  
  clear() {
    this.houseForm.reset();
  }
}
