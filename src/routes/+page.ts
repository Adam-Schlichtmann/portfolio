import type { PageLoad } from './$types';
import { HOME } from './home';
import type { HomeData } from './types';

export const load: PageLoad = (): { data: HomeData } => {
	return { data: HOME };
};
