import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService, Note } from '../../services/note.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.notes$.subscribe((notes) => {
      this.notes = notes;
    });
  }

  deleteNote(id: number): void {
    this.noteService.deleteNote(id);
  }
}
