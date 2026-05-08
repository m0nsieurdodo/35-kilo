export type Question = {
  id: number;
  section: string;
  question: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
};

export const questions: Question[] = [
  {
    id: 1,
    section: "Personnages",
    question: "Quel est le prénom du héros du roman ?",
    choices: ["Gaston", "Grégoire", "Guillaume", "Gaspard"],
    correctIndex: 1,
    explanation: "Le héros s'appelle Grégoire, il est le narrateur du roman.",
  },
  {
    id: 2,
    section: "Personnages",
    question: "Quel surnom affectueux Grégoire donne-t-il à son grand-père ?",
    choices: ["Papi Léon", "Grand-Père", "Grand-Léon", "Papy"],
    correctIndex: 2,
    explanation:
      'Grégoire appelle son grand-père "Grand-Léon", un surnom tendre qui montre leur complicité.',
  },
  {
    id: 3,
    section: "Personnages",
    question: "Que font les parents de Grégoire dans la vie ?",
    choices: [
      "Ils sont artisans",
      "Ils sont agriculteurs",
      "Ce sont des intellectuels / cadres",
      "Ils sont enseignants",
    ],
    correctIndex: 2,
    explanation:
      "Ses parents sont diplômés et attachent beaucoup d'importance aux études, ce qui aggrave la pression sur Grégoire.",
  },
  {
    id: 4,
    section: "École",
    question: "Combien de fois Grégoire a-t-il redoublé avant le collège ?",
    choices: ["Zéro fois", "Une fois", "Deux fois", "Trois fois"],
    correctIndex: 2,
    explanation:
      "Grégoire a redoublé deux fois, ce qui explique qu'il ait 13 ans en entrant en 6ème.",
  },
  {
    id: 5,
    section: "École",
    question: "En quelle classe entre Grégoire au début du roman ?",
    choices: ["CM2", "5ème", "6ème", "4ème"],
    correctIndex: 2,
    explanation:
      "Grégoire entre en 6ème (au collège) au début du roman, avec deux redoublements derrière lui.",
  },
  {
    id: 6,
    section: "École",
    question: "Quelle est la grande passion de Grégoire ?",
    choices: [
      "Le football",
      "La lecture",
      "Le bricolage et la mécanique",
      "Le dessin",
    ],
    correctIndex: 2,
    explanation:
      "Grégoire est très doué avec ses mains ; il adore fabriquer et réparer des objets avec Grand-Léon.",
  },
  {
    id: 7,
    section: "École",
    question: "Comment Grégoire se décrit-il lui-même à l'école ?",
    choices: [
      "Timide mais courageux",
      "Nul et inutile",
      "Paresseux et fainéant",
      "Intelligent mais distrait",
    ],
    correctIndex: 1,
    explanation:
      'Grégoire intériorise les jugements négatifs et se considère comme "nul" à l\'école.',
  },
  {
    id: 8,
    section: "Grand-Léon",
    question:
      "Où Grégoire et Grand-Léon passent-ils du temps ensemble ?",
    choices: [
      "Dans la cuisine",
      "Dans le jardin",
      "Dans un cabanon / atelier",
      "Dans le garage",
    ],
    correctIndex: 2,
    explanation:
      "Le cabanon est le lieu magique où Grégoire et Grand-Léon bricolent et partagent leur complicité.",
  },
  {
    id: 9,
    section: "Grand-Léon",
    question: "Pourquoi Grand-Léon est-il si important pour Grégoire ?",
    choices: [
      "Il lui fait faire ses devoirs",
      "Il est le seul à croire en lui et à valoriser ses talents",
      "Il lui donne de l'argent de poche",
      "Il le protège de ses parents",
    ],
    correctIndex: 1,
    explanation:
      "Grand-Léon voit en Grégoire un garçon doué et intelligent, contrairement au regard de l'école.",
  },
  {
    id: 10,
    section: "Grand-Léon",
    question: "Que se passe-t-il avec Grand-Léon au milieu du roman ?",
    choices: [
      "Il déménage loin",
      "Il tombe gravement malade",
      "Il part en voyage",
      "Il se dispute avec les parents",
    ],
    correctIndex: 1,
    explanation:
      "Grand-Léon tombe malade, ce qui est un tournant dramatique du roman pour Grégoire.",
  },
  {
    id: 11,
    section: "Actions et événements",
    question: "À qui Grégoire écrit-il une lettre importante ?",
    choices: [
      "À son instituteur",
      "À sa mère",
      "Au directeur d'une école technique",
      "Au maire",
    ],
    correctIndex: 2,
    explanation:
      "Grégoire écrit directement au directeur d'une école pour tenter d'y être admis.",
  },
  {
    id: 12,
    section: "Actions et événements",
    question: "Quelle solution les parents envisagent-ils pour Grégoire ?",
    choices: [
      "Le changer d'école dans la même ville",
      "L'envoyer dans un internat",
      "Le faire travailler",
      "Lui payer un professeur particulier",
    ],
    correctIndex: 1,
    explanation:
      "Face à l'échec scolaire, ses parents envisagent de l'envoyer en internat.",
  },
  {
    id: 13,
    section: "Actions et événements",
    question: "Comment est la lettre écrite par Grégoire au directeur ?",
    choices: [
      "Parfaitement rédigée et formelle",
      "Maladroite dans la forme mais sincère et touchante",
      "Agressive et revendicative",
      "Très courte et sans explication",
    ],
    correctIndex: 1,
    explanation:
      "La lettre est imparfaite sur le plan formel mais exprime avec sincérité la passion et la détermination de Grégoire.",
  },
  {
    id: 14,
    section: "Titre et sens",
    question: "Quel est le titre exact du roman ?",
    choices: [
      "35 grammes d'espoir",
      "35 kilos de tristesse",
      "35 kilos d'espoir",
      "Un kilo d'espoir",
    ],
    correctIndex: 2,
    explanation:
      '« 35 kilos d\'espoir » est le titre du roman d\'Anna Gavalda, publié en 2002.',
  },
  {
    id: 15,
    section: "Titre et sens",
    question: 'Qui a écrit "35 kilos d\'espoir" ?',
    choices: ["Roald Dahl", "Marie-Aude Murail", "J.K. Rowling", "Anna Gavalda"],
    correctIndex: 3,
    explanation:
      "Anna Gavalda est une auteure française connue pour ses romans pour adultes et pour la jeunesse.",
  },
  {
    id: 16,
    section: "Titre et sens",
    question: "Quel est le message principal du livre sur l'intelligence ?",
    choices: [
      "Seules les bonnes notes comptent",
      "Il faut obéir à ses parents",
      "Il existe plusieurs formes d'intelligence",
      "L'école est toujours juste",
    ],
    correctIndex: 2,
    explanation:
      "Le roman montre que Grégoire, mauvais élève, est extraordinairement doué de ses mains — l'intelligence ne se résume pas aux notes.",
  },
  {
    id: 17,
    section: "Fin du roman",
    question: "Comment Grégoire évolue-t-il à la fin du roman ?",
    choices: [
      "Il abandonne toute ambition",
      "Il trouve une école adaptée à ses talents",
      "Il devient champion sportif",
      "Il part vivre chez Grand-Léon",
    ],
    correctIndex: 1,
    explanation:
      "Grégoire trouve finalement une voie scolaire qui correspond à ses talents manuels et techniques.",
  },
  {
    id: 18,
    section: "Fin du roman",
    question: "Quelle est l'atmosphère de la fin du roman ?",
    choices: [
      "Triste et sans espoir",
      "Violente et dramatique",
      "Joyeuse et optimiste",
      "Indifférente",
    ],
    correctIndex: 2,
    explanation:
      "Le roman se termine sur une note d'espoir : Grégoire entrevoit enfin un avenir qui lui correspond.",
  },
  {
    id: 19,
    section: "Fin du roman",
    question: "Quel sentiment Grégoire éprouve-t-il principalement à l'école ?",
    choices: [
      "De la joie",
      "De l'indifférence",
      "De la fierté",
      "De la souffrance et de l'incompréhension",
    ],
    correctIndex: 3,
    explanation:
      "L'école est pour Grégoire un lieu de souffrance où il ne se sent ni compris ni valorisé.",
  },
  {
    id: 20,
    section: "Grand-Léon",
    question: "Quel mot résume le mieux le personnage de Grand-Léon ?",
    choices: ["Sévère", "Bienveillant", "Absent", "Indifférent"],
    correctIndex: 1,
    explanation:
      "Grand-Léon est le personnage bienveillant par excellence : il croit en Grégoire quand tout le monde a renoncé.",
  },
];
