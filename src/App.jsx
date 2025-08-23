import { useState } from "react";
import Step1Abilities from "./components/steps/Step1Abilities";
import Step2Race from "./components/steps/Step2Race";

export default function App() {
	const [step, setStep] = useState(1);
	const [character, setCharacter] = useState({});

	const nextStep = (dataFromStep) => {
		setCharacter(prev => ({ ...prev, ...dataFromStep }));
		setStep(prev => prev + 1);
	};

	return (
		<>
			{step === 1 && <Step1Abilities next={nextStep} />}
	                {step === 2 && ( 
				<Step2Race
					next={nextStep}
					abilities={character.abilities}
				/>
			)}
			{step > 2 && (
				<div className="w-screen h-screen flex items-center justify-center">
					<div className="text-center">
						<h1 className="text-3x1 font-bold mb-4">Next step {step} coming soon...</h1>
						<pre className="text-left inline-block p-4 border border-black rounded max-w-xl overflow-auto">
							{JSON.stringify(character, null, 2)}
						</pre>
					</div>
				</div>
			)}
		</>
	);
					
}
