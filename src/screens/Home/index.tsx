import { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "../../components/Button";
import { RandomShops } from "../../components/RandomShops";
import { Shop } from "../../components/ShopList";
import { useShops } from "../../hooks/useShops";
import { styles } from "./styles";

export function Home() {
    const { shops } = useShops()
    const [lojaSorteada, setLojaSorteada] = useState<Shop>({} as Shop)

    function sortear() {
        const lojaSorteada = Math.floor(Math.random() * shops.length);

        setLojaSorteada(shops[lojaSorteada])
    }

    return (
        <View style={styles.container}>
            <RandomShops />
            <Text style={{marginTop: 24}}>Loja Sorteada: {lojaSorteada.id ? lojaSorteada.name : 'Clique no botão abaixo para sortear a loja'}</Text>
            <Button onPress={sortear}>
                Sortear
            </Button>
        </View>
    )
}