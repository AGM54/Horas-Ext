// app/components/atoms/Select/styles.ts
import styled from "@emotion/styled";

export const StyledSelect = styled.select`
  background: transparent;
  color: white;
  padding: 0.5rem;
  border: 1px solid white;
  border-radius: 0.25rem;
  appearance: none;
  outline: none;
  cursor: pointer;

  /* Estilo para cada opción dentro del dropdown */
  & > option {
    background: white;
    color: black;
  }

  /* Cuando navegas la lista con teclado o hover */
  & > option:checked,
  & > option:focus,
  & > option:hover {
    background: #f0f0f0;
    color: black;
  }
`;

