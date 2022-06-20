import { LinkType } from '../../types';
import { Tag } from '../Tag';

type LinkProps = {
  links: LinkType[];
}

export function Link({ links }: LinkProps): JSX.Element {
    return (
      <ul className='link-list'>
        {links.map((l, idx) => (
          <li className='link' key={idx}>
            <a href={l.link}>{l.title}</a>
            <Tag tags={l.tags} />
          </li>
        ))}
      <hr />
      </ul>
    );
};