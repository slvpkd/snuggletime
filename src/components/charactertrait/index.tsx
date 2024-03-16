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
        className="block rounded-lg bg-indigo-600 uppercase px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Select Trait ({primaryCharacterTrait})
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
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
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
