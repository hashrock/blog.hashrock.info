import { NotFound } from '../src/components/NotFound';
import { PostArticle } from '../src/components/PostArticle';
import type { Props } from './[slug].server';

export default function PostPage({ post }: Props) {
	return post ? <PostArticle {...post} /> : <NotFound />;
}
