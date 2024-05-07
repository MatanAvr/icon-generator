import { X } from "lucide-react";
import DynamicIcon from "./DynamicIcon";
import dynamicIconImports from "lucide-react/dynamicIconImports";

type IconsModalProps = {
  closeModal: () => void;
  onClick: (newIcon: string) => void;
};

const IconsModal = ({ closeModal, onClick }: IconsModalProps) => {
  return (
    <dialog
      id="my_modal_1"
      className="modal bg-black/25"
      open={true}
      onClick={(e) => {
        const dialog = document.querySelector("dialog");
        if (e.target === dialog) {
          closeModal();
        }
      }}
    >
      <div
        className="modal-box flex items-start flex-col justify-start gap-2"
        style={{ overflowY: "hidden" }}
      >
        <div id="modal-title" className="flex flex-1 w-full justify-between">
          <h3 className="font-bold text-lg">Pick an icon!</h3>
          <button className="btn btn-ghos btn-sm" onClick={closeModal}>
            <X />
          </button>
        </div>
        <div className="divider" />
        <div className="flex flex-1 flex-wrap justify-center gap-2 overflow-auto">
          {Object.keys(dynamicIconImports).map((el, index) => {
            return (
              <button
                key={`icon-${index}`}
                className="btn btn-xs border border-primary"
                style={{
                  height: "45px",
                  width: "45px",
                }}
                onClick={() => {
                  onClick(el);
                  closeModal();
                }}
              >
                <DynamicIcon name={el as keyof typeof dynamicIconImports} />
              </button>
            );
          })}
        </div>
      </div>
    </dialog>
  );
};

export default IconsModal;
