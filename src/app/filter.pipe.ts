import { Pipe, PipeTransform } from '@angular/core';
import { Note } from './models/note.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(notes: Note[], searchTerm: string): Note[] {
    if (!searchTerm) {
      return notes;
    }

    return notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
