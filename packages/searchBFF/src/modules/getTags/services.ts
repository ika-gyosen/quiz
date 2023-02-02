import { Tag } from '~/types/graphql';
import { hasuraClient } from '~/api/graphql';
import { getSdk } from '~/modules/getTags/getTags.generated';

export const getTags = async (): Promise<Tag[]> => {
  const { getTags } = getSdk(hasuraClient);

  const { quiz_tags } = await getTags();

  return quiz_tags.map((o) => {
    return {
      tag: o.tag,
      tagId: o.tag_id,
    };
  });
};
