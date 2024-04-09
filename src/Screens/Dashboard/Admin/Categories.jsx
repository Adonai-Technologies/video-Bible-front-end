import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import { HiPlusCircle } from "react-icons/hi";
import Table2 from "../../../Components/Table2";
import { CategoriesData } from "../../../Data/CategoryData";
import CategoryModel from "../../../Components/CategoryModel";

function Categories() {
  const [modelOpen, setModelOpen] = useState(false);
  const [category, setCategory] = useState();

  const onEditFunction = (id) => {
    setCategory(id);
    setModelOpen(!modelOpen);
  };

  useEffect(() => {
    if (modelOpen === false) {
      setCategory();
    }
  }, [modelOpen]);

  return (
    <SideBar>
      <CategoryModel
        modelOpen={modelOpen}
        setModelOpen={setModelOpen}
        category={category}
      />
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Categories</h2>

          <button
            onClick={() => setModelOpen(true)}
            className="bg-submain flex-rows gap-4 font-medium transitions hover:bg-main border border-submain text-white py-2 px-4 rounded"
          >
            <HiPlusCircle /> Create
          </button>
        </div>
        <Table2
          data={CategoriesData}
          users={false}
          onEditFunction={onEditFunction}
        />
      </div>
    </SideBar>
  );
}

export default Categories;
