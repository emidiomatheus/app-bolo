import { ButtonProps, StyledButton, StyledText } from "./styles";

export function Button({ children, ...rest }: ButtonProps) {
    return (
        <StyledButton {...rest}>
            <StyledText>{children}</StyledText>
        </StyledButton>
    )
}