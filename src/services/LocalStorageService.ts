class LocalStorageService {
  static isInit = false;
  static cookiesAllowed = false;

  static init() {
    if (this.isInit) {
      return;
    }

    // check if cookies are allowed
    const cookiesAllowed = localStorage.getItem('cookiesAllowed');
    if (cookiesAllowed === 'true') {
      this.cookiesAllowed = true;
    }

    this.isInit = true;
  }

  static get(key: string): string | null {
    this.init();
    if (!this.cookiesAllowed) {
      return null;
    }

    return localStorage.getItem(key);
  }

  static set(key: string, value: string): void {
    this.init();
    if (!this.cookiesAllowed) {
      return;
    }
    localStorage.setItem(key, value);
  }

  static remove(key: string) {
    this.init();
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }

  static allowCookies() {
    this.cookiesAllowed = true;
    localStorage.setItem('cookiesAllowed', 'true');
  }

  static cookiesAreAllowed() {
    this.init();
    return this.cookiesAllowed;
  }

  static rejectCookies() {
    this.cookiesAllowed = false;
    this.clear();
  }
}

export default LocalStorageService;
