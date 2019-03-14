import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Flight } from '../flight';
import { CheckInData } from '../check-in-data';
import { Location } from '@angular/common';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.scss'],
})
export class CheckinPage implements OnInit {
  private flight: Flight
  public name_surname: string = ''
  public passaport: string = ''
  public cellnum: string = ''

  constructor(
              private router: Router,
              private location: Location) {
                this.flight = router.getCurrentNavigation().extras.state['flight']
               }

  ngOnInit() {
  }

  public finish_checkin(){
    this.flight.checkin_done = true
    this.flight.data = new CheckInData(this.name_surname, this.passaport, this.cellnum)
    this.goback()
  }

  public goback(){
    this.name_surname = ''
    this.passaport = ''
    this.cellnum = ''
    this.location.back()

  }

}
