/* eslint-disable no-unused-vars */
import React from "react";
import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoEye } from "react-icons/go";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6  px-5 py-3";

// Rows
const Rows = (video, i, admin) => {
  return (
    <tr key={i}>
      <td className={`${Text}`}>
        <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
          <img
            className="h-16 w-full object-cover"
            src={`/images/${video.titleImage}`}
            alt={video?.name}
          />
        </div>
      </td>
      <td className={`${Text} truncate`}>{video.name}</td>
      <td className={`${Text}`}>{video.category}</td>
      <td className={`${Text}`}>{video.language}</td>
      <td className={`${Text}`}>{video.year}</td>
      <td className={`${Text}`}>{video.time}</td>
      <td className={`${Text} float-right flex-rows gap-2`}>
        {admin ? (
          <>
            <button className=" border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
              Edit <FaEdit className="text-green-500" />
            </button>
            <button className=" border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
              <MdDelete className="bg-submain rounded text-white flex-colo w-6 h-6" />
            </button>
          </>
        ) : (
          <>
            <button className=" border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
              Download <FaCloudDownloadAlt className="text-green-500" />
            </button>

            <Link
              to={`/video/${video?.name}`}
              className="bg-submain text-white rounded flex-colo w-6 h-6"
            >
              <GoEye />
            </Link>
          </>
        )}
      </td>
    </tr>
  );
};

// Table
function Table({ data, admin }) {
  const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
  const Text = "text-sm text-left leading-6  px-5 py-3";
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divided-border">
        <thead>
          <tr className="bg-dryGray">
            <th scope="col" className={`${Head}`}>
              Image
            </th>
            <th scope="col" className={`${Head}`}>
              Name
            </th>
            <th scope="col" className={`${Head}`}>
              Category
            </th>
            <th scope="col" className={`${Head}`}>
              Language
            </th>
            <th scope="col" className={`${Head}`}>
              Year
            </th>
            <th scope="col" className={`${Head}`}>
              Hours
            </th>
            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((video, i) => Rows(video, i, admin))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
