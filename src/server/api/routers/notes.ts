import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const notesRouter = createTRPCRouter({
  //create
  newNote: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.notes.create({
        data: { title: input.title, description: input.description },
      });
    }),
});
