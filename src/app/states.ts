import { Ng2StateDeclaration } from '@uirouter/angular';
import { PeopleComponent } from './pages/people/people.component';
import { HomeComponent } from './pages/home/home.component';

const secondPageState: Ng2StateDeclaration = {
    name: 'home',
    url: '/home',
    component: HomeComponent
};

const peopleState: Ng2StateDeclaration = {
    name: 'people',
    url: '/people',
    component: PeopleComponent,
};

export const INITIAL_STATES: Array<Ng2StateDeclaration> = [
    peopleState,
    secondPageState
];
