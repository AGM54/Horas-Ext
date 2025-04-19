import { useState } from "react";
import components from "~/components";

const { Text } = components;

export default function NotasPage() {
  return (
    <div className="flex flex-col w-full h-full p-6 bg-[#203d5e] text-white">
      <div className="mb-6">
        <Text variant="H3">Notas</Text>
        <p className="mt-4">Bienvenido a la página de notas. Esta página está actualmente en desarrollo.</p>
      </div>
      
      <div className="bg-white text-black p-4 rounded-lg">
        <Text variant="body" color="primaryDark">
          Aquí se mostrarán las notas de los estudiantes pronto.
        </Text>
      </div>
    </div>
  );
}
