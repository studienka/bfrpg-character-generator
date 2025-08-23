//Basic Fantasy RPG based modifier values 

export function abilityModifier(score) {
	if (score <= 3) return -3;
	if (score <= 5) return -2;
	if (score <= 8) return -1;
	if (score <= 12) return 0;
	if (score <= 15) return 1;
	if (score <= 17) return 2;
	return 3;
}
