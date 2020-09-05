import { Person } from './../models/person.model';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {
    people = [
        new Person(1, 'Алекс', 'Мужчина', new Date(1997, 0, 25), true, 'Массачусетский технологический институт', '+992929823035'),
        new Person(2, 'Хлоя', 'Женщина', new Date(1998, 5, 24), true, 'Стэнфордский университет', '+992929823000'),
        new Person(3, 'Кайл', 'Мужчина', new Date(1999, 2, 26), true, 'Кембриджский университет', '+992929825000')
    ];

    constructor(
    ) { }

    getAll(): Observable<Person[]> {
        return of(this.people);
    }

    findOne(id: number): Person {
        return this.people.find(person => person.id === id);
    }

    update(id: number, data: Person): Observable<Person[]> {
        this.people = this.people.map(person => person.id === id ? { ...person, ...data } : person);
        return of(this.people);
    }

    delete(id: number): Observable<Person[]> {
        const idx = this.people.findIndex(person => person.id === id);
        this.people.splice(idx, 1);
        return of(this.people);
    }
}
