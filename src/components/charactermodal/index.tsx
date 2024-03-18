import { AppData } from "@/app/api/AppData";
import { useAppContext } from "@/context";
import React, { useState } from "react";

const CharacterModal = () => {
  const [showModal, setShowModal] = useState(false);

  const { primaryCharacter, handlePrimaryCharacterChange } = useAppContext();

  return (
    <>
      <button
        className="bg-blue-600 hover:bg-blue-400 uppercase text-xs  text-white font-bold py-2 px-8 rounded inline-flex items-center w-full"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM3.5 8v7.75c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75V8h-13ZM5 4.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75H5ZM7.25 5A.75.75 0 0 1 8 4.25h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V5ZM11 4.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V5a.75.75 0 0 0-.75-.75H11Z"
            clipRule="evenodd"
          />
        </svg>
        <span>&nbsp;Select Character ({primaryCharacter})</span>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto ">
              <div className="border-0 w-full rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Character Selection
                  </h3>
                </div>
                <div className="relative p-6 flex-auto max-h-300">
                  <div className=" flex max-h-64 overflow-y-auto flex-col flex-grow">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-8">
                      {AppData.CHARACTERS.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="h-20 text-center text-sm rounded-lg bg-white hover:bg-gray-100"
                          >
                            <div
                              className="flex items-center gap-4"
                              onClick={() => {
                                handlePrimaryCharacterChange(item.name);
                                setShowModal(false);
                              }}
                            >
                              <img
                                src={"/assets/Characters/" + item.filename}
                                alt=""
                                className="size-20 rounded-lg object-cover"
                              />

                              <div>
                                <p className="mt-0.5 text-gray-700">
                                  {item.label}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-blue-600 hover:bg-blue-400 text-sm text-white font-bold py-2 px-4 rounded inline-flex   text-center"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>&nbsp; Close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default CharacterModal;
