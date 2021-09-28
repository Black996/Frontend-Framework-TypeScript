import { User } from "../models/User";
import { Model } from "../models/Model";

interface EventsMap {
  [key: string]: () => void;
}

export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on("change", () => this.render());
  }

  abstract eventsMap(): EventsMap;
  abstract template(): string;

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
