import { z } from "zod";

const BIG_TEXT_MIN = 3;
const BIG_TEXT_MAX = 80;
const SMALL_TEXT_MIN = 3;
const SMALL_TEXT_MAX = 60;

export const schema = z.object({
  big_text: z
    .string({ message: "big text is required" })
    .min(BIG_TEXT_MIN, `big text should be at least ${BIG_TEXT_MIN} characters`)
    .max(
      BIG_TEXT_MAX,
      `big text shouldn't be more than ${BIG_TEXT_MAX} characters`
    ),
  small_text: z
    .string({ message: "small text is required" })
    .min(
      SMALL_TEXT_MIN,
      `small text should be at least ${SMALL_TEXT_MIN} characters`
    )
    .max(
      SMALL_TEXT_MAX,
      `small text should be at least ${SMALL_TEXT_MAX} characters`
    ),
  link: z.string().url().or(z.literal("")),
});

export type FormSchema = z.infer<typeof schema>;
