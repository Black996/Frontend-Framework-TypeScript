import { User } from "../models/User";

interface EventsMap {
  [key: string]: () => void;
}

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.model.on("change", () => this.render());
  }

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

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((el) => {
        el.addEventListener(eventName, eventsMap[eventKey].bind(this));
      });
    }
  }

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
