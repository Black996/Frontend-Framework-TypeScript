export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(newVal: T): void {
    Object.assign(this.data, newVal);
  }

  getAll(): T {
    return this.data;
  }
}
