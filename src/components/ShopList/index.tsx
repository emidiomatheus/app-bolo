import { FlatList } from "react-native";
import { useShops } from "../../hooks/useShops";
import { Item } from "./Item";

export function ShopList() {
    const { shops } = useShops()

    return (
        <FlatList
            data={shops}
            renderItem={({item}) => <Item name={item.name} image={item.image} itemId={item.id} isDefault={item.isDefault} />}
            keyExtractor={item => item.id}
            style={{ width: '100%' }}
        />
    )
}