import { randomUUID } from "expo-crypto";
import { useState } from "react";
import { ToastAndroid } from "react-native";
import { Button } from "../../components/Button";
import { useShops } from "../../hooks/useShops";
import { Input, StyledView, Title } from "./styles";

export function AddShop() {
    const [name, setName] = useState("");
    const { addShop } = useShops()

    function handleAddShop() {
        const id = randomUUID()
        addShop(id, name)
        setName("");
        ToastAndroid.show('Sucesso!', ToastAndroid.SHORT)
    }
    
    return (
        <StyledView>
            <Title>Adicionar Loja</Title>
            <Input placeholder="Digite o nome da loja" value={name} onChangeText={setName} />
            <Button onPress={handleAddShop}>
                Salvar
            </Button>
        </StyledView>
    )
}