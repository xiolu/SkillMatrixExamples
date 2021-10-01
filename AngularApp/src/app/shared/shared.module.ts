import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ScrollingModule, } from '@angular/cdk/scrolling';
import { MatTreeModule } from '@angular/material/tree';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorIntlCro } from './config/mat-paginator.config';
import { LayoutModule } from '@angular/cdk/layout';
import { HasAccessDirective } from './directives/has-access/has-access.directive';



@NgModule({
  declarations: [
    HasAccessDirective
  ],
  imports: [
    CommonModule,

    /** START Material imports */
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatGridListModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTreeModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatAutocompleteModule,
    MatExpansionModule,
    ScrollingModule,
    LayoutModule,

    /** END Material imports */

  ],
  exports: [

    /** START Material exports */
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatGridListModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTreeModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatAutocompleteModule,
    MatExpansionModule,
    ScrollingModule,
    LayoutModule,
    HasAccessDirective,

    /** End Material exports */

  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        ...new MatDialogConfig(),
        hasBackdrop: true,
        backdropClass: 'blur',
      } as MatDialogConfig,
    },
    {
      provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro
    }
  ]
})
export class SharedModule { }




