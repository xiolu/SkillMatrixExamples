import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './shared/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Skill Matrix';
  isDark$: Observable<boolean>;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDark$ = this.themeService.isDark$();
  }

  setChildTitle(event: string): void {
    this.title = event;
  }
}
