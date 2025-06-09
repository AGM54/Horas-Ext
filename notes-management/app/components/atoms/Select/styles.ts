import styled from "@emotion/styled";

export const StyledSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1.5px solid ${({ theme }) => theme.colors.primaryDark};
  background-color: white;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 64, 128, 0.2); /* tono suave */
  }

  option {
    color: black;
  }
`;
