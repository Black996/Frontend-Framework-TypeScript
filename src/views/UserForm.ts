import { User } from "../models/User";
import { View } from "../views/View";

interface EventsMap {
  [key: string]: () => void;
}

export class UserForm extends View {
  eventsMap(): EventsMap {
    return {
      "click:#set-random-age": this.onSetRandomAge,
      "click:#set-name-btn": this.onSetName,
    };
  }

  onSetRandomAge(): void {
    this.model.setRandomAge();
  }

  onSetName(): void {
    const nameInputEl = this.parent.querySelector("input");

    if (nameInputEl) {
      const name = nameInputEl.value;

      this.model.set({ name });
    }
  }

  template(): string {
    return `
      <div>
        <h1>User Form<h1/>
        <p>User name: ${this.model.get("name")}</p>
        <p>User age: ${this.model.get("age")}</p>
        <input/>
        <button id="set-name-btn">Update Name</button>
        <button id="set-random-age">Set Random Age</button>
      </div>
    `;
  }
}
