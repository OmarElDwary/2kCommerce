import { AuthCredientialsValidator } from "../lib/account-credentials";
import { getPayload } from "../getPayload";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(AuthCredientialsValidator)
    .mutation(async ({ input }) => {
      const { email, password, firstName, lastName } = input;
      const payload = await getPayload();

      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: email,
          },
        },
      });

      if(users.length !== 0) throw new TRPCError({ code: 'CONFLICT' })

      await payload.create({
        collection: "users",
        data: {}
      })
    }),
});
