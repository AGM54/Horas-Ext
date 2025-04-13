import Text from "../atoms/Text";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import PasswordInput from "../molecules/PasswordInput";

export default function LoginCard({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="bg-[#e9eef8] p-8 rounded-lg shadow-lg w-96">
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 bg-gray-200 rounded-md relative flex items-center justify-center">
          <div className="absolute bottom-[-12px] w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-sm font-bold text-[#1f3552]">
            RTHI
          </div>
        </div>
      </div>

      <Text variant="H3" className="block text-center text-[#263959] mb-6">
        Iniciar Sesión
      </Text>

      <Input type="text" placeholder="Código" className="mb-4" />
      <PasswordInput className="mb-6" />
      <Button onClick={onLogin}>Iniciar Sesión</Button>
    </div>
  );
}
