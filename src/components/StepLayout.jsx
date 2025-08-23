export default function StepLayout({ title, children, onNext, nextDisabled }) {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center text-center px-6">
			<h1 className="text-3xl font-bold mb-6">{title}</h1>
		<div className="mb-8">{children}</div>
		<button
			onClick={onNext}
			disabled={nextDisabled}
			className={`px-6 py-3 border border-black rounded
				${nextDisabled ? "opacity-40 cursor-not-allowed" : "hover:bg-black hover:text-white"}`}
		>

		Next
		</button>
		</div>
	);
}
