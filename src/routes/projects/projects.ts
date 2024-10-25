import type { Project } from './types';

export const PROJECTS: Project[] = [
	{
		completion: 100,
		description: 'A cross platform mobile application for playing some of my favorite card games.',
		github: 'https://github.com/Adam-Schlichtmann/cardgames',
		slug: 'cardgames',
		tags: ['React Native', 'Expo', 'EAS', 'Git'],
		title: 'Card Games App'
	},
	{
		completion: 25,
		description:
			'A iOS mobile application for keeping track of board games. Keep track of your board game stats and see how you compare to your friends.',
		github: 'https://github.com/Adam-Schlichtmann/boardgamehero',
		slug: 'boardgamehero',
		tags: ['Swift', 'SwiftUI', 'Firebase', 'Git', 'XCode'],
		title: 'Board Game Hero'
	},
	{
		completion: 100,
		description:
			'A simple boiler plate generation tool. Create reuseable templates for your project and generate them with ease.',
		github: 'https://github.com/Adam-Schlichtmann/boilit',
		slug: 'boilit',
		tags: ['Rust', 'Cargo', 'CLI', 'Git'],
		title: 'Boilit'
	},
	{
		completion: 90,
		description:
			'A simple list app that can be used for shopping lists, to-do lists, or any other list you can think of.',
		github: 'https://github.com/Adam-Schlichtmann/shopping',
		slug: 'lists',
		tags: ['Ruby on Rails', 'BootStrap', 'Git'],
		title: 'Lists'
	}
];
