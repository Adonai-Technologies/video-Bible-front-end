import React from "react";
import MainModel from "./MainModel";
import { Input } from "./UserInputs";
import Uploader from "./Uploader";


function ProductionModel({ modelOpen, setModelOpen, cast }) {
  return (
    <MainModel modelOpen={modelOpen} setModelOpen={setModelOpen}>
      <div className="inline-block sm:-4/5  border rounded-lg border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full  bg-main text-white ">
        <h2 className="text-3xl font-bold">{cast ? "Update Production Team" : "Create Production Team"}</h2>
        <form className="flex flex-col gap-6 text-left mt-6">
          <Input
            label="Production Team"
            placeholder={cast  ? cast.fullName : "Akua Konadu"}
            type="text"
            bg={false}
          />
            <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
               Production Team
            </p>
            <Uploader/>
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src={`/images/${cast ? cast.image : "video5.png"}`}
                alt={cast?.fullName}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          <button
            onClick={() => setModelOpen(false)}
            className="w-full flex-rows gap-2 py-3 text-lg transitions hover:bg-dry border-2 border-submain rounded bg-submain text-white"
          >
            {cast ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </MainModel>
  );
}

export default  ProductionModel;
