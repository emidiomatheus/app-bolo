import { Image } from "react-native";
import { styles } from "./styles";

const logoImg = require("../../assets/logo.png");

export function Logo() {
    return (
        <Image source={logoImg} style={styles.container} resizeMode={"contain"} />
    )
}