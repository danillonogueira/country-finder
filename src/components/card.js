import styled from 'styled-components';

const StyledCard = styled.div`
  border: solid 1px #000;
  max-width: 400px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

function Card({ flag, name, population, region, capital }) {
  return (
    <StyledCard>
      <StyledImg alt="flag" src={flag}></StyledImg>
      <span>{name}</span>
      <span>{population}</span>
      <span>{region}</span>
      <span>{capital}</span>
    </StyledCard>
  );
}

export default Card;
