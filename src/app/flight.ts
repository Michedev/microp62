import { CheckInData } from './check-in-data';

export class Flight {
    public checkin_done = false
    public data: CheckInData = null
    
    constructor(
        public from: string,
        public to: string,
        public date: Date,
        public time: string = "",
        public price: number = -1
    ){}
}
