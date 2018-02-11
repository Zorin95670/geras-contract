import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'geras-contract',
  templateUrl: './geras-contract.component.html',
  styleUrls: ['./geras-contract.component.scss']
})
export class GerasContractComponent implements OnInit {
  @ViewChild('partOne') partOne;
  @ViewChild('partTwo') partTwo;

  internalContract:GerasContract = new GerasContract();
  part1:string = null;
  part2:string = null;

  @Input() contract:string;

  @Output() contractChange:EventEmitter<string> = new EventEmitter();
  @Output() change:EventEmitter<any> = new EventEmitter();

  constructor( ) { }

  ngOnInit() {
    if (this.contract !== null) {
      this.internalContract.init(this.contract);
    }
  }

  partOneEvent(event: KeyboardEvent) {
    const value = (<HTMLInputElement>event.target).value;

    if (this.isNothingAction(event)) {
      return;
    }

    if (Number.isNaN(Number(event.key))) {
      event.preventDefault();
      return;
    }

    if (event.type === 'keydown' && value.length > 7) {
      event.preventDefault();
      return;
    }
    this.part1 = null;

    if (value.length !== 8) {
      return;
    }

    this.part1 = value;

    console.log(this.part2);
    if (this.part2 === null) {
      this.partTwo.nativeElement.focus();
    }

    this.validateContract();
  }

  partTwoEvent(event: KeyboardEvent) {
    const cursorPosition = this.partTwo.nativeElement.selectionStart;
    const value = (<HTMLInputElement>event.target).value;
    console.log('partTwoEvent');

    if (event.keyCode === 37 && cursorPosition === 0) {
      this.partOne.nativeElement.focus();
      return;
    }

    if (this.isNothingAction(event)) {
      return;
    }

    if (Number.isNaN(Number(event.key))) {
      event.preventDefault();
      return;
    }

    if (event.type === 'keydown' && value.length > 4) {
      event.preventDefault();
      return;
    }
    this.validateContract();
  }

  validateContract() {
    if (!this.internalContract.isValid()) {
      return;
    }

    this.contract = this.internalContract.getContract();
    this.contractChange.emit(this.contract);
    this.change.emit(this.change);
  }

  isNothingAction(event: KeyboardEvent) {
    return ([46, 8, 9, 27, 13, 110, 190].indexOf(event.keyCode) !== -1 ||
       (event.keyCode === 65 && (event.ctrlKey || event.metaKey)) ||
       (event.keyCode === 67 && (event.ctrlKey || event.metaKey)) ||
       (event.keyCode === 86 && (event.ctrlKey || event.metaKey)) ||
       (event.keyCode === 88 && (event.ctrlKey || event.metaKey)) ||
       (event.keyCode >= 35 && event.keyCode <= 40));
  }
}
