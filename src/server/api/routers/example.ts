import { z } from "zod";
import fs from "fs/promises";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  exmpletsfile: publicProcedure.query(async () => {
    return await fs.readFile("./src/server/api/routers/example.ts", "utf8");
  }),
});
