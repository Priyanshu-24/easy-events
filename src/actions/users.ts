import UserModel from "@/models/user-model";
import { connectDB } from "@/config/dbConfig";
import { currentUser } from "@clerk/nextjs/server";

connectDB();

export const handleNewUserRegistration = async () => {
  try {
    const loggedInUser = await currentUser();

    //check if user exits
    const userExists = await UserModel.findOne({
      clerkUserId: loggedInUser?.id,
    });
    if (userExists) {
      return userExists;
    }

    // if not exits then create a new user
    const newUser = new UserModel({
      userName: loggedInUser?.username,
      email: loggedInUser?.emailAddresses[0]?.emailAddress,
      clerkUserId: loggedInUser?.id,
    });

    await newUser.save();
    return newUser;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getMongoDbUserIdOfLoggedInUser = async () => {
  try {
    const loggedInUser = await currentUser();
    const userInMongoDB = await UserModel.findOne({
      clerkUserId: loggedInUser?.id,
    });

    if (userInMongoDB) return userInMongoDB?._id;
  } catch (error: any) {
    throw new Error(error);
  }
};
