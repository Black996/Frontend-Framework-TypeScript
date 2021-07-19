type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on(eventName: string, callback: Callback): void {
    if (!this.events[eventName]) {
      this.events[eventName] = Array(callback);
    } else {
      this.events[eventName].push(callback);
    }
  }

  trigger(eventName: string): void {
    // Trigger the callback functions associated with the event message if there are any;
    this.events[eventName] && this.events[eventName].forEach((cb) => cb());
  }
}
