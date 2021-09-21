import { User } from "./models/User";

// const user = new User({ id: 2, name: "newer name", age: 0 });

// user.on("save", () => {
//   console.log(user);
// });

// user.save();

const user = User.buildUser({ id: 2 });

user.on("change", () => {
  console.log(user);
});

user.fetch();
