import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from './models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notes: Note[] = [];
  private notesSubject: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>(this.notes);

  constructor() {}

  getNotes() {
    return this.notesSubject.asObservable();
  }

  addNote(note: Note) {
    this.notes.push(note);
    this.notesSubject.next(this.notes);
  }

  updateNote(updatedNote: Note) {
    const index = this.notes.findIndex((note) => note.id === updatedNote.id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
      this.notesSubject.next(this.notes);
    }
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.notesSubject.next(this.notes);
  }
}
