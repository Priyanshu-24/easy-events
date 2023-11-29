import {
  getMongoDbUserIdOfLoggedInUser,
  handleNewUserRegistration,
} from "@/actions/users";

import { UserButton } from "@clerk/nextjs";
import { connectDB } from "@/config/dbConfig";

connectDB();

const Home = async () => {
  await handleNewUserRegistration();
  const mongoUserId = await getMongoDbUserIdOfLoggedInUser();

  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
