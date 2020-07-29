import React from 'react';
import { VideoCardGroupContainer, Title, Description } from './styles';
import VideoCard from './components/videoCard/VideoCard';
import Slider, { SliderItem } from './components/slider/Slider';

function VideoCardGroup({ ignoreFirstVideo, category }) {
    const categoryTitle = category.titulo;
    const categoryColor = category.cor;
    const categoryDescription = category.descricao;
    const videos = category.videos;
    return (
        <VideoCardGroupContainer>
            {categoryTitle && (
                <>
                <Title style={{ backgroundColor: categoryColor || 'red' }}>
                    {categoryTitle}
                </Title>
                {categoryDescription && 
                    <Description>
                        {categoryDescription}  
                    </Description>
                }
                </>
            )}
            <Slider>
                {videos.map((video, index) => {
                    if (ignoreFirstVideo && index === 0) {
                        return null;
                    }

                    return (
                        <SliderItem key={video.titulo}>
                            <VideoCard
                                videoTitle={video.titulo}
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
