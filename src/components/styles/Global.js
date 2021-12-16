import { createGlobalStyle } from "styled-components";
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style> 
const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  text-decoration:none;
  font-size:62.5%;
}

img{
  width:100%;
}
`
export default GlobalStyles