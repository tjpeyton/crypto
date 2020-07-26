import { Component, OnInit, Input } from '@angular/core';

// Crypto Templates
import { bitcoin } from '../../templates/ticker-template';
import { ethereum } from '../../templates/ticker-template';
import { litecoin } from '../../templates/ticker-template';
import { xrp } from '../../templates/ticker-template';
import { dash } from '../../templates/ticker-template';
import { bitcoincash } from '../../templates/ticker-template';
import { dai } from '../../templates/ticker-template';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})

export class TickerComponent implements OnInit {
  data: any[];
  @Input() cKey: string;

  positive = true;
  view: any[] = [160, 125];

  colorScheme = {
    domain: ['#5AA454']
  };

  cardColor: string = '#232837';

  constructor() {
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
    switch(this.cKey) {
      case "BTC": {
        this.data = bitcoin;
        break;
      }
      case "BTCASH": {
        this.data = bitcoincash;
        break;
      }
      case "ETH": {
        this.data = ethereum;
        break;
      }
      case "DAI": {
        this.data = dai;
        break;
      }
      case "XRP": {
        this.data = xrp;
        break;
      }
      case "LTC": {
        this.data = litecoin;
        break;
      }
      case "DASH": {
        this.data = dash;
        break;
      }
    }

  }

}
