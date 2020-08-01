import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/bannerMain/BannerMain';
import Carousel from '../../components/carousel/Carousel';

import categoriesRepository from '../../repositories/categories';

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then(async (categoriesWithVideos) => {
        setCategories(await categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {categories.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={category.videos[0].title}
                url={category.videos[0].url}
                videoDescription="Neste vídeo irei falar sobre como organizar os módulos e pacotes da sua aplicação. A ideia apresentada é focar mais no negócio (domínio) do que em organizações meramente tecnológicas."
              />

              <Carousel
                ignoreFirstVideo
                category={category}
              />
            </div>
          );
        }

        return (
          <div key={category.id}>
            <Carousel
              category={category}
            />
          </div>
        );
      })}
    </>
  );
}
