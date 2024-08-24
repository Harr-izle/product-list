import { Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ModalComponent } from './components/modal/modal.component';

export const routes: Routes = [
    {
        path: '',
        component:MainpageComponent
    },

    {
        path:'OrderConfirmation',
        component:ModalComponent

    }
];
