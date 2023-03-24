import { ShopList } from "../ShopList";
import { StyledView, Title } from "./styles";

export function RandomShops() {
    return (
        <StyledView>
            <Title>Lojas disponíveis</Title>
            <ShopList />
        </StyledView>
    )
}