import React from "react";
import MainModel from "./MainModel";
import { Input } from "./UserInputs";


function CategoryModel({ modelOpen, setModelOpen, category }) {
  return (
    <MainModel modelOpen={modelOpen} setModelOpen={setModelOpen}>
      <div className="inline-block sm:-4/5  border rounded-lg border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full  bg-main text-white ">
        <h2 className="text-3xl font-bold">{category ? "Update" : "Create"}</h2>
        <form className="flex flex-col gap-6 text-left mt-6">
          <Input
            label="Category Name"
            placeholder={category ? category.title : "Actions"}
            type="email"
            bg={false}
          />
          <button
            onClick={() => setModelOpen(false)}
            className="w-full flex-rows gap-2 py-3 text-lg transitions hover:bg-dry border-2 border-submain rounded bg-submain text-white"
          >
            {category ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </MainModel>
  );
}

export default CategoryModel;
