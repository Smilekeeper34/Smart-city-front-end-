import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataShareService {
    private customerIdSubject = new BehaviorSubject<number | null>(null);
    customerId$ = this.customerIdSubject.asObservable();

    updateCustomerId(id: number) {
        this.customerIdSubject.next(id);
    }
}
