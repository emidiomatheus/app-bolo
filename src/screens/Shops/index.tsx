import { Text, View } from "react-native"
import { styles } from "./styles"
import { Button } from "../../components/Button"
import { ShopList } from "../../components/ShopList"

export function Shops() {    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lojas disponíveis</Text>
            <ShopList />
        </View>
    )
}