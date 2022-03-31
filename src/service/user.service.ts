import UserModal, { UserInput } from "../models/user.models";

export const createUser = async (input: UserInput) => {
  try {
    return await UserModal.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
};
