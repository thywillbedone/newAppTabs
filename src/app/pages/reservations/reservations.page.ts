import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {
  reservations: any[] = [
    {
      id: 1,
      userId: 1,
      date: '2020-03-02T00:00:02.000Z'
    },
    {
      id: 2,
      userId: 1,
      date: '2020-01-02T00:00:02.000Z'
    },
    {
      id: 3,
      userId: 2,
      date: '2020-03-01T00:00:02.000Z'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
