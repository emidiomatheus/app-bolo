import { useState } from "react";
import { View } from "react-native";
import { List, Text, Modal, Portal, Provider, TextInput } from 'react-native-paper'
import { Button } from "../../components/Button";
import { styles } from "./styles";

const DEFAULT_SHOPS: Shop[] = [
    {
        id: 1,
        name: 'Isabela Akkari',
        image: require('../../assets/isabela-akkari.png')
    },
    {
        id: 2,
        name: 'Sodiê Doces',
        image: require('../../assets/logo-sodie.png')
    },
    {
        id: 3,
        name: 'Supremo Bolos Caseiros',
        image: require('../../assets/supremo.png')
    },
    {
        id: 4,
        name: 'Fábrica de Bolos Vó Alzira',
        image: require('../../assets/vo-alzira.png')
    },
]

export interface Shop {
    id: number,
    name: string,
    image?: string
}

export function Home() {
    const [shops, setShops] = useState<Shop[]>(DEFAULT_SHOPS);
    const [lojaSorteada, setLojaSorteada] = useState<string>("")

    function sortear() {
        const lojaSorteada = Math.floor(Math.random() * shops.length);

        setLojaSorteada(shops[lojaSorteada].name)
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text variant="titleLarge" style={styles.title}>Lojas disponíveis</Text>
                {shops.map(shop => (
                    <List.Item 
                        key={shop.id}
                        title={shop.name}
                        left={props => !!shop.image && <List.Image style={styles.image} source={shop.image} alt={shop.name} />}
                        style={styles.shop}
                    />
                ))}
            </View>
            <Text variant="bodyLarge" style={{ marginBottom: 40 }}>
                Loja sorteada: {lojaSorteada}
            </Text>
            <Text>Clique no botão abaixo para sortear a loja</Text>
            <Button onPress={sortear}>
                Sortear
            </Button>
        </View>
    )
}