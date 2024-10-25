import type { PageLoad } from './$types';
import { WORK_HISTORY } from './history';
import type { WorkHistory } from './types';

export const load: PageLoad = (): { data: WorkHistory[] } => {
	return { data: WORK_HISTORY };
};
