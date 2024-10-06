import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Datepicker, DatepickerOptions, initFlowbite } from 'flowbite';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild('datepicker', { static: true }) datepickerRef!: ElementRef;
  public datePicker!: Datepicker;
  public date = new FormControl();

  ngOnInit() {
    setTimeout(() => {
      initFlowbite();
    }, 100);

    const options: DatepickerOptions = {
      defaultDatepickerId: null,
      autohide: false,
      format: 'mm/dd/yyyy',
      maxDate: new Date().toISOString(),
      minDate: null,
      orientation: 'bottom',
      buttons: false,
      title: null,
      rangePicker: false,
      onShow: () => {},
      onHide: () => {},
    };

    this.datePicker = new Datepicker(this.datepickerRef.nativeElement, options);
    console.log('DatePicker', this.datePicker);
  }

  ngAfterViewInit(): void {
    console.log('Date Picker ref', this.datepickerRef.nativeElement);
  }

  dateChange() {
    console.log('Date change', this.datePicker);
    console.log(this.datePicker.getDate());
  }
}
