import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earth-pod1',
  templateUrl: './earth-pod1.component.html',
  styleUrls: ['./earth-pod1.component.css']
})
export class EarthPod1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  EONET() {

    let numDays = Number((<HTMLInputElement>document.querySelector('#numDays'))!.value)

    fetch(`https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=${numDays}`)
      .then(response => response.json())
      .then(data => {
        //const eventsMap = new Map();
        console.log("persisted? " + numDays)
        for (let i = 0; i < numDays; i++) {
          document.getElementById("eonetinfodiv")!.innerHTML += `<div class="row">
          <div class="col-3"> </div> <div class="col-2"> </div><div class="col-2">`
            + data.events[i].title + `</div> <div class="col-4">` + `<a href="` + data.events[i].link + `">` + data.events[i].link + `</a>` + `</div></div>`
        }
        console.log(data);
      });

  }
}
