import styled from "styled-components";

export const SplashPage = () => {
  const StyledSplashDiv = styled.div`
    height: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: slategray;
  `;

  const StyledSplashWrapper = styled.div`
    /* max-width: var(--maxPrimaryPageWidth); */
    width: 100vh;
    height: 100vh;
    background-color: blanchedalmond;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 30px;
    padding-bottom: 30px;
  `;

  const StyledSplashH2 = styled.h2`
    font-size: 3em;
    font-weight: 700;
    line-height: 1;
  `;

  const StyledSplashH3 = styled.h3`
    font-size: 2em;
    font-weight: 600;
    margin: 0;
  `;

  const StyledImage = styled.img`
    width: auto;
    height: auto;
  `;
  return (
    <StyledSplashDiv>
      <StyledSplashWrapper>
        <StyledSplashH2>Welcome.</StyledSplashH2>
        <StyledSplashH3>
          Millions of movies, TV shows and people to discover. Explore now.
        </StyledSplashH3>
      </StyledSplashWrapper>
      <StyledImage src="/images/movie-popcorn.jpg" />
    </StyledSplashDiv>
  );
};
