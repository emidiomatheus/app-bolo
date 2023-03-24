import { Shop } from "../components/ShopList";

export const DEFAULT_SHOPS: Shop[] = [
    {
        id: "1",
        name: 'Isabela Akkari',
        image: require('../assets/isabela-akkari.png'),
        isDefault: true
    },
    {
        id: "2",
        name: 'Sodiê Doces',
        image: require('../assets/logo-sodie.png'),
        isDefault: true
    },
    {
        id: "3",
        name: 'Supremo Bolos Caseiros',
        image: require('../assets/supremo.png'),
        isDefault: true
    },
    {
        id: "4",
        name: 'Fábrica de Bolos Vó Alzira',
        image: require('../assets/vo-alzira.png'),
        isDefault: true
    },
]