import { fetchAPI } from "./api";
/*
Ces 2 fonctions étaient initialement dans Main.js, je les ai mis ici pour pouvoir les tester en isolant.
Sinon, pendant les tests, quand j'importais ces fonctions depuis Main.js, jest essayait d'import react-router-dom, ce qui ne fonctionnait pas même en mockant react-router-dom.
Ça fonctionne quand je les teste en isolant. Peut-être penser à les remettre dans Main.js lors de l'évaluation par les pairs si c'est dans les critères.
*/
export const initializeTimes = async (selectedDate) => {
    try {
        const times = await fetchAPI(selectedDate); // 🔥 Récupération des horaires du jour via l'API
        return times;
    } catch (error) {
        console.error("Error initializing times:", error);
        return [];
    }
};

export const updatesTimes = (state, action) => {
    switch (action.type) {
        case "SET_AVAILABLE_TIMES":
            return action.payload;
        default:
            return state;
    }
};