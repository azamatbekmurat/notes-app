import { Component } from '@angular/core';
import { NoteService } from './services/note.service';
import { CommonModule } from '@angular/common';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    NoteFormComponent,
    NoteListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private noteService: NoteService) {}

  onAddNote(noteText: string) {
    this.noteService.addNote(noteText);  // Call the service to add the note
  }
}
