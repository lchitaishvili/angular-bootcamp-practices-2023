import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom-details',
  templateUrl: './custom-details.component.html',
  styleUrls: ['./custom-details.component.scss']
})
export class CustomDetailsComponent implements OnInit {

  public color = '';
  public size = '';
  public id = NaN;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.color = this.route.snapshot.queryParams['color'];
    this.size = this.route.snapshot.queryParams['size'];
    this.id = this.route.snapshot.params['id'];
  }
}
