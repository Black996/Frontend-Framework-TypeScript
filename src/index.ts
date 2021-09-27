import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const root = document.getElementById("root");

if (root) {
  const form = new UserForm(root, User.buildUser({ name: "HEYYOU", age: 20 }));

  form.render();
} else {
  throw new Error("Root element not found");
}
