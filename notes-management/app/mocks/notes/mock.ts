import type { CourseData } from "~/interfaces/grades";

export const mockCoursesData: CourseData[] = [
	{
		id: "math",
		name: "Matemáticas",
		activities: [
			{ id: "act1", name: "Actividad 1", maxScore: 100 },
			{ id: "act2", name: "Actividad 2", maxScore: 100 },
			{ id: "act3", name: "Actividad 3", maxScore: 100 },
			{ id: "act4", name: "Actividad 4", maxScore: 100 },
			{ id: "act5", name: "Actividad 5", maxScore: 100 },
			{ id: "act6", name: "Actividad 6", maxScore: 100 },
			{ id: "act7", name: "Actividad 7", maxScore: 100 },
			{ id: "act8", name: "Actividad 8", maxScore: 100 },
			{ id: "act9", name: "Actividad 9", maxScore: 100 },
			{ id: "act10", name: "Actividad 10", maxScore: 100 },
			{ id: "act11", name: "Actividad 11", maxScore: 100 },
			{ id: "act12", name: "Actividad 12", maxScore: 100 },
			{ id: "act13", name: "Actividad 13", maxScore: 100 },
			{ id: "act14", name: "Actividad 14", maxScore: 100 },
		],
		students: Array(8).fill(null).map((_, i) => ({
			id: `std${i + 1}`,
			name: `Pedrito Pérez: 00${i + 1}`,
			grades: [
				{ activityId: "act1", score: Math.floor(Math.random() * 100) },
				{ activityId: "act2", score: Math.floor(Math.random() * 100) },
				{ activityId: "act3", score: Math.floor(Math.random() * 100) },
				{ activityId: "act4", score: Math.floor(Math.random() * 100) },
				{ activityId: "act5", score: Math.floor(Math.random() * 100) },
				{ activityId: "act6", score: Math.floor(Math.random() * 100) },
				{ activityId: "act7", score: Math.floor(Math.random() * 100) },
				{ activityId: "act8", score: Math.floor(Math.random() * 100) },
				{ activityId: "act9", score: Math.floor(Math.random() * 100) },
				{ activityId: "act10", score: Math.floor(Math.random() * 100) },
				{ activityId: "act11", score: Math.floor(Math.random() * 100) },
				{ activityId: "act12", score: Math.floor(Math.random() * 100) },
				{ activityId: "act13", score: Math.floor(Math.random() * 100) },
				{ activityId: "act14", score: Math.floor(Math.random() * 100) },
			],
		})),
	},
	{
		id: "hist",
		name: "Historia",
		activities: [
			{ id: "act1", name: "Ensayo", maxScore: 100 },
			{ id: "act2", name: "Presentación", maxScore: 100 },
			{ id: "act3", name: "Examen", maxScore: 100 },
		],
		students: Array(8).fill(null).map((_, i) => ({
			id: `std${i + 1}`,
			name: `Pedrito Pérez: 00${i + 1}`,
			grades: [
				{ activityId: "act1", score: Math.floor(Math.random() * 100) },
				{ activityId: "act2", score: Math.floor(Math.random() * 100) },
				{ activityId: "act3", score: Math.floor(Math.random() * 100) },
			],
		})),
	},
	{
		id: "phys",
		name: "Física",
		activities: [
			{ id: "act1", name: "Laboratorio 1", maxScore: 100 },
			{ id: "act2", name: "Laboratorio 2", maxScore: 100 },
			{ id: "act3", name: "Parcial", maxScore: 100 },
			{ id: "act4", name: "Final", maxScore: 100 },
		],
		students: Array(8).fill(null).map((_, i) => ({
			id: `std${i + 1}`,
			name: `Pedrito Pérez: 00${i + 1}`,
			grades: [
				{ activityId: "act1", score: Math.floor(Math.random() * 100) },
				{ activityId: "act2", score: Math.floor(Math.random() * 100) },
				{ activityId: "act3", score: Math.floor(Math.random() * 100) },
				{ activityId: "act4", score: Math.floor(Math.random() * 100) },
			],
		})),
	},
	{
		id: "prog",
		name: "Programación",
		activities: [
			{ id: "act1", name: "Proyecto 1", maxScore: 100 },
			{ id: "act2", name: "Proyecto 2", maxScore: 100 },
			{ id: "act3", name: "Proyecto 3", maxScore: 100 },
			{ id: "act4", name: "Proyecto Final", maxScore: 100 },
		],
		students: Array(8).fill(null).map((_, i) => ({
			id: `std${i + 1}`,
			name: `Pedrito Pérez: 00${i + 1}`,
			grades: [
				{ activityId: "act1", score: Math.floor(Math.random() * 100) },
				{ activityId: "act2", score: Math.floor(Math.random() * 100) },
				{ activityId: "act3", score: Math.floor(Math.random() * 100) },
				{ activityId: "act4", score: Math.floor(Math.random() * 100) },
			],
		})),
	},
];