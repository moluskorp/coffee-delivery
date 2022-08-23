import {
  BannerIconsContainer,
  HomeBanner,
  HomeContainer,
  ProductsContainer,
  ProductsGrid,
} from './styles'
import imageBanner from '../../assets/coffeedeliverybannerImage.svg'
import { BannerIcon } from '../../components/BannerIcon'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ProductCard } from '../../components/ProductCard'
import expresso from '../../assets/expresso.svg'
import americano from '../../assets/americano.svg'
import expressocremoso from '../../assets/expressocremoso.svg'
import cafegelado from '../../assets/cafegelado.svg'
import cafecomleite from '../../assets/cafecomleite.svg'
import latte from '../../assets/latte.svg'
import capuccino from '../../assets/capuccino.svg'
import macchiato from '../../assets/macchiato.svg'
import mochaccino from '../../assets/mochaccino.svg'
import chocolatequente from '../../assets/chocolatequente.svg'
import cubano from '../../assets/cubano.svg'
import havaiano from '../../assets/havaiano.svg'
import arabe from '../../assets/arabe.svg'
import irlandes from '../../assets/irlandes.svg'

const TABLE_DATA = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    price: 9.9,
    type: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    img: expresso,
  },
  {
    id: '2',
    name: 'Expresso Americano',
    price: 9.9,
    type: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    img: americano,
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    price: 9.9,
    type: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    img: expressocremoso,
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    price: 9.9,
    type: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    img: cafegelado,
  },
  {
    id: '5',
    name: 'Café com Leite',
    price: 9.9,
    type: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    img: cafecomleite,
  },
  {
    id: '6',
    name: 'Latte',
    price: 9.9,
    type: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    img: latte,
  },
  {
    id: '7',
    name: 'Capuccino',
    price: 9.9,
    type: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    img: capuccino,
  },
  {
    id: '8',
    name: 'Macchiato',
    price: 9.9,
    type: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    img: macchiato,
  },
  {
    id: '9',
    name: 'Mocaccino',
    price: 9.9,
    type: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    img: mochaccino,
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    price: 9.9,
    type: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    img: chocolatequente,
  },
  {
    id: '11',
    name: 'Cubano',
    price: 9.9,
    type: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    img: cubano,
  },
  {
    id: '12',
    name: 'Havaiano',
    price: 9.9,
    type: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    img: havaiano,
  },
  {
    id: '13',
    name: 'Árabe',
    price: 9.9,
    type: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    img: arabe,
  },
  {
    id: '14',
    name: 'Irlandês',
    price: 9.9,
    type: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    img: irlandes,
  },
]

export type Product = typeof TABLE_DATA[0]

export function Home() {
  return (
    <HomeContainer>
      <HomeBanner>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <BannerIconsContainer>
            <BannerIcon text="Compra simples e segura" color="yellow-dark">
              <ShoppingCart weight="fill" />
            </BannerIcon>
            <BannerIcon
              text="Embalagem mantém o café intacto"
              color="base-text"
            >
              <Package weight="fill" />
            </BannerIcon>
            <BannerIcon text="Entrega rápida e rastreada" color="yellow">
              <Timer weight="fill" />
            </BannerIcon>
            <BannerIcon text="O café chega fresquinho até você" color="purple">
              <Coffee weight="fill" />
            </BannerIcon>
          </BannerIconsContainer>
        </div>
        <div>
          <img src={imageBanner} />
        </div>
      </HomeBanner>
      <ProductsContainer>
        <h1>Nossos cafés</h1>
        <ProductsGrid>
          {TABLE_DATA.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </ProductsContainer>
    </HomeContainer>
  )
}
