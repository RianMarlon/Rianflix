import React from 'react';
import BannerMain from '../../components/bannerMain/BannerMain';
import Carousel from '../../components/carousel/Carousel';

import dadosIniciais from '../../data/dadosIniciais.json';

export default function Home() {
    return (
        <>
            <BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription={"Neste vídeo irei falar sobre como organizar os módulos e pacotes da sua aplicação. A ideia apresentada é focar mais no negócio (domínio) do que em organizações meramente tecnológicas."}
            />

            <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
            />

            <Carousel
                category={dadosIniciais.categorias[1]}
            />

            <Carousel
                category={dadosIniciais.categorias[2]}
            />  
        </>
    );
}
