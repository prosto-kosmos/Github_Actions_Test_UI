import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Record, RecordCreate } from '../interfaces/record.interface';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  constructor(
    private http: HttpClient,
  ) {}

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>('api/records');
  }

  createRecord(record: RecordCreate): Observable<Record> {
    return this.http.post<Record>('api/record', record);
  }

  deleteRecord(recordId: number): Observable<void> {
    return this.http.delete<void>(`api/record/${recordId}`);
  }
}
