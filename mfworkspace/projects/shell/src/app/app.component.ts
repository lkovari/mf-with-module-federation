import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AngularVersionComponent } from '../../../lk-common-lib/src/lib/angular-version/angular-version.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shell',
  imports: [CommonModule, RouterOutlet, RouterLink, NgbModule, AngularVersionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Micro-Frontend Shell (host)';
  lastUpdateDate = new Date('05/18/2025 09:56 PM');
}
