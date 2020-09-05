import { Ng2StateDeclaration } from '@uirouter/angular';
import { PeopleComponent } from './pages/people/people.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';

const peopleState: Ng2StateDeclaration = {
    name: 'people',
    url: '/people',
    component: PeopleComponent,
};

const secondPageState: Ng2StateDeclaration = {
    name: 'second-page',
    url: '/second-page',
    component: SecondPageComponent
};

export const INITIAL_STATES: Array<Ng2StateDeclaration> = [
    peopleState,
    secondPageState
];
