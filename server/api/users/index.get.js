import User from "../../models/User";

export default defineEventHandler(async event => {
  const users = await User.find().select('-senha');

  return users;
});

