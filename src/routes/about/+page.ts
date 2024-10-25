import type { PageLoad } from './$types';
import { ABOUT } from './about';
import type { About } from './types';

export const load: PageLoad = (): { data: About } => {
	return { data: ABOUT };
};
