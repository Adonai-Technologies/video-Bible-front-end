import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef } from "react";
import { IoClose } from "react-icons/io5";
function MainModel({ modelOpen, setModelOpen, children }) {
  const cancelButtonRef = useRef();
  return (
    <>
      <Transition show={modelOpen} as={Fragment} appear>
        <Dialog
          as="div"
          className="fixed inset-0 z-30 overflow-y-auto text-center "
          initialFocus={cancelButtonRef}
          onClose={() => setModelOpen(false)}
        >
          <div className="min-h-screen px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="inset-0 bg-black opacity-60" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {children}
            </Transition.Child>
            <div className="absolute right-5 top-5">
              <button
                onClick={() => setModelOpen(false)}
                type="button"
                className="transitions w-10 h-10 font-bold flex-colo text-base text-white bg-submain rounded-full hover:bg-white hover:text-submain"
              >
                <IoClose />
              </button>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default MainModel;
