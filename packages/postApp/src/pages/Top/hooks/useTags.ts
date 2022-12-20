import { useEffect, useState } from 'react';
import { Option } from '~/components/TagsInput';
import { useGetTagsFromDbQuery } from '~/pages/Top/hooks/getTagsFromDB.generated';

export const useTags = () => {
  const [suggestionTags, setSuggestionTags] = useState<Option<string>[]>([]);

  const { data } = useGetTagsFromDbQuery();

  useEffect(() => {
    if (!data) return;
    setSuggestionTags(
      data?.quiz_tags.map(({ tag, tag_id }) => {
        return { label: tag, value: tag_id };
      }),
    );
  }, [data]);

  return { suggestionTags };
};
