import { useState } from "react";
import Input from "../../../app/components/atoms/Input";

export default function PasswordInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input {...props} type={show ? "text" : "password"} placeholder="Contraseña" />
      <span
        className="absolute right-3 top-2.5 text-gray-700 cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? "🙈" : "👁️"}
      </span>
    </div>
  );
}