import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  background: ${(props) => props.theme.background};
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`
