import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Note {
  id: number;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notesSubject = new BehaviorSubject<Note[]>([]);
  notes$ = this.notesSubject.asObservable();

  constructor() {}

  addNote(noteText: string): void {
    const newNote: Note = {
      id: Date.now(),
      text: noteText,
    };
    this.notesSubject.next([newNote, ...this.notesSubject.value]);
  }

  deleteNote(id: number): void {
    const updatedNotes = this.notesSubject.value.filter((note) => note.id !== id);
    this.notesSubject.next(updatedNotes);
  }
}
