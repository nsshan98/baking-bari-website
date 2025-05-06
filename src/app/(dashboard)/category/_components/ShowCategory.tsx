"use client";
import { useShowCategories } from "@/hooks/custom/categoryQuery";
import { CategorySchemaType } from "@/schema-types/category-types";
import React from "react";
import CategoryGrid from "./CategoryGrid";


const ShowCategory = () => {
    const { showCategories } = useShowCategories();
    return (
        <div className="mt-4">
            <div className="grid grid-cols-4 justify-between gap-2">
                {
                    showCategories.data?.categories?.map((category: CategorySchemaType, index: number) => (
                        <CategoryGrid key={index} category={category} />
                    )
                    )
                }
            </div>
        </div>
    );
};

export default ShowCategory;
