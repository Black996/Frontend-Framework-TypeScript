import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const collection = new Collection<User, UserProps>(
  "http://localhost:3000/users",
  (jsonRecord: UserProps) => User.buildUser(jsonRecord)
);

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
