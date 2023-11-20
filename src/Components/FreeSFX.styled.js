import styled from 'styled-components';

export const StyledButton = styled.a`
  width: 10rem;
  display: block;
  font-size: 1.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: var(--color-text);
  color: black;
  font-family: 'Rajdhani', sans-serif;
  text-decoration: none;
  text-align: center;

  font-size: 1.5rem;
  font-weight: 700;
  transition: 0.2s;
  :hover {
    background-color: var(--color-link-hover);
    color: white;
    cursor: pointer;
  }
`;

export const StyledSfxContentItem = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  text-align: left;
  margin: 2rem 0;
  
  &:nth-of-type(even) {
    align-items: end;
    text-align: right;
  }
  &:nth-of-type(even) .text-container {
    flex-direction: column;
    align-items: end;
   
   
  }
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    
    .text-container {
      padding-left: 5rem;
      padding-right: 0rem;
    }

    &:nth-of-type(even) {
      flex-direction: row-reverse;
      
      .text-container {
        padding-right: 5rem;
        padding-left: 0rem;
      }

    }
  
    .sfx-image {
      max-width: 30rem;
    }
  }
  .sfx-image {
    max-width: 20rem;
  }

  
  .text-container {
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    width: 100%;
    

   
    }

    h2 {
      color: var(--color-text);
      
      max-width: 90%;
      font-size: 2.625rem;
      margin-bottom: 2rem; 
      font-family: var(--font-secondary); 
      font-weight: 600;
      @media only screen and (min-width: 1000px) {
      
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
