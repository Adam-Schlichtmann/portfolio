import type { PageLoad } from './$types';
import { PROJECTS } from './projects';
import type { Project } from './types';

export const load: PageLoad = (): { data: Project[] } => {
	return { data: PROJECTS };
};
