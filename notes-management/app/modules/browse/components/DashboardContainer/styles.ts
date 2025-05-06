import styled from '@emotion/styled'

export const MainWrapper = styled.div(({theme}) => ({
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.primaryDark,
    display: 'flex',
    flexDirection: 'column'
}))