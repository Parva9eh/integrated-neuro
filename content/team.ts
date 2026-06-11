const headshotFallback = "/images/headshot.svg";

export type TeamMember = {
  id: string;
  name: string;
  credentials: string;
  role: string;
  image: string;
  imageFallback: string;
  summary: string;
  bio: string[];
  languages?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "sonia",
    name: "Dr. Sonia Packwood",
    credentials: "Licensed Psychologist",
    role: "Director · Clinical Neuropsychology",
    image: "/images/sonia.jpg",
    imageFallback: headshotFallback,
    languages: "English and French",
    summary:
      "Dr. Packwood provides clinical neuropsychological assessment, education, and treatment recommendations for individuals with brain injury, concussion, and neurological conditions such as dementia.",
    bio: [
      "Dr. Packwood founded Integrated Neuro to bring collaborative, evidence-informed neurological care to Vancouver. She believes healthcare providers must work together to efficiently support clients with complex, multifaceted challenges.",
      "She is a licensed psychologist in British Columbia, specializing in Clinical Neuropsychology. After completing her doctorate, she undertook a two-year fellowship at Barrow Neurological Institute — one of North America's leading neurology hospitals.",
      "Her experience spans public and private health sectors, including work with professional athletes and organizations such as the Vancouver Canucks, Vancouver Whitecaps, and Canada's national snowboard team.",
      "Dr. Packwood's approach centres on education and practical resources to help clients improve their quality of life, using a Cognitive Behavioural Therapy-informed framework.",
    ],
  },
  {
    id: "jennifer",
    name: "Jennifer Allen",
    credentials: "Registered Social Worker",
    role: "Counsellor · IN-Sight Mind Body Wellness",
    image: "/images/jennifer.jpg",
    imageFallback: headshotFallback,
    summary:
      "Jennifer provides counselling for anxiety, depression, grief, trauma, and adjustment to health changes — with specialized expertise in brain injury, concussion, stroke, and dementia.",
    bio: [
      "Jennifer believes that trust, connection, and compassion within the therapeutic relationship are the foundation of meaningful change. She helps clients draw on their inherent strengths to grow, heal, and develop new ways of coping.",
      "She is a BC Registered Social Worker (RSW) with a Master of Social Work from the University of British Columbia, and over 20 years of experience in public health care and private practice.",
      "Her expertise includes anxiety, depression, trauma, grief and loss, relationship challenges, and navigating complex health care systems. She has advanced knowledge of brain-related conditions including TBI, concussion, stroke, and dementia.",
      "Jennifer draws on EMDR, mindfulness, cognitive behaviour therapy, and solution-focused therapy — all within a trauma-informed, systems-based perspective.",
    ],
  },
];
