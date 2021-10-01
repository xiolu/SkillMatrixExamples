import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { THEME_KEY } from '../../enums/theme.enum';
import { map, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  /**
   * Theme indicator asyc.
   */
  private theme$: Subject<THEME_KEY> = new BehaviorSubject<THEME_KEY>(THEME_KEY.DARK);

  constructor() { }


  /**
   * Check if dark theme is active.
   * @returns boolaen async
   */
  isDark$(): Observable<boolean> {
    return this.theme$.pipe(
      map(theme => {
        switch (theme) {
          case THEME_KEY.DARK:
            return true;
          case THEME_KEY.LIGHT:
            return false;
          default:
            return true;
        }
      }),
      shareReplay()
    );
  }

 turnLightOn(): void {
   this.theme$.next(THEME_KEY.LIGHT);
 }

 turnLightOff(): void {
   this.theme$.next(THEME_KEY.DARK);
 }
}
