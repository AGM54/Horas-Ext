import Modal, { type ModalProps } from "@components/atoms/ModalWrap";
import React, { useState } from "react";
import { ModalContainer } from "./styles";
import components from "~/components";

const { Text, Input, Button } = components;

export interface NewActivityModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (activityName: string, points: number) => void;
}

const NewActivityModal: React.FC<NewActivityModalProps> = ({
    isOpen,
    onClose,
    onSubmit
}) => {
    const [activityName, setActivityName] = useState("");
    const [points, setPoints] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Validate inputs
        if (!activityName.trim()) {
            setError("El nombre de la actividad es requerido");
            return;
        }

        const pointsNum = parseInt(points, 10);
        if (isNaN(pointsNum) || pointsNum <= 0) {
            setError("Los puntos deben ser un número positivo");
            return;
        }

        // Call onSubmit with validated data
        onSubmit(activityName.trim(), pointsNum);
        
        // Reset form
        setActivityName("");
        setPoints("");
        setError("");
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContainer>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Text variant="H5" color="primary">Nueva Actividad</Text>
                    
                    <div>
                        <Text variant="body_large" color="primary">Nombre de la Actividad</Text>
                        <Input
                            value={activityName}
                            onChange={(e) => setActivityName(e.target.value)}
                            placeholder="Ej: Examen Parcial"
                            required
                        />
                    </div>

                    <div>
                        <Text variant="body_large" color="primary">Puntos Máximos</Text>
                        <Input
                            type="number"
                            value={points}
                            onChange={(e) => setPoints(e.target.value)}
                            placeholder="Ej: 100"
                            required
                            min="1"
                        />
                    </div>

                    {error && (
                        <Text variant="body_small" color="primaryDark" style={{ color: 'red' }}>
                            {error}
                        </Text>
                    )}

                    <div className="flex justify-end gap-2">
                        <Button type="submit" color="primary">
                            Crear Actividad
                        </Button>
                    </div>
                </form>
            </ModalContainer>
        </Modal>
    );
};

export default NewActivityModal;