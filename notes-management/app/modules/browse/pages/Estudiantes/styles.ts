import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflowX: "hidden",
});

export const Content = styled.div(({ theme }) => ({
  flex: 1,
  backgroundColor: "#1E3A5F",
  color: "white",
  padding: theme.sizes.sm,
  overflowY: "auto",       
  overflowX: "hidden",  
  width: "100%",        
  maxWidth: "100%",        
  boxSizing: "border-box", 
}));
