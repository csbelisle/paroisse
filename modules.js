class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbox">
        <h3>Menu <span class="slideMenu">&lt;&lt;</span></h3>
        <div class="list">
          <div class="content">
            <a href="annonces.html">Annonces</a>
          </div>
        </div>
        <div class="list">
          <div class="content">
            <a href="sacrements.html">Célébration des sacrements</a>
          </div>
        </div>
        <div class="list">
          <div class="content">
            <a href="equipejoie.html">Équipe de la Joie</a>
          </div>
        </div>
        <div class="list">
          <div class="content">
            <a href="feuillets.html">Feuillets paroissiaux</a>
          </div>
        </div>
        <div class="list">
          <div class="content">
            <a href="historique.html">Historique</a>
          </div>
        </div>
        <div class="list">
          <div class="content">
            <a href="horaire.html">Horaire liturgique</a>
          </div>
        </div>
        <div class="list">
          <div class="content">
            <a href="nousrejoindre.html">Pour nous rejoindre</a>
          </div>
        </div>
        <div class="list">
          <div class="content">
            <a href="liens.html">Quelques liens vers...</a>
          </div>
        </div>
        <div class="list">
          <div class="content">
            <a href="services.html">Services paroissiaux</a>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("my-navigation", MyNav);
