"use client";
import { useCreateMenuItem } from "@/hooks/custom/menuQuery";
import { axiosClient } from "@/lib/axiosClient";
import { menuSchema, MenuSchemaType } from "@/schema-types/menu-types";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Metadata } from "next";
import { Controller, useForm } from "react-hook-form";

// export const metadata: Metadata = {
//   title: "Baking Bari - Menu",
//   description: "",
// };

export const menuTypes = [
  { key: "cake-1", label: "Cake-1" },
  { key: "cake-2", label: "Cake-2" },
  { key: "cake-3", label: "Cake-3" },
  { key: "cake-4", label: "Cake-4" },
];

const MenuPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MenuSchemaType>({
    defaultValues: {
      menuname: "",
      menutype: "",
    },
    resolver: zodResolver(menuSchema),
  });

  const image_upload_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
  const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${image_upload_key}`;
  const { createMenuItem } = useCreateMenuItem();

  const onSubmit = async (data: MenuSchemaType) => {
    const imageList = { image: data.menuimage[0] };
    const res = await axiosClient.post(imageUploadUrl, imageList, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res, "response");
    if (res.status === 200) {
      const menuItem = {
        menuname: data.menuname,
        menutype: data.menutype,
        menuimage: res.data.data.display_url,
      };
      const menuResponse = await axiosClient.post("/menus", menuItem);
      console.log(menuItem);
    }
  };
  return (
    <div>
      <div className="relative min-h-11 bg-[url('/cover.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="p-4 relative flex flex-col justify-center items-center h-full">
          <h1 className="max-w-md text-center text-5xl text-white font-bold">
            Our Menu
          </h1>
          <p className="max-w-md text-white text-lg">
            Order our cakes and satisfy your cravings with every bite! Crafted
            with love and packed with flavor, our cakes are the perfect blend of
            indulgence and delight—made to match your sweetest desires.
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center p-4">
          <form
            className="card shadow-md p-6 w-96 bg-base-100"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-center font-bold text-2xl">Add New Item</h2>

              {/* Menu Name Input */}
              <div className="form-control">
                <Controller
                  name="menuname"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Menu Name</span>
                      </label>
                      <input
                        {...field}
                        type="text"
                        className={`input input-bordered w-full ${
                          error ? "input-error" : ""
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

              {/* Menu Type Select */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Menu Type</span>
                </label>
                <Controller
                  name="menutype"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <>
                      <select
                        className={`select select-bordered w-full ${
                          error ? "select-error" : ""
                        }`}
                        value={value || ""}
                        onChange={(e) => onChange(e.target.value)}
                      >
                        <option value="" disabled>
                          Select Menu Type
                        </option>
                        {menuTypes.map((type) => (
                          <option key={type.key} value={type.label}>
                            {type.label}
                          </option>
                        ))}
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

              {/* Image Upload */}
              <div className="form-control">
                <label className="label">Upload Images</label>
                <Controller
                  name="menuimage"
                  control={control}
                  render={({ field: { onChange }, fieldState: { error } }) => (
                    <>
                      <input
                        type="file"
                        multiple
                        className={`file-input w-full ${
                          error ? "border-red-500" : ""
                        }`}
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files && files.length > 0) {
                            onChange(files); // Update form state
                          }
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
              <button type="submit" className="btn btn-success w-full">
                Add Menu
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
