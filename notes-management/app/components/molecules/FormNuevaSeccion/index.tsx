import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import { defaultColors } from "@theme/src/colors";

export default function NuevaSeccionForm() {
  return (
    <form className="space-y-4">
      <label className="block">
        <Text variant="body" style={{ color: defaultColors.primaryDark }}>
          Curso:
        </Text>
        <select
          className="mt-1 w-full border-b text-sm focus:outline-none rounded px-2 py-1"
          style={{
            backgroundColor: "transparent",
            color: defaultColors.primaryDark,
            borderColor: defaultColors.G2,
          }}
        >
          <option value="">Seleccionar</option>
          <option value="matematicas">Matemáticas</option>
          <option value="historia">Historia</option>
        </select>
      </label>

      <div className="space-y-2">
        <Button
          fullWidth
          className="font-semibold"
          style={{
            backgroundColor: defaultColors.primary,
            color: defaultColors.white,
          }}
        >
          Registrar nuevo curso
        </Button>

        <Button
          fullWidth
          className="border font-semibold"
          style={{
            backgroundColor: defaultColors.white,
            color: defaultColors.primaryDark,
            borderColor: defaultColors.primaryDark,
          }}
        >
          Crear
        </Button>
      </div>
    </form>
  );
}
