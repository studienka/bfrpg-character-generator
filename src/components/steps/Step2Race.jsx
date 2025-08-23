import { useState } from "react";
import StepLayout from "../StepLayout";
import races from "../../data/races";

export default function Step2Race({ next, abilities }) {
	const [choice, setChoice] = useState(null);

	// when Next is pressed, apply race bonuses
	const handleNext = () => {
		const updateAbilities = { ...abilities };

		const bonuses = races[choice].bonuses || {};
		for (const [stat, bonus] of Object.entries(bonuses)) {
			updatedAbilities[stat] = {
				...updatedAbilities[stat],
				score: updatedAbilities[stat].score + bonus,
				mod: updatedAbilities[stat].mod + bonus // will be redone
			};
		}

		next({race: choice, abilities: updatedAbilities });
	};

	return (
		<StepLayout
			title="Step 2: Choose Your Race"
			onNext={handleNext}
			nextDisabled={!choice}
		>
			<div className="flex flex-col space-y-4">
				{Object.keys(races).map(race => (
					<button
						key={race}
						onClick={() => setChoice(race)}
						className={`px-6 py-3 border rounded ${
							choice === race
								? "bg-white text-black border-black"
								: "bg-black text-white border-white"
						}`}
					>
						{race}
					</button>
				))}
			</div>
		</StepLayout>
	);
}
						
