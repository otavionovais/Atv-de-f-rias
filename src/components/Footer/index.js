import { Botao } from '../Header/styles'
import { Top, Image1, Icones, Bottom, Paragrafo, Span } from './styles'

export default function Footer({ children }) {
  return (
    <>
      <Top>
        <Image1 src="/images/Logo InfoJr.svg" alt="Logo InfoJr" />
      
          <Icones src="/images/Icon_Linkedin.svg" alt="Logo InfoJr" />
          <Icones src="/images/Icon_Behance.svg" alt="Logo InfoJr" />
          <Icones src="/images/Icon_Dribble.svg" alt="Logo InfoJr" />
          <Icones src="/images/Icon_Instagram.svg" alt="Logo InfoJr" />
          <Icones src="/images/Icon_Facebook.svg" alt="Logo InfoJr" />
          <Icones src="/images/Icon_Youtube.svg" alt="Logo InfoJr" />
          <Icones src="/images/Icon_Spotify.svg" alt="Logo InfoJr" />
       
      </Top>
      <Bottom>
        <Paragrafo>
          <Span>Email:</Span> contato@infojr.com.br | <Span>Telefone:</Span> 71
          3283-6268
        </Paragrafo>
        <Paragrafo>
          Copyright @ 2020 INFO JR UFBA - Av. Adhemar de Barros, Ondina –
          Instituto de computação da UFBA
        </Paragrafo>
      </Bottom>
    </>
  )
}
