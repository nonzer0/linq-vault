// import { Tags } from '../../types'

type TagProps = {
  tags: string[]
}
export function Tag({tags}: TagProps): JSX.Element {
  return (
    <ul className="tag-list">
      {tags.map((t, idx) => (
        <li className="tag" key={idx}>{t}</li>
      ))}
    </ul>
  );
}
