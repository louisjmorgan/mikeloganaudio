import styled from 'styled-components';

const StyledContactContainer = styled.div`
  display: block;
  margin: 10rem auto 3rem;

  max-width: 60vw;

  @media only screen and (min-width: 1200px) {
    margin-top: 3rem;
  }

  h2 {
    color: var(--color-text);
    font-family: var(--font-secondary);
    font-size: 3rem;
    font-weight: 700;
    width: 100%;
    margin: 0 auto;

    text-align: center;
  }
`;

const StyledContactInfo = styled.div`
  padding: 4rem 0;
  color: white;
  font-family: var(--font-primary);
  font-size: 1.75rem;
  margin: 0 auto;
  max-width: 50rem;
  line-height: 1.5;
  text-align: center;

  .email-link {
    margin: 0 auto;
    display: block;

    text-align: center;
  }
  a {
    display: inline-block;
    color: var(--color-text);
    font-weight: 700;
    margin-top: 2rem;
    margin-right: 2rem;
    font-size: 2rem;
    transition: 0.2s;
    line-height: 2rem;
    height: 100%;
    vertical-align: text-bottom;
    :hover {
      color: var(--color-link-hover);
    }
  }

  button {
    margin: 0 auto;
    width: auto;
    display: inline-block;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin-top: 2rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
    background-color: var(--color-text);
    font-weight: 700;
    box-shadow: none;
    border-style: solid;
    line-height: 1rem;
    vertical-align: bottom;
    :hover,
    :active {
      background-color: black;
      color: var(--color-text);
      cursor: pointer;
    }
  }
`;

const StyledContactForm = styled.form`
  display: block;
  color: white;
  margin: 0 auto;
  width: 100%;
  max-width: 40rem;
  text-align: center;
  
  font-family: var(--font-primary);

  label {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    display: inline-block;
    width: 50rem;
    max-width: 100%;
    text-align: left;
    @media only screen and (min-width: 1000px) {
      width: 19rem;
      max-width: 50%;
     
    }

    &[for="name"]{
      margin-right: 2rem;
    }
    &[for="message"], &[for="subject"]{
      width: 40rem;
      max-width: 100%;
    }
  }

 

  label span {
    display: block;
  }

  input,
  textarea {
    margin: 1rem 0 3rem;
    box-sizing: border-box;
    
    background-color: white;
    padding: 1.25rem 1rem;
    width: 100%;
    font-family: var(---font-primary);
    font-size: 1.25rem;
    border-radius: 0.5rem;
  }

  textarea {
    height: 10rem;

  }

  input {
    height: 1rem;
  
    background-color: white;
  }

  button {
    margin: 0 auto;
    width: 10rem;
    display: block;
    font-size: 1.75rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    background-color: var(--color-text);
    
    font-size: 1.5rem;
    font-weight: 700;
    transition: 0.2s;
    :hover {
      background-color: black;
      color: var(--color-text);
      cursor: pointer;
    }
  }
}
`;

export {
  StyledContactContainer,
  StyledContactForm,
  StyledContactInfo,
};
