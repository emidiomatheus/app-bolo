import { BedIcon, Cake, ShoppingBag, Trash } from "lucide-react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { useShops } from "../../../hooks/useShops";
import { InfoContainer, ShopImage, StyledView } from "./styles";

interface ItemProps {
    name: string;
    image?: string;
    itemId: string;
    isDefault: boolean;
}

export function Item({ name, image, itemId, isDefault }: ItemProps) {
    const { removeShop } = useShops()
    
    function handleRemoveShop() {
        removeShop(itemId)
    }
    
    return (
        <StyledView>
            <InfoContainer>
                {image ? <ShopImage source={image} alt={name} resizeMode="contain" /> : <Cake color='gray' size={64} />}
                <Text style={{marginLeft: 12}}>{name}</Text>
            </InfoContainer>
            {!isDefault && (
                <Pressable onPress={handleRemoveShop}>
                    <Trash color="red" size={24} />
                </Pressable>
            )}
        </StyledView>
    )
}