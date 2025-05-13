"use client";
import { categorySchema, CategorySchemaType } from "@/schema-types/category-types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CiCircleRemove } from "react-icons/ci";
import Image from "next/image";
import { useUpdateCategory } from "@/hooks/custom/categoryQuery";

type UpdateCategoryProps = {
    categories: {
        _id: string
        category_name: string;
        category_type: string;
        category_image: string;
        category_tag: string[];
    }
}
const UpdateCategory = ({ data }: { data: UpdateCategoryProps }) => {
    console.log(data)
    const [previewImage, setPreviewImage] = useState<string | null>();
    const fileRef = useRef<HTMLInputElement | null>(null);
    const { updateCategory } = useUpdateCategory(data?.categories?._id);

    const { control, handleSubmit } = useForm<CategorySchemaType>({
        values: {
            category_name: data?.categories?.category_name,
            category_type: data?.categories?.category_type,
            category_image: data?.categories?.category_image,
            category_tag: data?.categories?.category_tag,
        },
        resolver: zodResolver(categorySchema),
    });

    const image_upload_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${image_upload_key}`;

    const onSubmit = async (data: CategorySchemaType) => {
        const imageList = { image: data.category_image };
        const res = await axios.post(imageUploadUrl, imageList, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(res, 'img res')
        // if (res.status === 200) {
        const categoryItem = {
            category_name: data.category_name,
            category_type: data.category_type,
            category_image: res.data.data.display_url,
        };
        updateCategory.mutate(categoryItem, {
            onSuccess: () => {
                console.log('Updated')
            }
        })
        toast.success("Category Created Successfully")
        // }
    };
    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="">
                    <h2 className="text-center font-bold text-2xl">
                        Add New Category
                    </h2>

                    <div className="form-control">
                        <Controller
                            name="category_name"
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category Name</span>
                                    </label>
                                    <input
                                        {...field}
                                        type="text"
                                        className={`input input-bordered w-full ${error ? "input-error" : ""
                                            }`}
                                    />
                                    {error && (
                                        <label className="label">
                                            <span className="label-text-alt text-error">
                                                {error.message}
                                            </span>
                                        </label>
                                    )}
                                </div>
                            )}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category Type</span>
                        </label>
                        <Controller
                            name="category_type"
                            control={control}
                            render={({
                                field: { onChange, value },
                                fieldState: { error },
                            }) => (
                                <>
                                    <select
                                        className={`select select-bordered w-full ${error ? "select-error" : ""
                                            }`}
                                        value={value || ""}
                                        onChange={(e) => onChange(e.target.value)}
                                    >
                                        <option value="">
                                            Select Category Type
                                        </option>
                                        <option>Main Category</option>
                                        <option>Side Category</option>

                                    </select>
                                    {error && (
                                        <label className="label">
                                            <span className="label-text-alt text-error">
                                                {error.message}
                                            </span>
                                        </label>
                                    )}
                                </>
                            )}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">Upload Image</label>
                        <Controller
                            name="category_image"
                            control={control}
                            render={({ field: { onChange }, fieldState: { error } }) => (
                                <>
                                    <input
                                        hidden
                                        accept="image/*"
                                        ref={fileRef}
                                        type="file"
                                        className={`file-input w-full ${error ? "border-red-500" : ""
                                            }`}
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                setPreviewImage(URL.createObjectURL(file));
                                                onChange(file);
                                            }
                                        }}
                                    />

                                    {previewImage ? (
                                        <div className="avatar">
                                            <div
                                                onClick={() => fileRef?.current?.click()}
                                                className="w-24 h-24 rounded mt-5 ring"
                                            >
                                                <Image
                                                    src={previewImage || "https://placehold.co/10x10"}
                                                    alt="preview"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <div>
                                                <CiCircleRemove
                                                    onClick={() => {
                                                        setPreviewImage(null);
                                                        onChange(null);
                                                        if (fileRef.current) {
                                                            fileRef.current.value = "";
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div
                                                onClick={() => fileRef?.current?.click()}
                                                className="flex items-center justify-center w-24 h-full rounded ring mt-2"
                                            >
                                                <Image
                                                    src={data.categories.category_image}
                                                    alt="preview"
                                                    width={100}
                                                    height={100}
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {error && (
                                        <label className="label">
                                            <span className="label-text-alt text-error">
                                                {error.message}
                                            </span>
                                        </label>
                                    )}
                                </>
                            )}
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-success w-full mt-5">
                        Add Category
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateCategory
