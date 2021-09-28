import { User, UserProps } from "../models/User";
import { View } from "../views/View";

interface EventsMap {
  [key: string]: () => void;
}

export class UserForm extends View<User, UserProps> {
  eventsMap(): EventsMap {
    return {
      "click:#set-random-age": this.onSetRandomAgeClick,
      "click:#set-name-btn": this.onSetNameClick,
      "click:#save-model": this.onSaveClick,
    };
  }

  onSetRandomAgeClick(): void {
    this.model.setRandomAge();
  }

  onSetNameClick(): void {
    const nameInputEl = this.parent.querySelector("input");

    if (nameInputEl) {
      const name = nameInputEl.value;

      this.model.set({ name });
    }
  }

  onSaveClick(): void {
    this.model.save();
  }

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get("name")}"/>
        <button id="set-name-btn">Update Name</button>
        <button id="set-random-age">Set Random Age</button>
        <button id="save-model">Save User</button>
      </div>
    `;
  }
}
