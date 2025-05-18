import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as angular from '@angular/forms';

@Component({
  selector: 'lib-angular-version',
  imports: [CommonModule],
  templateUrl: './angular-version.component.html',
  styleUrl: './angular-version.component.scss'
})
export class AngularVersionComponent {
  angularVersion: string = 'N/A';

  ngOnInit(): void {
    this.angularVersion = angular.VERSION.full;
  }
}
