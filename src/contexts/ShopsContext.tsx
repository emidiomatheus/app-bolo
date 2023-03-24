import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";
import { DEFAULT_SHOPS } from "../database/shops";
import { Shop } from "../@types/ShopType";

interface ShopsProviderProps {
    children: ReactNode;
}

interface ShopsContextType {
    shops: Shop[],
    addShop: (name: string) => void;
    removeShop: (id: string) => void;
}

export const ShopsContext = createContext({} as ShopsContextType)

export function ShopsProvider({children}: ShopsProviderProps) {
    const [shops, setShops] = useState<Shop[]>([])
    const { getItem, setItem } = useAsyncStorage('@bolo:shops')
    
    useEffect(() => {
        try {
            getItem().then(json => {
                const storagedShops: Shop[] = json != null ? JSON.parse(json) : DEFAULT_SHOPS;
                if (storagedShops.length > 0) {
                    setShops(storagedShops)
                    return;
                }
                setShops(DEFAULT_SHOPS)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])
    
    async function addShop(id: string, name: string) {
        const updatedShops = [...shops]

        updatedShops.push({
            id: id,
            name: name,
            isDefault: false
        })

        setShops(updatedShops)
        await setItem(JSON.stringify(updatedShops))
    }

    async function removeShop(id: string) {
        const updatedShops = [...shops]
        const shopIndex = updatedShops.findIndex(shop => shop.id === id)

        if (shopIndex >= 0) {
            updatedShops.splice(shopIndex, 1)
            setShops(updatedShops)
            await setItem(JSON.stringify(updatedShops))
        }
    }

    return (
        <ShopsContext.Provider value={{shops, addShop, removeShop}}>
            {children}
        </ShopsContext.Provider>
    )
}