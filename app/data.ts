export type GrammarTopic = {
  id: string;
  title: string;
  category: "Tenses" | "Foundations";
  formula: string;
  subject: string;
  verb: string;
  object: string;
  explanation: string;
  tip: string;
};

export const grammarTopics: GrammarTopic[] = [
  {
    id: "simple-present",
    title: "Simple present",
    category: "Tenses",
    formula: "Subject + base verb (+ s)",
    subject: "I",
    verb: "work",
    object: "at a bakery.",
    explanation: "Use it for routines, facts, and things that happen often.",
    tip: "With he, she, or it, add -s: She works.",
  },
  {
    id: "simple-past",
    title: "Simple past",
    category: "Tenses",
    formula: "Subject + past verb",
    subject: "We",
    verb: "visited",
    object: "the village yesterday.",
    explanation: "Use it for an action that started and finished in the past.",
    tip: "Many past verbs end in -ed: clean → cleaned.",
  },
  {
    id: "present-continuous",
    title: "Present continuous",
    category: "Tenses",
    formula: "Subject + am / is / are + verb-ing",
    subject: "She",
    verb: "is learning",
    object: "English right now.",
    explanation: "Use it for an action happening now or around now.",
    tip: "Remember the -ing ending: read → reading.",
  },
  {
    id: "to-be",
    title: "The verb “to be”",
    category: "Foundations",
    formula: "I am · You are · He / She / It is",
    subject: "They",
    verb: "are",
    object: "ready for the quest.",
    explanation: "Use am, is, or are to talk about a person, place, or feeling.",
    tip: "Use are with you, we, and they.",
  },
  {
    id: "prepositions",
    title: "Basic prepositions",
    category: "Foundations",
    formula: "Subject + verb + place / time word",
    subject: "The book",
    verb: "is",
    object: "on the table.",
    explanation: "Prepositions show where or when something happens.",
    tip: "Try in a box, on a table, and at 9 o’clock.",
  },
];

export type InterviewOption = {
  text: string;
  worksWell: boolean;
  feedback: string;
};

export type InterviewQuestion = {
  question: string;
  hint: string;
  options: InterviewOption[];
};

export type InterviewScenario = {
  id: string;
  title: string;
  subtitle: string;
  questions: InterviewQuestion[];
};

export const interviewScenarios: InterviewScenario[] = [
  {
    id: "introduction",
    title: "A friendly introduction",
    subtitle: "Meet the village guild master",
    questions: [
      {
        question: "Can you tell me a little about yourself?",
        hint: "Share your name, a skill, and what kind of work you enjoy.",
        options: [
          {
            text: "I am Maya. I enjoy helping people, and I learn new tasks quickly.",
            worksWell: true,
            feedback:
              "Great answer! It is clear, friendly, and shares a useful strength.",
          },
          {
            text: "Myself Maya, maybe work good.",
            worksWell: false,
            feedback:
              "You have the right idea. Try a full sentence: “I am Maya, and I work well with people.”",
          },
          {
            text: "I do not know. Ask someone else.",
            worksWell: false,
            feedback:
              "It is okay to feel nervous. Start with your name and one thing you do well.",
          },
        ],
      },
      {
        question: "What do you like to do in your free time?",
        hint: "Use “I like to…” and name one activity.",
        options: [
          {
            text: "I like to read and spend time with my family.",
            worksWell: true,
            feedback:
              "Well done! This is a complete, natural answer with two simple details.",
          },
          {
            text: "Reading, family, yes.",
            worksWell: false,
            feedback:
              "Good words! Join them in a sentence: “I like reading and being with my family.”",
          },
          {
            text: "That is not important.",
            worksWell: false,
            feedback:
              "A short, friendly answer helps the interviewer get to know you.",
          },
        ],
      },
    ],
  },
  {
    id: "strengths",
    title: "Your strengths",
    subtitle: "Show what you do well",
    questions: [
      {
        question: "What is one of your strengths?",
        hint: "Name a strength and give a small example.",
        options: [
          {
            text: "I am organized. I make a list so I remember each task.",
            worksWell: true,
            feedback:
              "Excellent! You name a strength and explain how you use it.",
          },
          {
            text: "I am good at everything.",
            worksWell: false,
            feedback:
              "Choose one real strength and add an example. This feels more honest and clear.",
          },
          {
            text: "I have no strengths.",
            worksWell: false,
            feedback:
              "Everyone has something they do well. You could say, “I am patient” or “I learn quickly.”",
          },
        ],
      },
      {
        question: "What is something you are learning to improve?",
        hint: "Share one small area and the step you are taking.",
        options: [
          {
            text: "I am improving my speaking. I practice a little every day.",
            worksWell: true,
            feedback:
              "That works well! You show self-awareness and explain how you are improving.",
          },
          {
            text: "I have no weaknesses at all.",
            worksWell: false,
            feedback:
              "A learning goal sounds more honest. Try naming a skill you are practicing.",
          },
          {
            text: "I am bad at many things.",
            worksWell: false,
            feedback:
              "Keep it positive. Name just one skill and explain what you are doing to grow.",
          },
        ],
      },
    ],
  },
  {
    id: "role",
    title: "Why this role?",
    subtitle: "Choose your next adventure",
    questions: [
      {
        question: "Why would you like this job?",
        hint: "Connect something you enjoy with the work.",
        options: [
          {
            text: "I enjoy helping customers, and I would like to learn more about this work.",
            worksWell: true,
            feedback:
              "Strong answer! It connects your interest to the role and shows you want to learn.",
          },
          {
            text: "I just need a job. That is all.",
            worksWell: false,
            feedback:
              "You can be honest and still show interest. Mention one part of the role you like.",
          },
          {
            text: "Because it is there.",
            worksWell: false,
            feedback:
              "Add a reason that is about you, such as a skill you want to use or learn.",
          },
        ],
      },
      {
        question: "What would you bring to our team?",
        hint: "Think about a helpful skill or the way you work with others.",
        options: [
          {
            text: "I am dependable, and I like working with a team.",
            worksWell: true,
            feedback:
              "Nice work! These are useful qualities, shared in two simple sentences.",
          },
          {
            text: "You will find out later.",
            worksWell: false,
            feedback:
              "Give the interviewer one helpful detail now, like being dependable or kind.",
          },
          {
            text: "Nothing special.",
            worksWell: false,
            feedback:
              "You do not need a special answer. A real strength is enough to get started.",
          },
        ],
      },
    ],
  },
];

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Choose the correct sentence.",
    options: ["He walk to work.", "He walks to work.", "He walking to work."],
    answer: 1,
    explanation: "With he, she, or it in the simple present, add -s to the verb.",
  },
  {
    question: "I ___ happy to meet you.",
    options: ["am", "is", "are"],
    answer: 0,
    explanation: "Use am with I: “I am happy.”",
  },
  {
    question: "They ___ dinner right now.",
    options: ["cook", "cooked", "are cooking"],
    answer: 2,
    explanation: "“Right now” tells us the action is happening now: are + verb-ing.",
  },
  {
    question: "Yesterday, we ___ the new library.",
    options: ["visit", "visited", "visiting"],
    answer: 1,
    explanation: "Use the past form visited for a finished action yesterday.",
  },
  {
    question: "The keys are ___ the table.",
    options: ["on", "at", "under of"],
    answer: 0,
    explanation: "Use on when something rests on the top surface of another thing.",
  },
  {
    question: "Choose the correct sentence.",
    options: ["She are a teacher.", "She am a teacher.", "She is a teacher."],
    answer: 2,
    explanation: "Use is with he, she, and it: “She is a teacher.”",
  },
  {
    question: "We ___ English every morning.",
    options: ["study", "studies", "studying"],
    answer: 0,
    explanation: "Use the base verb with we in the simple present: “We study.”",
  },
  {
    question: "The meeting starts ___ 9 o’clock.",
    options: ["in", "on", "at"],
    answer: 2,
    explanation: "Use at with a specific time: “at 9 o’clock.”",
  },
];
