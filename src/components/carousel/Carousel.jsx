import React from 'react';
import { VideoCardGroupContainer, Title, Description } from './styles';
import VideoCard from './components/videoCard/VideoCard';
import Slider, { SliderItem } from './components/slider/Slider';

function VideoCardGroup({ ignoreFirstVideo, category }) {
  const categoryTitle = category.title;
  const categoryColor = category.color;
  const categoryDescription = category.description;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryDescription && (
            <Description>
              {categoryDescription}
            </Description>
          )}
        </>
      )}
      <Slider backgroundArrows={categoryColor}>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;
