import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigate() {
    switch (this.name) {
      case 'reservations':
        this.router.navigateByUrl('/reservations');
        break;
      case 'clients':
        this.router.navigateByUrl('/clients');
        break;
      case 'products':
        this.router.navigateByUrl('/products');
        break;
      default:
        break;
    }
  }
}
