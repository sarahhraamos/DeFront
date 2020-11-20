import React from 'react';


function Main () {
    return(
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>

    
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./img/slide1.png" height="650px" class="d-block w-100" alt="..."></img>
        <div class="carousel-caption d-none d-md-block">
          <h1 class="tituloslide">DeFront</h1>
          <h2>Desenvolvimento Front-end</h2>
          <p>Podemos classificar como a parte visual de um site, aquilo que conseguimos interagir. Quem trabalha com Front End é responsável por desenvolver por meio de código uma interface gráfica, normalmente com as tecnologias base da Web (HTML, CSS e JavaScript).</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./img/slide2.png"  height="650px" class="d-block w-100" alt="..."></img>
        <div class="carousel-caption d-none d-md-block">
          <h1 class="tituloslide">DeFront</h1>
          <h2>O que faz um desenvolvedor front-end?</h2>
          <p>Um desenvolvedor front-end é o profissional responsável por criar a interface de utilização de um site ou aplicação web. A camada visual das aplicações web, na qual os usuários interagem, é então de responsabilidade do desenvolvedor front-end. É ele quem irá montar a estrutura da página, como por exemplo colocando o cabeçalho, rodapé, colunas e imagens em seus devidos lugares.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./img/slide3.png" height="650px" class="d-block w-100" alt="..."></img>
        <div class="carousel-caption d-none d-md-block">
          <h1 class="tituloslide">DeFront</h1>
          <h2>O que um desenvolvedor front-end precisa saber?</h2>
          <p>É primordial que um desenvolvedor front-end tenha domínio em HTML, CSS e JavaScript, pois eles são a base do desenvolvimento web. O HTML é o responsável por estruturar a página, o CSS por estilizar esta estrutura e o JavaScript por fazer com que a interface seja dinâmica. </p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  
        
    );   
}

export default Main;