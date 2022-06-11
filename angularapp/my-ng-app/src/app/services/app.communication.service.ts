import {Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn:'root' // Auto-Register the Service in DI Container
})
export class CommunicationService {
  // define a Data Member
  id: number;
  // define an EventEmitter
  // This will be subscribed by the Receiver Component
  valueReceived:EventEmitter<number>;
  constructor(){
    this.id = 0;
    this.valueReceived = new EventEmitter<number>();
  }

  // a Method that will be invoked by sender component
  // This method will emit the received data from sender component
  sendData(data:number):void {
    this.id = data; // Save received value locally
    console.log(`Received data in Service = ${data}`);
    // emit the the value
    this.valueReceived.emit(this.id);
  }
}
