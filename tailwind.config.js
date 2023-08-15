/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

	darkMode: "media", // or 'class'

	theme: {
		extend: {
			backgroundImage: {
				faq: "url('~@/assets/faq-bg.png')",
				borrow: "url('~@/assets/borrow-bg.png')",
			},

			lineHeight: {
				"extra-loose": "3.4rem",
			},

			minWidth: {
				"1/4": "25%",
				"2/5": "33%",
				"1/2": "50%",
				"3/4": "75%",
				"4/5": "75%",
			},

			fontSize: {
				"xxs": "0.63rem",
				"s13": "13px"
			},

			borderRadius: {
				"r-20": "20px",
			},

			colors: {
				primary: "#26C165",
				secondary: "#E23939",
				black100: "#1F2C46",
				gray07: "#073042",
				grayF5: "#F5F7FA",
				gray8D: "#8D97A8",
				grayF3: "#F3F4F6",
				grayF8: "#f8f8f8",
				grayA9A: '#A9A9AC',
				grayD3: "#CFD0D3",
				grayF89: "#F8F9FA",
				grayA9: "#A9A9AA",
				grayA91: "#FF565E",
				gray69: "#696F79",
				gray86: "#8692A6",
				grayC4: "#c4c4c4",
				grayEF: "#efefef",
				grayF9: "#F9F1DC",
				gray52: "#525252",
				gray26: "#263238",
				gray4F: "#4F5665",
				gray78: "#788681",
				accordionBg: "#fcfcfc",
				grayFB: "#fbfbfb",
				orange: "#F38861",
				orangeFF: '#FFE4CC',
				lightGray: "rgba(244, 245, 247, 0.07)",
				lighterBlue: "#CCF0FE",
				lighterGray: "rgba(244, 245, 247, 0)",
				lightPrimary: "rgba(38, 193, 101, 0.07)",
				lighterPrimary: "rgba(38, 193, 101, 0)",
				lightSecondary: "rgba(246, 171, 25, 0.07)",
				lighterSecondary: "rgba(246, 171, 25, 0)",
				darkPrimary: "rgba(31, 44, 70, 0.07)",
				dark2Primary: "rgba(31, 44, 70, 0)",
				careColor1: "#b000dc",
				careColor2: "#dc1a00",
				careColor3: "#00dc72",
				primary1: "#25C064",
				greenE8: "#DEF6E8",
				primary2: "#149F4C",
			},
		},
	},

	plugins: [],
};
