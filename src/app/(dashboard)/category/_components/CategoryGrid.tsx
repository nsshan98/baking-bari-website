"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import DeleteCategory from "./DeleteCategory";
import { useRouter } from "next/navigation";


type CategoryProps = {
    _id: string;
    category_name: string;
    category_type: string;
    category_image: {
        url: string,
        public_id: string;
    };
    open: boolean;
}

const CategoryGrid = ({ category }: { category: CategoryProps }) => {
    const [selectCategoryId, setSelectCategoryId] = useState<{
        _id: string | null
        openState: 'edit' | 'delete' | null
    }>({ _id: null, openState: null })

    const { _id, category_name, category_type, category_image } = category
    const router = useRouter()

    console.log(category)


    return (
        <div className="flex justify-between items-center bg-base-200 rounded-lg">
            <div className="p-2 flex gap-2 items-center justify-between">
                <Image
                    // src={typeof category_image === "string"
                    //     ? category_image
                    //     : category_image instanceof File
                    //         ? URL.createObjectURL(category_image)
                    //         : "https://placehold.co/100x100"}
                    src={category_image?.url}
                    alt={category_name}
                    width={50}
                    height={50}
                    priority
                    className="rounded-lg object-cover"

                />
                <div className="flex flex-col gap-1">
                    <div>{category_name}</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                        {category_type}
                    </div>
                </div>
            </div>
            {
                selectCategoryId._id === _id && (
                    <DeleteCategory category_id={_id} open={selectCategoryId.openState === 'delete'} onClose={() => {
                        setSelectCategoryId({ _id: null, openState: null })
                    }} />
                )
            }
            <div className="grid">
                <button onClick={() => router.push(`/category/${_id}`)} className="btn tooltip tooltip-left" data-tip="Edit">
                    <MdEdit size={20} />
                </button>
                <button onClick={() => {
                    setSelectCategoryId({ _id, openState: 'delete' })
                }} className="btn tooltip tooltip-left" data-tip="Delete">
                    <MdDelete size={20} />
                </button>
            </div>
        </div>
    );
};

export default CategoryGrid
