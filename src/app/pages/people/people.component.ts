import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { Person } from 'src/app/core/models/person.model';
import { PeopleService } from 'src/app/core/services/people.service';
import { UniversityService } from './../../core/services/university.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
    people$: Observable<Person[]>;
    university$: Observable<string[]>;

    editingPersonId: string;
    addingPerson = false;
    savingPerson = false;

    formGroup: FormGroup;

    get tableHeads(): Array<string> {
        return ['№', 'ФИО', 'пол', 'дата рождения', 'В браке', 'ВУЗ', 'Номер телефона', 'Действия'];
    }

    constructor(
        private fb: FormBuilder,
        private peopleService: PeopleService,
        private universityService: UniversityService
    ) {
    }

    ngOnInit() {
        this.loadData();
        this.createPersonFormGroup();
    }

    delete(id: string): void {
        this.people$ = this.peopleService.delete(id);
        this.stopAdding();
        this.stopEditing();
    }

    edit(id: string): void {
        this.editingPersonId = id;
        const editingPerson = this.peopleService.findOne(id);
        this.formGroup.patchValue(editingPerson);
    }

    save(): void {
        of(this.formGroup.getRawValue()).pipe(
            tap(() => this.savingPerson = true),
            delay(2000)
        ).subscribe((updatedData: Person) => {
            this.people$ = this.peopleService.update(this.editingPersonId, updatedData);
            this.stopAdding();
            this.stopEditing();
            this.savingPerson = false;
        });
    }

    add() {
        if (!this.addingPerson) {
            this.editingPersonId = this.peopleService.add();
            const person = this.peopleService.findOne(this.editingPersonId);
            this.formGroup.patchValue(person);
            this.addingPerson = true;
        }
    }

    stopEditing() {
        if (this.addingPerson) {
            this.people$ = this.peopleService.delete(this.editingPersonId);
            this.stopAdding();
        }
        this.editingPersonId = null;
    }

    private stopAdding() {
        this.addingPerson = false;
    }

    private loadData(): void {
        this.people$ = this.peopleService.getAll();
        this.university$ = this.universityService.getAll();
    }

    private createPersonFormGroup(): void {
        this.formGroup = this.fb.group({
            id: [null, Validators.required],
            FIO: [null, Validators.required],
            gender: [null, Validators.required],
            dateOfBirth: [null, Validators.required],
            married: [null, Validators.required],
            university: [null, Validators.required],
            phoneNumber: ['', [Validators.pattern(/^\+\d+$/), Validators.required]]
        });
    }
}
