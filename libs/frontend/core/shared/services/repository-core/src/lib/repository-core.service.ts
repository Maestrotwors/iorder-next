import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class RepositoryCoreService {
  set(key: string, value: string, dbName?: string): void {
    localStorage.setItem(key, value)
  }

  get(key: string, dbName?: string): string | null {
    return localStorage.getItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
