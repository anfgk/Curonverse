import { useState, useEffect } from "react";
import { HealingRoutine } from "@/data/types";

export const useHealingRoutine = () => {
    const [healingRoutine, setHealingRoutine] = useState<HealingRoutine>();

    useEffect(() => {
        const storedRoutine = sessionStorage.getItem("healingRoutine");
        if (storedRoutine) {
            try {
                const parsed: HealingRoutine = JSON.parse(storedRoutine);
                setHealingRoutine(parsed);
            } catch (e) {
                console.error("Failed to parse healing routine from session storage:", e);
            }
        }
    }
    , []);

    return healingRoutine;
}