import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from '../shared/services/theme/theme.service';
import { LOCAL_STORAGE_KEY } from '../shared/enums/local-storage-key.enum';
import { LocalStorageService } from '../shared/services/local-storage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit
{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isDark$: Observable<boolean>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void
  {
    this.isDark$ = this.themeService.isDark$();
  }

  /**
   * Example logout.
   * Here the logout route or service will be called.
   */
  logout(): void
  {
    this.localStorageService.removeItem(LOCAL_STORAGE_KEY.BEARER_TOKEN);

    this.router.navigate(['/'], { skipLocationChange: true });
  }

  /**
   * Example to show a lambda expression.
   * What makes it different from a function definition???
   * @param isDark is dark indicator.
   */
  lightOn = (on: boolean): void => on ? this.themeService.turnLightOn() : this.themeService.turnLightOff();


}
