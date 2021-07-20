import { Eventing } from "./Eventing";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(newVal: UserProps): void {
    Object.assign(this.data, newVal);
  }
}
