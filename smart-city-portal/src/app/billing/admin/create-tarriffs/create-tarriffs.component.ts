import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tariffRateService } from 'src/app/services/tarriffRate.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-tarriffs',
  templateUrl: './create-tarriffs.component.html',
  styleUrls: ['./create-tarriffs.component.scss']
})
export class CreateTarriffsComponent implements OnInit{

  tarriffForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private tarriffService: tariffRateService) {}


    ngOnInit(): void {
      this.tarriffForm = this.formBuilder.group({
        description: ['', Validators.required],
        rate: ['', Validators.required],
        
        
      });
    }
  onSubmit():void{
    if (this.tarriffForm.valid) {
      const tarriffData = this.tarriffForm.value;
      this.tarriffService.addTariff(tarriffData).subscribe(
        (response) => {
          console.log('Tarriff created successfully:', response);
          Swal.fire('Success', 'Tarriff created successfully!', 'success');
          this.tarriffForm.reset();
         
        },
        (error) => {
          Swal.fire('Error', 'Error creating Tarriff', 'error');
          console.error('Error creating Tarriff:', error);
      
        }
      );
    }
  }
  clear():void{

  }
}
