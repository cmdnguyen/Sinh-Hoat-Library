import React from 'react';
import { useRouter } from 'next/router';
import GenericListPageTemplate from '../../components/songs/SongTemplates';
import { SONG_CATEGORIES } from '../../components/songs/songs'; // Adjust the data import

const SongCategoryPage = () => {
  const router = useRouter();
  const { songCategory } = router.query;

  const categoryData = SONG_CATEGORIES.find((category) => category.slug === songCategory);

  if (!categoryData) {
    return <p>Category not found</p>;
  }

  const { items, title, titleKey, videoKey, lyricsKey } = categoryData;

  return (
    <GenericListPageTemplate
      items={items}
      title={title}
      titleKey={titleKey}
      videoKey={videoKey}
      lyricsKey={lyricsKey}
    />
  );
};
export default SongCategoryPage;
