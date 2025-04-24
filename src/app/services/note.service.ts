import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Note {
  id: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notesSubject = new BehaviorSubject<Note[]>([]);
  notes$ = this.notesSubject.asObservable();

  constructor() {
    // Load notes from localStorage if available
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    this.notesSubject.next(savedNotes);
  }

  addNote(content: string) {
    const notes = this.notesSubject.getValue();
    const newNote: Note = { id: this.generateId(), content };
    const updatedNotes = [...notes, newNote];
    this.notesSubject.next(updatedNotes);
    this.saveToLocalStorage(updatedNotes);
  }

  updateNote(id: string, content: string) {
    const notes = this.notesSubject.getValue();
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, content } : note
    );
    this.notesSubject.next(updatedNotes);
    this.saveToLocalStorage(updatedNotes);
  }

  deleteNote(id: string) {
    const notes = this.notesSubject.getValue();
    const updatedNotes = notes.filter((note) => note.id !== id);
    this.notesSubject.next(updatedNotes);
    this.saveToLocalStorage(updatedNotes);
  }

  searchNotes(query: string) {
    const notes = this.notesSubject.getValue();
    return notes.filter((note) =>
      note.content.toLowerCase().includes(query.toLowerCase())
    );
  }

  private saveToLocalStorage(notes: Note[]) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  private generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
