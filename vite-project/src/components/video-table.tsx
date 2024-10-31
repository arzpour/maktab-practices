import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { videoActions } from "../redux/features/video.slice";
import { IForm } from "../types/video.type";

export const VideoTable: React.FC = () => {
  const getVideo = useAppSelector((state) => state.video.list);

  const dispatch = useAppDispatch();

  const removeVideo = (id: number) => {
    dispatch(videoActions.remove(id));
  };

  const sortTableBy = (key: keyof IForm) => {
    dispatch(videoActions.sortTable(key));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 w-[98%] sm:w-3/4 lg:w-1/2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 font-bold cursor-pointer"
              onClick={() => sortTableBy("name")}
            >
              Video name
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-bold cursor-pointer"
              onClick={() => sortTableBy("rating")}
            >
              Rating
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-bold cursor-pointer"
              onClick={() => sortTableBy("genre")}
            >
              Genre
            </th>
            <th scope="col" className="px-6 py-3 font-bold">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {getVideo.map((el) => (
            <tr key={el.id} className="bg-white border-b dark:bg-gray-800">
              <td className="px-6 py-4 text-gray-600">{el.name}</td>
              <td className="px-6 py-4 text-gray-600">{el.rating}</td>
              <td className="px-6 py-4 text-gray-600">{el.genre}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => {
                    removeVideo(el.id);
                  }}
                  className="font-medium text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
