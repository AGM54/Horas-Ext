import styled from '@emotion/styled'

export const MainWrapper = styled.main(({theme}) => ({
    display: 'flex',
    width:'100%',
    height: '100%',
    backgroundColor: theme.colors.primaryDark
}))