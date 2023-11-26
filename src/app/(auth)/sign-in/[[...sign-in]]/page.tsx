import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-[#1d3557] to-[#457b9d]">
      <SignIn />
    </div>
  );
}
