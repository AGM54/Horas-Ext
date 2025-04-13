import Text from "../atoms/Text";
import Button from "../atoms/Button";
import NuevaSeccionForm from "../molecules/NuevaSeccionForm";

import { defaultColors } from "../../../app/theme/src/colors";

interface Props {
  onClose: () => void;
}

export default function ModalNuevaSeccion({ onClose }: Props) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: defaultColors.darkBlueBg }} 
    >
      <div
        className="rounded-xl shadow-lg w-full max-w-md p-6 relative"
        style={{ backgroundColor: defaultColors.white }} 
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-lg font-bold hover:opacity-80"
          style={{ color: defaultColors.orange }} 
        >
          ✕
        </button>

        <Text variant="H4" className="mb-4" style={{ color: defaultColors.primaryDark }}>
          Nueva sección
        </Text>

        <NuevaSeccionForm />
      </div>
    </div>
  );
}
