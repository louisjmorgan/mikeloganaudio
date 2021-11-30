import styled from 'styled-components';

const StyledFooterContainer = styled.footer`
  display: block;
  margin: 0 auto;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 3rem;

  .footer-cta {
    display: flex;
    justify-content: center;
    color: var(--color-text);
    font-size: 3rem;
    margin-top: 5rem;
    margin-bottom: 7rem;
    font-weight: 600;
    font-family: var(--font-secondary);

    :hover {
      color: var(--color-link-hover);
    }
  }
`;

const StyledFooterSocials = styled.div`
  display: flex;
  order: 2;
  justify-content: center;

  img {
    width: 2.5rem;
    height: auto;
    padding: 2rem 4rem;
  }
`;

export { StyledFooterContainer, StyledFooterSocials };
