import styled from 'styled-components';

const StyledMoreContentContainer = styled.div`
  margin: 8rem auto;
  max-width: 80%;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 12rem;
  @media only screen and (min-width: 1200px) {
    margin-top: 0;
  }
  @media only screen and (min-width: 1400px) {
    margin-top: 8rem;
  }
`;

const StyledContentItem = styled.div`
  display: flex;
  position: relative;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  
  margin: 0;

 

  @media only screen and (min-width: 1400px) {
    flex-direction: row;
    justify-content: space-between;

    &:nth-of-type(even) {
    flex-direction: row-reverse;
    text-align: right;
    }
    &:nth-of-type(even) .text-container {
      align-items: end;
      padding: 5rem 12rem 5rem 0rem;

    }
  }

  .video-container {
    position: relative;
    flex-basis: 100%;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    @media only screen and (min-width: 1400px) {
      padding-bottom: calc(56.25% *  0.7);
      flex-basis: 70%;
    }

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    padding: 5rem;
    @media only screen and (min-width: 1400px) {
      flex-basis: 1;
      max-width: 30%;
      padding: 5rem 0 5rem 12rem;
    }

   
    }

    h2 {
      color: var(--color-text);
      
      max-width: 90%;
      font-size: 2.625rem;
      margin-bottom: 2rem; 
      font-family: var(--font-secondary); 
      font-weight: 600;
      @media only screen and (min-width: 1400px) {
      
        width: 28ch;  
      }

    }
    p {
      color: white;
      font-size: 1.5rem;
      line-height: 1.7;
      font-weight: 200;
      font-family: var(--font-primary);
  
    }
  }
`;

export { StyledMoreContentContainer, StyledContentItem };
