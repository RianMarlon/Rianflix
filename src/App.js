import React from 'react';
import Header from './components/header/Header';

import BannerMain from './components/bannerMain/BannerMain';

import dadosIniciais from './data/dadosIniciais.json';

export default function App() {
    return (
        <div>
            <Header />

            <BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription={"Neste vídeo irei falar sobre como organizar os módulos e pacotes da sua aplicação. A ideia apresentada é focar mais no negócio (domínio) do que em organizações meramente tecnológicas."}
            />

        </div>
    );
}
