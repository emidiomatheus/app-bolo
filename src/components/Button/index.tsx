import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
    children: React.ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.textButton}>{children}</Text>
        </TouchableOpacity>
    )
}