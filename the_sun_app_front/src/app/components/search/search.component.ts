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
