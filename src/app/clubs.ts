export class Club {
	clubName: string;
	clubDescription: string;
	logoPath: string;
	link: string;
}

export const PARTICIPATING_CLUBS: Club[] = [
	{
		clubName: "Women in Computer Science",
		clubDescription: "The Women in Computer Science Club, or WICS, is an organization dedicated to supporting and encouraging women in technical majors, as well as providing opportunities outside the classroom and creating a strong, welcoming community.",
		logoPath: "assets/wicslogo.png",
		link: "https://appstate.campuslabs.com/engage/organization/women-in-computer-science",
	},
	{
		clubName: "Appalachian Society for Computing, Informatics, and Innovation",
		clubDescription: "ASCII is an organization dedicated to improving the community for Computer Science students, providing career opportunities, and educating students in diverse concepts across the CS field.",
		logoPath: "assets/asciilogo.jpg",
		link: "https://appstate.campuslabs.com/engage/organization/appalachian-society-for-computing-informatics-and-",
	},
	// {
	// 	clubName: "Association of Information Tech Professionals",
	// 	clubDescription: "The Association of Information Technology Professionals, or AITP, is an organization open to all students with an interest in information technology, providing professional networking opportunities to all participants.",
	// 	logoPath: "apphack/assets/aitp.png",
	// 	link: "https://aitp.appstate.edu/",
	// },
]