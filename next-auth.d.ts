import { UserRole } from "@prisma/client";
import NextAuth, { type DafaultSession } from "next-auth";

export type ExtendedUser = DafaultSession["user"] & {
  role: UserRole;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
