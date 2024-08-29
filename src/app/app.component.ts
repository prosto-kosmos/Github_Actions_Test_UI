import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecordService } from './services/record.service';
import { Record } from './interfaces/record.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  records = signal<Record[]>([]);

  constructor(private recordService: RecordService) {
    this.loadRecords();
  }

  onForm(row?: Record): void {
    if (row) {
      // TODO: Edit row
    } else {
      const name = `new record ${Number(Math.random().toFixed(2)) * 100}`;
      this.recordService
        .createRecord({ name })
        .subscribe(() => this.loadRecords());
    }
  }

  onDelete(row: Record): void {
    this.recordService.deleteRecord(row.id).subscribe(() => this.loadRecords());
  }

  loadRecords(): void {
    this.recordService.getRecords().subscribe((records) => {
      this.records.set(records);
    });
  }
}
