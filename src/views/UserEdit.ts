import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserEdit extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <div id="user-show"></div>
        <div id="user-form"></div>
      </div>
    `;
  }
}
