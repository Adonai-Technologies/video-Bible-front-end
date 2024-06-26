/* eslint-disable no-unused-vars */
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6  px-5 py-3";

//<<--------- --------- Rows-------------------->>

const Rows = (data, i, users, onEditFunction) => {
  return (
    <tr key={i}>
      {/* Users */}
      {users ? (
        <>
          <td className={`${Text}`}>
            <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
              <img
                className="h-16 w-full object-cover"
                src={`/images/${data.image ? data.image : "user.png"}`}
                alt={data?.fullName}
              />
            </div>
          </td>
          <td className={`${Text}`}>{data?._id ? data?._id : "1234rty"}</td>
          <td className={`${Text}`}>
            {data.createAt ? data.createAt : "7th March 2024"}
          </td>
          <td className={`${Text}`}>{data.fullName}</td>
          <td className={`${Text}`}>{data.email}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            <button className=" border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
              <MdDelete className="bg-submain rounded text-white flex-colo w-6 h-6" />
            </button>
          </td>
        </>
      ) : (
        // Categories
        <>
          <td className={`${Text} font-bold`}>1234rty</td>
          <td className={`${Text}`}>
            {data.createAt ? data.createAt : "7th March 2024"}
          </td>
          <td className={`${Text}`}>{data.title}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            <button
              onClick={() => onEditFunction(data)}
              className=" border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2"
            >
              Edit <FaEdit className="text-green-500" />
            </button>
            <button className=" border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
              <MdDelete className="bg-submain rounded text-white flex-colo w-6 h-6" />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

//<<< ----------- Table ----------->>>>//

function Table2({ data, users, onEditFunction }) {
  const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
  const Text = "text-sm text-left leading-6  px-5 py-3";
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divided-border">
        <thead>
          <tr className="bg-dryGray">
            {users ? (
              <>
                <th scope="col" className={`${Head}`}>
                  Image
                </th>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Full Name
                </th>
                <th scope="col" className={`${Head}`}>
                  Email
                </th>
              </>
            ) : (
              <>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Title
                </th>
              </>
            )}

            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((data, i) => Rows(data, i, users, onEditFunction))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
