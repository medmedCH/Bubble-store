import {RoomsComponent} from './components/site/rooms/rooms.component';
import {ChatComponent} from './components/site/chat/chat.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './app-auth.guard';


const routes: Routes = [

  {path: 'rooms', component: RoomsComponent,canActivate: [AuthGuard]},
  {path: 'rooms/:id', component: ChatComponent,  },
  { path: '',
    redirectTo: '/rooms',
    pathMatch: 'full'
  },

];

export const ROUTING = RouterModule.forRoot(routes);

