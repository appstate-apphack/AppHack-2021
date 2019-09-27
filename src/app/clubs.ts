export class Club {
	clubName: string;
	clubDescription: string;
	logoPath: string;
}

export const PARTICIPATING_CLUBS: Club[] = [
	{
		clubName: "Women in Computer Science",
		clubDescription: "The Women in Computer Science Club, or WICS, is an organization dedicated to supporting and encouraging women in technical majors, as well as providing opportunities outside the classroom and creating a strong, welcoming community.",
		logoPath: "../assets/wicslogo.png",
	},
	{
		clubName: "Appalachian Society for Computing, Informatics, and Innovation",
		clubDescription: "ASCII is an organization dedicated to improving the community for Computer Science students, providing career opportunities, and educating students in diverse concepts across the CS field.",
		logoPath: "../assets/ah.ico",
	},
]