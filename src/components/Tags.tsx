import styles from "../styles/Home.module.css";

interface TagProps {
  tags: string[];
  linkId: string;
}

export function Tags({ tags, linkId }: TagProps) {
  return (
    <div className={styles.tags}>
      {tags &&
        tags.map((tag: string, idx: number) => (
          <span key={`tag-${linkId}-${idx}`}>#{tag} </span>
        ))}
    </div>
  );
}
