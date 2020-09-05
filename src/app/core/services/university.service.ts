import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UniversityService {
    university = [
        'Массачусетский технологический институт',
        'Стэнфордский университет',
        'Кембриджский университет',
        'Калифорнийский технологический институт'
    ];

    getAll(): Observable<string[]> {
        return of(this.university);
    }
}
