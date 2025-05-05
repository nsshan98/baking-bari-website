"use client";
import { useShowCategories } from "@/hooks/custom/categoryQuery";
import { CategorySchemaType } from "@/schema-types/category-types";
import Image from "next/image";
import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const ShowCategory = () => {
    const { showCategories } = useShowCategories();
    console.log(showCategories.data);
    return (
        <div className="mt-4">
            <div className="grid grid-cols-4 justify-between gap-2">
                {
                    showCategories.data?.categories.map((category: CategorySchemaType, index: number) => (
                        <div key={index} className="flex justify-between items-center bg-base-200 rounded-lg">
                            <div className="p-2 flex gap-2 items-center justify-between">
                                <Image
                                    src={typeof category.category_image === "string"
                                        ? category.category_image
                                        : category.category_image instanceof File
                                            ? URL.createObjectURL(category.category_image)
                                            : "https://placehold.co/100x100"}
                                    alt={category?.category_name}
                                    width={50}
                                    height={50}
                                />
                                <div className="flex flex-col gap-1">
                                    <div>{category?.category_name}</div>
                                    <div className="text-xs uppercase font-semibold opacity-60">
                                        {category.category_type}
                                    </div>
                                </div>
                            </div>
                            <div className="grid">
                                <button className="btn tooltip tooltip-left" data-tip="Edit">
                                    <MdEdit size={20} />
                                </button>
                                <button className="btn tooltip tooltip-left" data-tip="Delete">
                                    <MdDelete size={20} />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ShowCategory;
