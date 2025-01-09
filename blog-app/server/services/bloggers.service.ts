import moment from "moment";
import { pb } from "../database/connection";

type getBloggersByCredentialsType = (
  _username: string,
  _password: string
) => Promise<IUser | undefined>;
export const getBloggersByCredentials: getBloggersByCredentialsType = async (
  username,
  password
) => {
  try {
    return await pb
      .collection("bloggers")
      .getFirstListItem(`username="${username}" && password="${password}"`);
  } catch {
    return undefined;
  }
};

type loginBloggerType = (userId: string, token: string) => Promise<boolean>;
export const loginBlogger: loginBloggerType = async (userId, token) => {
  try {
    const expiration = moment().add(30, "minutes").unix();
    console.log(expiration);

    await pb.collection("sessions").create({ userId, token, expiration });
    return true;
  } catch {
    return false;
  }
};

type authorizationType = (token: string) => Promise<boolean>;
export const authorization: authorizationType = async (token) => {
  try {
    const sessions: ISession = await pb
      .collection("sessions")
      .getFirstListItem(`token="${token}"`);
    if (!sessions) return false;
    const user = await pb
      .collection("bloggers")
      .getFirstListItem(`id="${sessions.userId}"`);
    if (!user) return false;
    const valid = moment(sessions.expiration * 1000).isAfter(moment());
    if (!valid) await pb.collection("sessions").delete(sessions.id);
    return valid;
  } catch {
    return false;
  }
};
