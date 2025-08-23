export function rollDie(sides) {
	return Math.floor(Math.random() * sides) + 1;
}
export function rollDice(num, sides) {   
	let total = 0;   
	for (let i = 0; i < num; i++) total += rollDie(sides);   
	return total; 
} 
