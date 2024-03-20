import { AppData } from "@/app/api/AppData";
import { useAppContext } from "@/context";
import React, { useState } from "react";

const CharacterTraitModal = () => {
  const [showModal, setShowModal] = useState(false);

  const { primaryCharacterTrait, handlePrimaryCharacterTraitChange } =
    useAppContext();

  return (
    <>
      <button
        className="bg-blue-600 hover:bg-blue-400 uppercase text-xs w-[250px] text-center text-white font-bold py-2  rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <span>&nbsp;Select Trait ({primaryCharacterTrait})</span>
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto ">
              {/*content*/}
              <div className="border-0 w-full rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Character Trait Selection
                  </h3>
                </div>
                <div className="relative p-6 flex-auto max-h-300">
                  {/* <div > */}

                  <div className=" flex max-h-64 overflow-y-auto flex-col flex-grow">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-8">
                      {AppData.CHARACTER_TRAITS.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="h-20 text-center text-sm rounded-lg bg-white hover:bg-gray-100"
                          >
                            <div
                              className="flex items-center gap-4"
                              onClick={() => {
                                handlePrimaryCharacterTraitChange(item.name);
                                setShowModal(false);
                              }}
                            >
                              <img
                                src={
                                  "/assets/Character_Traits/" + item.filename
                                }
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

export default CharacterTraitModal;
