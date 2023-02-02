import { useEffect, useState } from 'react';
import { Option } from '~/components/TagsInput';
import { useGetTagsFromDbQuery } from '~/pages/Top/hooks/getTagsFromDB.generated';

export const useTags = () => {
  const [suggestionTags, setSuggestionTags] = useState<Option<string>[]>([]);

  const { data } = useGetTagsFromDbQuery();

  useEffect(() => {
    if (!data) return;
    setSuggestionTags(
      data?.getTags.map(({ tag, tagId }) => {
        return { label: tag, value: tagId };
      }),
    );
  }, [data, suggestionTags]);

  return { suggestionTags };
};
