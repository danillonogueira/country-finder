import styled from 'styled-components';

const StyledCard = styled.div`
  border: solid 1px #000;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

const Card = ({ country }) => {
  const { flag, name, population, region, capital } = country;

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
