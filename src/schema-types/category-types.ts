import { z } from "zod";

const fileSizeLimit = 5 * 1024 * 1024

const categoryTypes = z.array(z.string())

export const categorySchema = z.object({
    category_name: z.string().min(1, { message: 'Category name is required' }),
    category_type: z.string().min(1, { message: 'Category type is required' }),
    category_image: z.union([
        z.string().min(1, { message: 'Reqiured' }).url(),
        z
            .instanceof(File)
            .refine((file) =>
                ['image/jpg', 'image/jpeg', 'image/png', 'image/heic'].includes(file.type),
                { message: 'Invalid image file type.' }
            )
            .refine((file) => file.size <= fileSizeLimit, {
                message: 'File size should not exceed 5MB',
            }),
    ]),
    category_tag: categoryTypes
})

export const updateCategorySchema = z.object({
    category_name: z.string().min(1, { message: 'Category name is required' }),
    category_type: z.string().min(1, { message: 'Category type is required' }),
    category_image: z.union([
        z.string().min(1, { message: 'Reqiured' }).url(),
        z
            .instanceof(File)
            .refine((file) =>
                ['image/jpg', 'image/jpeg', 'image/png', 'image/heic'].includes(file.type),
                { message: 'Invalid image file type.' }
            )
            .refine((file) => file.size <= fileSizeLimit, {
                message: 'File size should not exceed 5MB',
            }),
    ]),
    category_tag: categoryTypes
})

export type CategorySchemaType = z.infer<typeof categorySchema>
export type UpdateCategorySchemaType = z.infer<typeof updateCategorySchema>