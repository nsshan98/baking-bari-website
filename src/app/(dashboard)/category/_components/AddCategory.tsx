"use client";
import {
    categorySchema,
    CategorySchemaType,
} from "@/schema-types/category-types";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CiCircleRemove } from "react-icons/ci";
import { HiOutlineUpload } from "react-icons/hi";
import { useCreateCategory } from "@/hooks/custom/categoryQuery";
import { isAxiosError } from "axios";

const AddCategory = () => {
    const [previewImage, setPreviewImage] = useState<string | null>();
    const fileRef = useRef<HTMLInputElement | null>(null);
    const openModel = () => {
        const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
        modal?.showModal();
    };
    const closeModel = () => {
        const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
        modal?.close();
    };
    const { control, handleSubmit } = useForm<CategorySchemaType>({
        defaultValues: {
            category_name: "",
            category_type: "",
            category_tag: [],
        },
        resolver: zodResolver(categorySchema),
    });

    const { createCategory } = useCreateCategory()

    const getFormData = (data: CategorySchemaType) => {
        const formData = new FormData()
        formData.append('category_name', data.category_name)
        formData.append('category_type', data.category_type)
        formData.append('category_image', data.category_image)
        data.category_tag.forEach((tag) => formData.append('category_tag', tag))

        return formData
    }

    const onSubmit = async (data: CategorySchemaType) => {
        const formData = getFormData(data)

        createCategory.mutate(formData, {
            onSuccess: () => {
                toast.success("Category created successfully")
                closeModel()
            },
            onError: (error) => {
                if (isAxiosError(error)) {
                    toast.error(error?.response?.data?.message)
                }
            }
        })

    };
    return (
        <div>
            <button className="btn" onClick={openModel}>
                Add Category
            </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={closeModel}
                    >
                        ✕
                    </button>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                                <option value="">Select Category Type</option>
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
                                                        className="w-24 rounded mt-5 ring"
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
                                                        className="flex items-center justify-center w-24 h-24 rounded ring"
                                                    >
                                                        <HiOutlineUpload className="text-6xl bg-slate-300 rounded-full p-3" />
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


                            <div className="form-control">
                                <Controller
                                    name="category_tag"
                                    control={control}
                                    render={({ field, fieldState: { error } }) => (
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Category Name</span>
                                            </label>
                                            <input
                                                {...field}
                                                className="checkbox"
                                                type="checkbox"
                                                value={"Test"}
                                                checked={field.value.includes("Test")}
                                                onChange={(e) => {
                                                    const value = e.currentTarget.checked ? [...field.value, e.currentTarget.value] : field.value.filter((value) => value !== e.currentTarget.value)
                                                    field.onChange(value)
                                                }}

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


                            {/* Submit Button */}
                            <button type="submit" className="btn btn-success w-full mt-5">
                                Add Category
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default AddCategory;
