
import { defaultColors } from "../../../app/theme/src/colors";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

export default function NuevaSeccionForm() {
  return (
    <form className="space-y-4">
      <label className="block">
        <Text variant="body">Curso:</Text>
        <select
          className={`
            mt-1 w-full bg-transparent 
            border-b border-gray-400 
            text-[${defaultColors.primaryDark}] 
            focus:outline-none
          `}
        >
          <option value="">Seleccionar</option>
          <option value="matematicas">Matemáticas</option>
          <option value="historia">Historia</option>
        </select>
      </label>

      <div className="space-y-2">
        <Button fullWidth>Registrar nuevo curso</Button>
        <Button
          fullWidth
          className={`
            bg-white 
            text-[${defaultColors.primaryDark}] 
            border border-[${defaultColors.primaryDark}] 
            hover:bg-[${defaultColors.G1}]
          `}
        >
          Crear
        </Button>
      </div>
    </form>
  );
}
