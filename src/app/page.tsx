import { connectDB } from "@/config/dbConfig";
import { handleNewUserRegistration } from "@/actions/users";

connectDB();

const Home = async () => {
  await handleNewUserRegistration();

  return <div>Hello</div>;
};

export default Home;
