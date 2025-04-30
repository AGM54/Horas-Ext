import styled from "@emotion/styled"

export const ModalOverlay = styled.div({
    zIndex: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height:"100%",
    position:"absolute",
    justifyContent:"center",
    alignContent:"center",
    display:"flex"
})

export const ModalContainer = styled.div(({theme}) => ({
    backgroundColor: theme.colors.G0,
    borderRadius: theme.sizes.sm,
    padding: theme.sizes.md
}))