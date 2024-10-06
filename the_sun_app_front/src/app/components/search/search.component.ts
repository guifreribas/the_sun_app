/*import {
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
   
      initFlowbite();
   

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
}*/

/*import {
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
    setTimeout(()=>{

      initFlowbite();
    }, 100)

    const options: DatepickerOptions = {
      autohide: false,
      maxDate: new Date().toISOString(), 
      minDate: new Date('2012-01-01').toISOString(), 
      orientation: 'bottom',
      buttons: false,
      title: 'Select a date',
      rangePicker: false,
      

    };

    this.datePicker = new Datepicker(this.datepickerRef.nativeElement, options);
    console.log('DatePicker Initialized', this.datePicker);
  }

  ngAfterViewInit(): void {
    console.log('Date Picker ref', this.datepickerRef.nativeElement);
  }

  dateChange(event: Event) {
    console.log('Event triggered:', event);
    const selectedDate = (event.target as HTMLInputElement).value;
    console.log('Date selected:', selectedDate);
  }

  updateDatepickerOptions(minDate: string, maxDate: string): void {
    this.datePicker.destroy(); // Destruye la instancia anterior
    const options: DatepickerOptions = {
      autohide: false,
      maxDate: maxDate,
      minDate: minDate,
      orientation: 'bottom',
      buttons: false,
      title: 'Select a date',
      rangePicker: false,
      
      
    };
    this.datePicker = new Datepicker(this.datepickerRef.nativeElement, options); // Crea una nueva instancia con las opciones actualizadas
    console.log('DatePicker Updated', this.datePicker);
  }

  ngOnDestroy(): void {
    if (this.datePicker) {
      this.datePicker.destroy(); // Limpiar el Datepicker al destruir el componente
    }

}}*/

import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public currentDate: string = ''; 
  public date = new FormControl('');

  ngOnInit(): void {
    // Calcular la fecha actual en formato 'YYYY-MM-DD'
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0]; 
  }

  dateChange(event: Event): void {
    const selectedDate = (event.target as HTMLInputElement).value;
    console.log('Date selected:', selectedDate);
  }
}
