import { Injectable } from '@angular/core';
import {Flight} from './flight'
import { CheckInData } from './check-in-data';

@Injectable({
  providedIn: 'root'
})
export class FlightManagerService {
  private flights: Array<Flight>;
  constructor() { 
    this.flights = [new Flight("Rome", "Paris", new Date("2015-03-25")),
    new Flight("Madrid", "Barcelona", new Date("2017-05-12"))]
    this.flights[0].checkin_done = true
    this.flights[0].data = new CheckInData("diocan", "porcamadona", '666')
    this.flights = []
  }

  public add_flight(f: Flight){
    this.flights[this.flights.length] = f
  }

  public remove_flight(flight: Flight){
    this.flights = this.flights.filter((f) => f != flight)
  }

  public get_flights(): Array<Flight>{
    return this.flights
  }
}
