type TKey = "token";

export class LocalStorage {
  static getItem(key: TKey): string | null {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem(key);
    }
    return null;
  }

  static setItem(key: TKey, value: string): void {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, value);
    }
  }

  static removeItem(key: TKey): void {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(key);
    }
  }

  static clear(): void {
    if (typeof window !== "undefined") {
      window.localStorage.clear();
    }
  }
}
