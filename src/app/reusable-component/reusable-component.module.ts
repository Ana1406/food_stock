import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DialogComponent } from './dialog/dialog.component';
import { SelectComponent } from './select/select.component';
import { TabsComponent } from './tabs/tabs.component';
import { TableRowDirective } from './directives/table-row.directive';
import { IsLoadingDirective } from './directives/is-loading.directive';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TagComponent } from './tag/tag.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    NavBarComponent,
    TableComponent,
    DialogComponent,
    SelectComponent,
    TabsComponent,
    TableRowDirective,
    SnackbarComponent,
    SpinnerComponent,
    IsLoadingDirective,
    TagComponent,
    PaginationComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  exports: [
    InputComponent,
    ButtonComponent,
    NavBarComponent,
    TableComponent,
    DialogComponent,
    SelectComponent,
    TabsComponent,
    TableRowDirective,
    IsLoadingDirective,
    SnackbarComponent,
    SpinnerComponent,
    PaginationComponent,
  ],
})
export class ReusableComponentModule {}
