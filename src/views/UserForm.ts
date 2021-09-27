import { User } from "../models/User";

interface EventsMap {
  [key: string]: () => void;
}

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): EventsMap {
    return {
      "click:button": this.onButtonClick,
      "mouseenter:h1": this.onTitleHover,
    };
  }

  onButtonClick(): void {
    console.log("You Clicked me!");
  }

  onTitleHover(): void {
    console.log("YOu hovered on the title");
  }

  template(): string {
    return `
      <div>
        <h1>User Form<h1/>
        <p>User name: ${this.model.get("name")}</p>
        <p>User age: ${this.model.get("age")}</p>
        <input/>
        <button>Click Me!</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      console.log(eventKey);
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach((el) => {
        el.addEventListener(eventName, eventsMap[eventKey]);
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
