import { Component, OnInit, Input } from '@angular/core'

import { Phone } from '../../models/catalog.model'

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {
  @Input() phone: Phone

  constructor() {}

  ngOnInit() {}
}
