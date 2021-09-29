import { View, RegionsMap } from "./View";
import { User, UserProps } from "../models/User";

export class UserEdit extends View<User, UserProps> {
  regionsMap(): RegionsMap {
    return {
      userShow: "#user-show",
      userForm: "#user-form",
    };
  }
  template(): string {
    return `
      <div>
        <div id="user-show"></div>
        <div id="user-form"></div>
      </div>
    `;
  }
}
