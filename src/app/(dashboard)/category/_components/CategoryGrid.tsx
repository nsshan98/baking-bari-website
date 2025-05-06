"use client";
import Image from "next/image";
import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


type CategoryGridProps = {
    _id: string;
    category_name: string;
    category_type: string;
    category_image: string | File;
}

const CategoryGrid = ({ category }: { category: CategoryGridProps }) => {
    const { _id, category_name, category_type, category_image } = category

    const handleDeleteCategory = () => {
        console.log(_id)
    }
    return (
        <div className="flex justify-between items-center bg-base-200 rounded-lg">
            <div className="p-2 flex gap-2 items-center justify-between">
                <Image
                    src={typeof category_image === "string"
                        ? category_image
                        : category_image instanceof File
                            ? URL.createObjectURL(category_image)
                            : "https://placehold.co/100x100"}
                    alt={category_name}
                    width={50}
                    height={50}
                />
                <div className="flex flex-col gap-1">
                    <div>{category_name}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                        {category_type}
                    </div>
                </div>
            </div>
            <div className="grid">
                <button className="btn tooltip tooltip-left" data-tip="Edit">
                    <MdEdit size={20} />
                </button>
                <button onClick={handleDeleteCategory} className="btn tooltip tooltip-left" data-tip="Delete">
                    <MdDelete size={20} />
                </button>
            </div>
        </div>
    );
};

export default CategoryGrid
