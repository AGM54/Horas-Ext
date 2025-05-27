// styles.ts
import styled from "@emotion/styled";
import Text from "~/components/atoms/Text";
import Button from "~/components/atoms/Button";

export const Container = styled.div`
  flex: 1;
  background-color: #203d5e;
  color: white;
  padding: 1.5rem;
  position: relative;
`;

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ActionsGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const WideButton = styled(Button)`
  padding: 0.5rem 2.5rem;
  min-width: 200px;
`;

export const YellowButton = styled(Button)`
  padding: 0.5rem 1.5rem;
  background-color: white;
  color: #fbbf24;
  border: 1px solid #fbbf24;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    background-color: white;
  }
`;

export const Title = styled(Text)`
  && {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
  }
`;
