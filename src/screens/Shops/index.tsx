import { useState } from "react"
import { View } from "react-native"
import { styles } from "./styles"
import { List, Text, Modal, Portal, Provider, TextInput } from 'react-native-paper'
import { Button } from "../../components/Button"

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

export function Shops() {
    const [shops, setShops] = useState<Shop[]>(DEFAULT_SHOPS);

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', width: '100%', height: '80%', padding: 8};
    
    return (
        <Provider>
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
                
                    <Portal>
                        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                            <Text variant="titleLarge" style={{ marginBottom: 20 }}>Adicionar Loja</Text>
                            <TextInput label="Nome da loja" />
                            <Button onPress={showModal}>
                                Adicionar
                            </Button>
                        </Modal>
                    </Portal>
                    <Button onPress={showModal}>
                        Adicionar Loja
                    </Button>
                
            </View>
        </Provider>
    )
}