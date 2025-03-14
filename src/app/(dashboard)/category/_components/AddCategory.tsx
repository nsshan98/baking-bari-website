"use client";
import { categorySchema, CategorySchemaType } from "@/schema-types/category-types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
const AddCategory = () => {
    const openModel = () => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement
        modal?.showModal()
    }
    const closeModel = () => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement
        modal?.close()
    }
    const { control, handleSubmit } = useForm<CategorySchemaType>({
        defaultValues: {
            category_name: "",
            category_type: "",
        },
        resolver: zodResolver(categorySchema),
    });

    const onSubmit = (data: CategorySchemaType) => {
        console.log(data)
    }
    return (
        <div>
            <button className="btn" onClick={openModel}>Add Category</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModel}>✕</button>
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
            </dialog>
        </div>
    )
}

export default AddCategory
