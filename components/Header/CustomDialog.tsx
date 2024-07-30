import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

const CustomDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Custom Button to open the Dialog */}
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild>
          <button style={{ display: "none" }}></button>
        </Dialog.Trigger>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <Dialog.Content className="fixed inset-0 m-auto max-w-md rounded bg-white p-6 shadow-lg">
          <Dialog.Title className="text-lg font-bold">
            Dialog Title
          </Dialog.Title>
          <Dialog.Description className="mt-2">
            This is the dialog content.
          </Dialog.Description>
          <div className="mt-4">
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default CustomDialog;
