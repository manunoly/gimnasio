import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from './player/player.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';

@NgModule({
    imports: [CommonModule, IonicModule, FormsModule],
    declarations: [HeaderNavbarComponent, PlayerComponent],
    exports: [HeaderNavbarComponent, PlayerComponent],
    entryComponents: [HeaderNavbarComponent, PlayerComponent]
})

export class SharedModule { }
