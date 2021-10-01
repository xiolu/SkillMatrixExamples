import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class MatPaginatorIntlCro extends MatPaginatorIntl
{
  itemsPerPageLabel = `Einträge`;
  nextPageLabel = `Nächste`;
  previousPageLabel = `Vorherige`;
  getRangeLabel = (page: number, pageSize: number, length: number) =>
  {
    const of = `von`;
    if (length === 0 || pageSize === 0)
    {
      return `0 ${of} ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} – ${endIndex} ${of} ${length}`;
  }
}
