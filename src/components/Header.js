import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <a href="#">
        <img src="https://i.imgur.com/KDIDiSE.png" />
        </a>
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
