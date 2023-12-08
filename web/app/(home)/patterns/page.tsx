// eslint-disable-next-line import/no-unresolved
import { allPatterns } from "contentlayer/generated";

import { ContentLink } from "../../../components/content-link";

export default function PatternsPage() {
  return (
    <div className="flex gap-2">
      {allPatterns
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .map((pattern) => (
          <ContentLink
            key={pattern._id}
            content={pattern}
            showOwnTypeTag={false}
          />
        ))}
    </div>
  );
}
