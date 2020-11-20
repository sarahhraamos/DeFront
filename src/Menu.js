import React from 'react';

function Menu () {
    return (
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><i class="fas fa-desktop"></i> DeFront</a>
          <div className="navbar-nav">
          <a className="navbar-brand nav-link" href="/home"><i class="fas fa-home"></i> Home</a>
          <a className="navbar-brand nav-link" href="/framework"><i class="fas fa-plus"></i> Frameworks</a>
          <a className="navbar-brand nav-link" href="/libs"><i class="fas fa-book-open"></i> Libs</a>
          <a className="navbar-brand nav-link" href="/cadastro"><i class="fas fa-user-tie"></i> Cadastre-se</a>
          </div>
        </nav>
      </div>

    );
}

export default Menu;