"use client";
import { axiosClient } from "@/lib/axiosClient";
import { categorySchema, CategorySchemaType } from "@/schema-types/category-types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type UpdateCategoryProps = {
    categories: {
        category_name: string;
        category_type: string;
    }
}
const UpdateCategory = ({ data }: { data: UpdateCategoryProps }) => {
    console.log(data)
    const { control, handleSubmit } = useForm<CategorySchemaType>({
        values: {
            category_name: data.categories.category_name,
            category_type: data.categories.category_type,
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
        if (res.status === 200) {
            const categoryItem = {
                category_name: data.category_name,
                category_type: data.category_type,
                category_image: res.data.data.display_url,
            };
            await axiosClient.post(`/category/`, categoryItem);
            toast.success("Category Created Successfully")
        }
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
                        <label className="label">Upload Images</label>
                        <Controller
                            name="category_image"
                            control={control}
                            render={({ field: { onChange }, fieldState: { error } }) => (
                                <>
                                    <input
                                        type="file"
                                        className={`file-input w-full ${error ? "border-red-500" : ""
                                            }`}
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            onChange(file)
                                        }}
                                    />
                                    {error && (
                                        <span className="text-error">{error.message}</span>
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
