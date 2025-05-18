import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  imports: [],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent implements OnInit {
  githubLogoPath!: string;

  ngOnInit(): void {
    this.githubLogoPath = 'public/logos/GitHub-Mark-32px.png';
  }
}
