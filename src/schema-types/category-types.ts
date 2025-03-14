import { z } from "zod";

const fileSizeLimit = 5 * 1024 * 1024

export const categorySchema = z.object({
    category_name: z.string().min(1, { message: 'Category name is required' }),
    category_type: z.string().optional(),
    category_image: z.instanceof(File).refine((file) => [
        'image/jpg',
        'image/jpeg',
        'image/png',
        'image/heic',
    ].includes(file.type), { message: 'Invalid image file type.' }).refine((file) => file.size <= fileSizeLimit, { message: 'File size should not exceed 5MB' }).optional()
})

export type CategorySchemaType = z.infer<typeof categorySchema>