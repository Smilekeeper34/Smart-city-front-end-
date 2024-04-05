import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataShareService {
    private customerIdSubject = new BehaviorSubject<any | null>(null);
    customerId$ = this.customerIdSubject.asObservable();

    updateCustomerId(id: any) {
        this.customerIdSubject.next(id);
    }
}
