import React from 'react';
import BannerMain from '../../components/bannerMain/BannerMain';
import Carousel from '../../components/carousel/Carousel';

import initialData from '../../data/initialData.json';

export default function Home() {
  return (
    <>
      <BannerMain
        videoTitle={initialData.categories[0].videos[0].title}
        url={initialData.categories[0].videos[0].url}
        videoDescription="Neste vídeo irei falar sobre como organizar os módulos e pacotes da sua aplicação. A ideia apresentada é focar mais no negócio (domínio) do que em organizações meramente tecnológicas."
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categories[0]}
      />

      <Carousel
        category={initialData.categories[1]}
      />

      <Carousel
        category={initialData.categories[2]}
      />
    </>
  );
}
