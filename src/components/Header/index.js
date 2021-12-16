import { Nav, Image, Cabeçalho, Navegador, Botao } from './styles'

import Link from 'next/link'

export default function Header({ children }) {
  return (
    <>
      <Cabeçalho>
        <Image src="/images/Logo InfoJr.svg" alt="Logo InfoJr" />
        <Nav>
          <Link href="/">
            <Navegador color='#7CB124;' weight='700'>Inicio</Navegador>
          </Link>
          <Link href="#">
            <Navegador color='#FFFFFF80;' weight='400'>Todos os links</Navegador>
          </Link>
          <Link href="#">
            <Botao>Adicionar link</Botao>
          </Link>
        </Nav>
      </Cabeçalho>
    </>
  )
}
