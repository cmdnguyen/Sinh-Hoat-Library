import React from 'react';
import { Heading } from '@chakra-ui/react';
import {SONG_CATEGORIES} from './songs'

const SongTemplate = ({ items, title, titleKey, videoKey, lyricsKey }) => {
  return (
    <div>
      <Heading>{title}</Heading>
      <Songs items={items} titleKey={titleKey} videoKey={videoKey} lyricsKey={lyricsKey} />
    </div>
  );
};

export default SongTemplate;