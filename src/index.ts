import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const root = document.getElementById("root");

if (root) {
  const userEdit = new UserEdit(
    root,
    User.buildUser({ name: "HEYYOU", age: 20 })
  );

  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error("Root element not found");
}
