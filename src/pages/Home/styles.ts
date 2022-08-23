import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const HomeBanner = styled.div`
  display: grid;
  grid-template-columns: 50% 47%;
  grid-gap: 3.5rem;
  padding: 5.75rem 0;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: bolder;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    font-size: 3rem;
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: 400;
  }

  img {
    width: 100%;
  }
`

export const BannerIconsContainer = styled.div`
  display: grid;
  grid-template-columns: 43% 53%;
  grid-gap: 2.5rem;
  margin-top: 4.125rem;
`
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: bold;
  }
`
export const ProductsGrid = styled.div`
  margin-top: 0.875rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
