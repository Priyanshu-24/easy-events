import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#1d3557] to-[#457b9d]">
      <SignUp />
    </div>
  );
}
