import React from 'react';


function Framework () {
    return(
<>
        <div class="card-group">
        <div class="card">
        <img src="https://images.unsplash.com/photo-1557318041-1ce374d55ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" width="300" height="330" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">O que são frameworks?</h5>
      <p class="card-text">A melhor definição para framework é a de ser uma ferramenta que auxilia o programador a trabalhar com determinada linguagem. Eles entregam determinadas funcionalidades pré-prontas, bastando ao desenvolvedor adaptar àquilo ao seu programa.</p>
       </div>
       </div>
       
       <div class="card">
        <img src="https://becode.com.br/wp-content/uploads/2018/02/bootstrap-1.jpg" width="330" height="330" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Bootstrap</h5>
        <p class="card-text"> Simplesmente o framework mais conhecido e famoso do mundo front-end. Criado em agosto de 2011 por dois engenheiros do Twitter, a ferramenta logo se tornou uma das mais famosas na hora de criar interfaces web.
        Hoje estima-se que cerca de 7 milhões de sites utilizem o Bootstrap como framework front-end. Entre suas vantagens, podemos citar a documentação farta e a comunidade muito ativa, a infinidade de componentes que podem ser facilmente chamados em suas aplicações, além da boa base de padrões estéticos, que permitem criar páginas belas e funcionais.
        </p>
       </div>
        </div>
        <div class="card">
    <img src="data:image/png;base64,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" width="300" height="330" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Angular</h5>
      <p class="card-text">Esse é um framework especializado para criar aplicativos web avançados de uma única página. A versão Angular 1.x foi feita com base em JavaScript, e demais versões em Typescript (superconjunto do Javascript). Esse framework foi desenvolvido pelo Google, sendo utilizado por ele e, também, pela Microsoft e Paypal.</p>
       </div>
        </div>
          </div>
          <div class="card-group">
  <div class="card">
    <img src="https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg" width="300" height="330" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Vue</h5>
      <p class="card-text">Esse framework relativamente novo, rapidamente tem se tornado um dos frameworks JS mais utilizado entre os desenvolvedores web. Utilizado para construir aplicativos front-end completos, esse framework não é suportado por nenhuma grande empresa.</p>
    </div>
  </div>
  <div class="card">
    <img src="https://mundojs.com.br/wp-content/uploads/2018/01/ember-logo.jpg" width="300" height="330" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Ember</h5>
      <p class="card-text">Eleita a melhor estrutura Javascript em 2015, a comunidade desse framework permanece em expansão, com novos recursos e atualizações frequentes. Esse framework é utilizado pelo Google, Microsoft e Netflix.
      </p>
    </div>
  </div>
  <div class="card">
    <img src="https://blog.dankicode.com/wp-content/uploads/2018/08/materialize-650x350.png" width="300" height="330" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Materialize</h5>
      <p class="card-text">Assim como o Material-UI, o Materialize é um framework front-end que utiliza o Material Design como base de inspiração para cores, ícones e formatos. Assim como os demais frameworks, ele pode ser baixado para um projeto ou ser acessado via CDN através de um simples import.

Uma de suas vantagens é que ele tira muito proveito do jQuery, fazendo com que seja uma ferramenta cheia de recursos visuais, como Captions, Modais e Lightbox. Outra coisa interessante é o sistema de grids, parecido com o do Bootstrap…</p>
    </div>
  </div>
</div>
</>



  
        


    );   
}

export default Framework;