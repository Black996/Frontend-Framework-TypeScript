import { View, RegionsMap } from "./View";
import { User, UserProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";

export class UserEdit extends View<User, UserProps> {
  regionsMap(): RegionsMap {
    return {
      userShow: "#user-show",
      userForm: "#user-form",
    };
  }

  onRender() {
    const userShow = new UserShow(this.regions.userShow, this.model);
    userShow.render();
    const userForm = new UserForm(this.regions.userForm, this.model);
    userForm.render();
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
