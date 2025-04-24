import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent {
  noteText = '';
  @Output() addNote = new EventEmitter<string>(); 

  onAddNote() {
    if (this.noteText.trim()) {
      this.addNote.emit(this.noteText.trim());
      this.noteText = '';
    }
  }
}
