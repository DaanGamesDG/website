import React from "react";

const DarkMode = ({ children }: React.PropsWithChildren) => {
	return (
		<div className="w-screen h-screen fixed">
			<svg
				className="z-0 fixed right-[10%] top-[10%]"
				width="582"
				height="500"
				viewBox="0 0 582 500"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M545.157 480.436C504.118 511.81 425.136 499.028 365.9 486.246C306.277 473.076 266.399 459.907 207.55 447.899C148.701 435.892 70.1064 425.047 31.0028 380.89C-7.71369 336.734 -7.71369 258.88 17.452 190.321C42.6177 121.763 92.5619 62.1128 155.283 29.5766C218.003 -3.34696 293.113 -9.93169 349.639 15.6325C405.778 41.1967 443.72 98.5224 480.888 150.813C518.443 203.103 555.224 250.358 572.259 311.945C589.294 373.144 586.197 449.062 545.157 480.436Z"
					fill="#4E9ED799"
				/>
			</svg>
			<svg
				className="z-0 fixed left-[10%] bottom-[10%]"
				width="309"
				height="317"
				viewBox="0 0 309 317"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M303.984 94.5239C324.138 155.399 281.177 238.242 217.797 281.384C154.417 324.526 70.883 328.231 30.8395 293.823C-9.20393 259.681 -5.75647 187.424 15.7238 124.697C37.204 61.7043 76.9823 7.97541 138.506 0.829212C200.295 -6.31699 283.829 33.3841 303.984 94.5239Z"
					fill="#62ADE3"
				/>
			</svg>
			<div className="w-screen h-screen bg-[var(--background-filter-dark)] backdrop-blur-[250px] fixed z-10">{children}</div>
		</div>
	);
};

export default DarkMode;
