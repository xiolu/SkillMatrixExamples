import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class LocalStorageService implements Storage {

  constructor() { }
  [name: string]: any;
  length: number;
  clear(): void
  {
    localStorage.clear();
  }
  getItem(key: string): string
  {
    return localStorage.getItem(key);
  }
  key(index: number): string
  {
    throw new Error('Method not implemented.');
  }
  removeItem(key: string): void
  {
    localStorage.removeItem(key);
  }
  setItem(key: string, value: string): void
  {
    localStorage.setItem(key, value);
  }
}
