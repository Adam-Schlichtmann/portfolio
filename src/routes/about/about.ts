import type { About } from './types';

export const ABOUT: About = {
	name: 'Adam Schlichtmann',
	elevator:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	skills: [
		{ name: 'TypeScript', level: 4 },
		{ name: 'Node.js', level: 3 },
		{ name: 'React Native', level: 4 },
		{ name: 'Expo', level: 4 },
		{ name: 'EAS', level: 4 },
		{ name: 'Git', level: 4 },
		{ name: 'Rust', level: 2 },
		{ name: 'Go', level: 2 },
		{
			name: 'Docker',
			level: 3
		}
	].sort((a, b) => {
		if (b.level === a.level) {
			return a.name < b.name ? -1 : 1;
		}
		return b.level - a.level;
	})
};
