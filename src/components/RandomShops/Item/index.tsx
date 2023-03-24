import { Text, View } from "react-native"
import { Shop } from "../../../@types/ShopType"
import { ShopImage } from "./styles"

interface ItemProps {
    item: Shop
}

export function Item({ item }: ItemProps) {
    return (
        <View style={{
            alignItems: 'center',
            flex: 1,
        }}>
            <ShopImage source={item.image} resizeMode="contain" alt={item.name} />
            <Text>{item.name}</Text>
        </View>
    )
}