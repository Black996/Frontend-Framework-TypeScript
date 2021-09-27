import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const form = new UserForm(
  document.getElementById("root"),
  User.buildUser({ name: "HEYYOU", age: 20 })
);

form.render();
