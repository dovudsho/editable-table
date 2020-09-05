export class Person {
    constructor(
        public id: number,
        public FIO: string,
        public gender: string,
        public dateOfBirth: Date,
        public married: boolean,
        public university: string,
        public phoneNumber: string
    ) { }
}
