import { z } from "zod"

export const menuSchema = z.object({
    menuname: z.string().min(1, { message: 'Menu name is required' }),
    menutype: z.string().min(1, { message: 'Menu type is required' }),
    menuimage: z
        .custom<FileList>((val) => val instanceof FileList && val.length > 0, {
            message: "At least one menu image is required",
        }),
})

export type MenuSchemaType = z.infer<typeof menuSchema>
