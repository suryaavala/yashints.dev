import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 7em;

  p {
    margin-bottom: 1rem;
    &:last-of-type {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 680px) {
    padding: 2rem;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
      color: #fff;

      a {
        color: #adad2e;
      }
	`}
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;
