import { z } from '../../../../zod'
import { variableStringSchema } from '../../../utils'
import { blockBaseSchema } from '../../shared'
import { BubbleBlockType } from '../constants'

export const embedBubbleContentSchema = z.object({
  url: z.string().optional(),
  height: z.number().or(variableStringSchema).optional(),
})

export const embedBubbleBlockSchema = blockBaseSchema.merge(
  z.object({
    type: z.enum([BubbleBlockType.EMBED]),
    content: embedBubbleContentSchema.optional(),
  })
)

export type EmbedBubbleBlock = z.infer<typeof embedBubbleBlockSchema>
