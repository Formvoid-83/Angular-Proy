import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from "./square/square.component";
import { BoardComponent } from './board/board.component';
import { NbThemeOptions ,NB_THEME_OPTIONS, NbButtonModule, NbIconModule, NbLayoutModule, NbThemeModule, NbThemeService } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    //schemas:[NbThemeOptions],

    providers: [NbThemeModule, NbThemeService] ,
    imports: [RouterOutlet, SquareComponent, BoardComponent,NbThemeModule, NbLayoutModule, NbIconModule, NbEvaIconsModule, NbButtonModule]
})
export class AppComponent {
  
  title = 'AngularTICTAC';
  /*constructor(private themeService: NbThemeService){
    this.themeService.changeTheme('corporate');
  }*/

}
