const races = {
	Human: {
		bonuses: {},
		abilities: ["Versatility"]
	},
	Dwarf: {
		bonuses: { Constitution: 1 },
		abilities: ["Darkvision", "Stonecunning"]
	},
	Elf: {
		bonuses: { Dexterity: 1 },
		abilities: ["Keen Senses", "Resistance to Charm"]
	},
	Halfling: {
		bonuses: { Dexterity: 1 },
		abilities: ["Lucky", "Stealthy"]
	}
};

export default races;
