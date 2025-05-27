// app/modules/browse/pages/Maestros/styles.ts
import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});

export const Content = styled.div(({ theme }) => ({
  flex: 1,
  backgroundColor:  theme.colors.primaryDark,
  padding: theme.sizes.sm,
  overflowY: "auto",
  overflowX: "hidden",  
  width: "100%",
  boxSizing: "border-box",
}));
