import { FC, useRef } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import FeedbackModalProps from "../interfaces/FeedbackModalProps.interface";

const FeedbackModal: FC<FeedbackModalProps> = ({ name, open, setOpen }) => {
  const initialFocusRef = useRef(null);

  return (
    <>
      <Dialog
        className="relative z-10 font-chakra-petch"
        open={open}
        onClose={setOpen}
        initialFocus={initialFocusRef}
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
              <div className="bg-primary px-4 pb-4 pt-3 md:pt-5 sm:p-6 sm:pb-4">
                <DialogTitle
                  as="h2"
                  className="text-center text-lg md:text-2xl font-bold leading-6 mb-2 md:mb-0 text-secondary"
                >
                  Hi, {name}!
                </DialogTitle>
                <section className="w-full flex flex-col gap-y-4 md:gap-y-0 justify-center items-center md:flex-row">
                  <div className="mt-2 md:mt-4 w-full text-center">
                    <p className="mb-5 text-lg">
                      Thank you! <br /> I will get back to you as soon as
                      possible.
                    </p>
                  </div>
                </section>
              </div>
              <div className="bg-primary flex px-4 md:pt-1 pb-3 sm:px-6">
                <button
                  type="button"
                  className="bg-tertiary py-3 px-8 outline-none  text-white font-bold shadow-md shadow-primary rounded-xl mb-2 inline-flex w-full justify-center   text-sm sm:mt-0"
                  onClick={() => setOpen(false)}
                  ref={initialFocusRef}
                >
                  Close modal
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default FeedbackModal;
