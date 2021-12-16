import styled from 'styled-components'

export const Nav = styled.nav`
  display:flex;
  align-items:center;
  

`


export const Image = styled.img`
  width: 122px;
  height: 50px;
 ;
`
export const Navegador = styled.a`
  color: ${(props) => props.color};
  cursor:pointer;
  font-size:1.6rem;
  font-family: 'Poppins', sans-serif;
  font-weight:${(props)=> props.weight};
  margin-right:30px;

  &:hover{
    color:#BADC41;
    transition:0.3s;
  }
`
export const Cabeçalho = styled.header`
  background: #191919;
  height: 80px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:20px 18.5% 20px 18%  ;
` 

export const Botao = styled.button`
  background:#7CB124;
  border-radius:8px;
  padding:11px 23px;
  border:none;
  color: #FFFFFF;
  cursor:pointer;
  font-size:1.8rem;

  &:hover{
    background:#5A880E;
    transition:0.3s;
  }
`
