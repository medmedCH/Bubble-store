import {RoomsComponent} from './components/site/rooms/rooms.component';
import {ChatComponent} from './components/site/chat/chat.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [

  {path: 'rooms', component: RoomsComponent,  },
  {path: 'rooms/:id', component: ChatComponent,  },
  { path: '',
    redirectTo: '/rooms',
    pathMatch: 'full'
  },

];

export const ROUTING = RouterModule.forRoot(routes);

