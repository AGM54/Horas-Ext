
import styled from "@emotion/styled";

export const StyledSelect = styled.select`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  border: 2px solid ${({ theme }) => theme.colors.primaryDark};
  background-color: white;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: none; /*
  }

  &::placeholder {
    color: #6b7280;
  }

  option {
    color: black;
  }
`;
