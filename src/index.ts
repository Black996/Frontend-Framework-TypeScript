import { UserList } from "./views/UserList";
import { User } from "./models/User";

const users = User.buildUserCollection();

users.on("change", () => {
  console.log("triggered");
  const root = document.getElementById("root");
  console.log(root);

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
