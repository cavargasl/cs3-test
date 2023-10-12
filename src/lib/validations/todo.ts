import { z } from "zod";

export const CheckNewTodo = z.object({
  title: z.string().trim().min(2, {
    message: "Title is too short",
  }).max(50, {
    message: "Title is too long",
  })
})