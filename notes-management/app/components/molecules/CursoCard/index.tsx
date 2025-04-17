interface CursoCardProps {
    nombre: string;
  }
  
  export default function CursoCard({ nombre }: CursoCardProps) {
    return (
      <div className="bg-white text-[#1f3552] rounded shadow flex flex-col justify-end h-40 overflow-hidden">
        <div className="p-3 font-medium">{nombre}</div>
      </div>
    );
  }
  