import { useContext } from "react";
import { ShopsContext } from "../contexts/ShopsContext";

export function useShops() {
    const context = useContext(ShopsContext)

    return context;
}