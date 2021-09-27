import { User } from "../models/User";

interface EventsMap {
  [key: string]: () => void;
}

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): EventsMap {
    return {
      "click:#set-random-age": this.onSetRandomAge,
    };
  }

  onSetRandomAge(): void {
    this.model.setRandomAge();
  }

  template(): string {
    return `
      <div>
        <h1>User Form<h1/>
        <p>User name: ${this.model.get("name")}</p>
        <p>User age: ${this.model.get("age")}</p>
        <input/>
        <button>Click Me!</button>
        <button id="set-random-age">Set Random Age</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      console.log(eventKey);
      const [eventName, selector] = eventKey.split(":");
      console.log(eventName, selector);

      fragment.querySelectorAll(selector).forEach((el) => {
        console.log(selector, el);

        el.addEventListener(eventName, eventsMap[eventKey].bind(this));
      });
    }
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
