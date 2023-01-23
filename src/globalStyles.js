import { createGlobalStyle } from "styled-components";


const GlobalStyle= createGlobalStyle`

*,* ::before,*::after,h1,h2,h3,h4,h5,h6{

    margin:0;
    padding:0;

}

h1,h2,h3,h4,h5,h6{
    display: inline-block;
}

body{
    
    margin:0;
    padding:0;
    overflow-x: hidden;
   
    background:#ffff;

    
}
::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-track{
    box-shadow:  insert 0 0 10px linear-gradient(transparent,#B12A5A, #172F49);
    border-radius:  6px;
}

::-webkit-scrollbar-thumb{
    background: linear-gradient(transparent,#B12A5A, #172F49);
    border-radius:  6px;
}

::-webkit-scrollbar-thumb:hover{
    background: linear-gradient(transparent,#33ddd0);
    border-radius: 5 px;
}

`
export default GlobalStyle;