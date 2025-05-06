import styled from "@emotion/styled"

export const ModalOverlay = styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
})

export const ModalContainer = styled.div(({theme}) => ({
    backgroundColor: 'white',
    borderRadius: theme.sizes.sm,
    padding: theme.sizes.lg,
    position: 'relative',
    maxWidth: '500px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    zIndex: 1001,
}))

export const CloseButtonWrap = styled.button(({ theme }) => ({
    position: 'absolute',
    top: theme.scale(1),
    right: theme.scale(1),
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: theme.sizes.xs,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        opacity: 0.7,
    },
}))