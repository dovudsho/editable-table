import { Person } from './../models/person.model';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {
    people = [
        new Person('1rrwer43', 'Алекс', 'Мужчина', new Date(1997, 0, 25), true, 'Массачусетский технологический институт', '+992929823035'),
        new Person('1rrwer42', 'Хлоя', 'Женщина', new Date(1998, 5, 24), true, 'Стэнфордский университет', '+992929823000'),
        new Person('1rrwer42', 'Хлоя', 'Женщина', new Date(1998, 5, 24), true, 'Стэнфордский университет', '+992929823000')
    ];

    constructor(
    ) { }

    getAll(): Observable<Person[]> {
        return of(this.people);
    }

    findOne(id: string): Person {
        return this.people.find(person => person.id === id);
    }

    update(id: string, data: Person): Observable<Person[]> {
        this.people = this.people.map(person => person.id === id ? { ...person, ...data } : person);
        return of(this.people);
    }

    delete(id: string): Observable<Person[]> {
        const idx = this.people.findIndex(person => person.id === id);
        this.people.splice(idx, 1);
        return of(this.people);
    }

    add(): string {
        const id = Math.random().toString(36).substring(7);

        this.people.unshift(
            new Person(id, '', '', new Date(Date.now()), false, '', '')
        );
        return id;
    }
}
