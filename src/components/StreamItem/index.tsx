import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { 
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,

} from './styles';

const StreamItem: React.FC = () => {
  return (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />
      
      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>dantls</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
            Front-end com ReactJS, Styled-components
          </StreamDescription>
          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );
};

export default StreamItem;
