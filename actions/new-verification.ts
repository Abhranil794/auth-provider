"use server";

import { getUserByEmail } from "@/data/user";
import { getverificationTokenByToken } from "@/data/verification-token";
import { db } from "@/lib/db";

export const newVerification = async (token: string) => {
  const existingtoken = await getverificationTokenByToken(token);

  if (!existingtoken) return { error: "Token does not exists!" };

  const hasExpired = new Date(existingtoken.expires) < new Date();

  if (hasExpired) return { error: "Token has expired!" };

  const existingUser = await getUserByEmail(existingtoken.email);

  if (!existingUser) return { error: "Email does not existing" };

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingtoken.email,
    },
  });
  await db.verificationToken.delete({
    where: { id: existingtoken.id },
  });
  return { success: "Email verified!" };
};
