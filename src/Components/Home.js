import React from 'react';
import './Home.css'
import meta from "../Img/Metadinhas.png"
import Portifolio from './Portifolio.js';
import { Link } from 'react-router-dom';

function Home () {
    return (
        
<div class="container">

    <div class="Main">

       
        <div id="Background">
            <div id='Background2'>
                                
            <img id="ibg" src="http://www.inspiraterapia.com.br/wp-content/uploads/2018/07/Arara-Pinterest-1.jpg"/>
            
            </div>
        </div>
        <div id='Imagem1'>
        </div>
        <div id='Hover'>
            <img id="imagem" src={meta} />

            <p id="Comum">
                Produção de moda
            </p>
            <div id='junto'>

            <p id="By">
                By
            </p>
            <p id="Fonte">
                SIL ALVES
                </p>
            </div>
            <div id="Link">
               <Link to={'/Portifolio'}>Portifolio</Link>
                </div>
            <div id="Seta">aa</div>
        
        </div>
    </div>
</div>
    );
}

export default Home;