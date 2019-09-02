const abilities_list = {
	"front-end": {
		"javascript": [
			{
				name: "JavaScript",
				description: "Le JavaScript est un des languages avec lequel j'ai le plus travailer, soit de façon brut soit avec un framework comme ceux présenté ici",
				image: "./img/languages/javascript.png"
			},
			{
				name: "JQuery",
				description: "JQuery est le framework qui a permis de révolutionner le Javascript et qui a permis de montrer le potentiel incroyable de ce langage",
				image: "./img/languages/jQuery.gif"
			}, {
				name: "Angular",
				description: "Framework Javascript créer par Google, il est assez lourd mais permet de comportimenter avec beacoup d'effecacité les éléments des applications",
				image: "./img/languages/angular.png"
			}, {
				name: "React",
				description: "Framework Javascript développé par Facebook, c'est l'un des principaux concurrent de Angular",
				image: "./img/languages/react.png"
			}
		],
		"HTML": [
			{
				name: "HTML5",
				description: "Le HTML est le langage de base du développement web, c'est un simple markup language ce qui le rend simple d'apprentissage." ,
				image: "./img/languages/html.png"
			}
		],
		"CSS": [
			{
				name: "CSS",
				description: "Language permettant de mettre en forme les pages web, c'est un incontournable du développement web",
				image: "./img/languages/css.png"
			}, {
				name: "SCSS",
				description: "Langage qui ce compile en CSS et qui permet d'utiliser des variables de façon simple et d'autre raccouris qui permet de produire plus rapidement qu'avec du CSS",
				image: "./img/languages/sass.png"
			}, {
				name: "Bootstrap",
				description: "Framework qui permet de créer un site joli sans faire de css, créer pour Twitter pour améliorer l'astetique du web, on peut a présent le trouver sur énormement de sites",
				image: "./img/languages/bootstrap.png"
			}
		]
	},
	"back-end": [
		{
			name: "PHP",
			description: "Language très utilisé dans le développement web coté serveur",
			image: "./img/languages/php.png",
			display: "large-width"
		},{
			name: "Laravel",
			description: "Framework PHP le plus utiliser a de pars le monde, il permet de mettre en place rapidement de créer une application structuré et facilement maintenable",
			image: "./img/languages/laravel.png",
			display: "large-width"
		}, {
			name: "Symfony",
			description: "Framework PHP très utilisé en france, son pays d'origine, il est plus permissif que Laravel mais lui ressemble beaucoup",
			image: "./img/languages/symfony.png"
		}, {
			name: "NodeJS",
			description: "Langage serveur qui a révolutionner le domaine, il se base sur le moteur V8 développer pour google chrome et sur le langage Javascript pour permettre des applications web extrèment rapide",
			image: "./img/languages/nodejs.png",
			display: "large-width"
		}, {
			name: "Express",
			description: "Principale framework de Node JS, il permet de gérer facilement les middlewares",
			image: "./img/languages/express.jpeg",
			display: "large-width"
		}, {
			name: "J2EE",
			description: "Framework Java qui permet de faire du déveleppement web dans ce langage",
			image: "./img/languages/java.png"
		}, {
			name: "C# .NET",
			description: "Équivalent de J2EE pour C#",
			image: "./img/languages/csharpdotnet.png"
		}
	],
	"bdd": [
		{
			name: "MySQL",
			description: "Langage de base de donnée qui qui permet de stocker des informations de façon stucturé",
			image: "./img/languages/mysql.png",
			display: "large-width"
		}, {
			name: "MariaDB",
			description: "MariaDB est un fork de MySQL qui permet à cette technologie de rester open source",
			image: "./img/languages/mariadb.png",
		}, {
			name: "MongoDB",
			description: "Base de données de type document appartenent au NoSQL, il utilise une sectrure JSON pour stocker des informations",
			image: "./img/languages/mongodb.png",
			display: "extra-large-width"
		}
	],
	"other": {
		'Markup Language': [
			{
				name: "XML",
				description: "Basé sur la syntaxe HTML, ce langage permet de transmettre des données grâce à l'utilisation de balises",
				image: "./img/languages/xml.png"
			}, {
				name: "JSON",
				description: "Basé sur la syntaxe des objets et des tableaux en Javascript, c'est le langage le plus utilisé actuellement pour communiquer avec les webservices et les API",
				image: "./img/languages/json.jpg",
				display: "large-width"
			}, {
				name: 'YAML',
				description: "Compatible avec la syntaxe JSON, grâce a une syntaxe basé sur l'indentation, il permet de mettre plus en évidence les informations",
				image: "./img/languages/yaml.png"
			}
		],
		"versionning": [
			{
				name: "Git",
				description: "Principal système de versionning utilisé à ce jour",
				image: "./img/languages/git.png"
			}, {
				name: "SVN",
				description: "Doyen dans le domaine du versionning et appartenant à Apache, il est encore beaucoup utilisé aujourd'hui",
				image: "./img/languages/svn.png"
			}, {
				name: "Mercurial",
				description: "Concurrent de Git et crée a quelque mois de lui",
				image: "./img/languages/mercurial.jpeg"
			}
		]
	}
};

export default abilities_list;