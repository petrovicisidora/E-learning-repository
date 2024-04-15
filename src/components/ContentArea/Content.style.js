import styled from "styled-components";

export const StyledContentContainer = styled.div`
  width: auto;
  background-color: white;
  padding: 16px;
  margin-bottom: 20px;
`;

export const StyledImageContainer = styled.img`
  width: 55px;
  height: 55px;
  float: left;
  margin-right: 15px;
`;

export const StyledChildrenContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledContentDetailContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: flex-start;
`;

export const StyledContentTitle = styled.div`
  flex: 3.7;
  color: #303330a6;
  font-size: 20px;
  font-weight: 700;
`;

export const StyledContentTimeContainer = styled.div`
  flex: 0.8;
  text-align: start;
  color: #303330a6;
`;

export const StyledContentProgress = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const StyledContentText = styled.div`
  color: #303330a6;
`;
