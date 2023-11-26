import { UserButton } from "@clerk/nextjs";
import { connectDB } from "@/config/dbConfig";

connectDB();

const Home = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
