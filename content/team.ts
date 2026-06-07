export type TeamMember = {
  id: string;
  name: string;
  credentials: string;
  role: string;
  pronouns: string;
  image: string;
  summary: string;
  bio: string[];
  bookingUrl?: string;
  languages?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "sonia",
    name: "Dr. Sonia Packwood",
    credentials: "Registered Psychologist",
    role: "Director · Clinical Neuropsychology",
    pronouns: "She/Her",
    image: "/images/sonia.svg",
    languages: "English and French",
    bookingUrl:
      "https://integratedneuro.janeapp.com/locations/integrated-neuro/book#/staff_member/1",
    summary:
      "Dr. Packwood specializes in clinical neuropsychology, providing assessment, education, and treatment recommendations for individuals with brain injury and neurological conditions.",
    bio: [
      "While working in private healthcare, Dr. Packwood noticed a lack of available counselling services offered in a collaborative setting and felt a strong interest in working with a skilled team. She believes that healthcare providers must work collaboratively to efficiently provide service to clients.",
      "Dr. Packwood is a registered psychologist in British Columbia, specializing in Clinical Neuropsychology. Upon completing her doctorate, she undertook a two-year fellowship in Clinical Neuropsychology at Barrow Neurological Institute.",
      "She has practiced in a variety of settings within both public and private health sectors, with experience working with professional athletes and organizations including the Phoenix Coyotes, Vancouver Canucks, Vancouver Whitecaps, and the Canada snowboard team.",
      "Given her expertise as a neuropsychologist, Dr. Packwood focuses on providing education and resources to help clients improve their quality of life and reach their goals, using a Cognitive Behavioural Therapy-centered approach.",
    ],
  },
  {
    id: "jennifer",
    name: "Jennifer Allen",
    credentials: "Registered Social Worker",
    role: "Counsellor",
    pronouns: "She/Her",
    image: "/images/jennifer.svg",
    bookingUrl:
      "https://integratedneuro.janeapp.com/locations/integrated-neuro/book#/staff_member/5",
    summary:
      "Jennifer provides counselling for anxiety, depression, grief, trauma, and adjustment to health changes, with specialized knowledge of brain-related health conditions.",
    bio: [
      "Jennifer believes that creating trust, connection, and compassion within the therapeutic relationship is at the heart of the counselling process. This allows a person's inherent strengths to evolve, growth and healing to occur, and an enhanced self-awareness and level of coping to be realized.",
      "Jennifer is a BC Registered Social Worker (RSW) with a Master of Social Work (MSW) from the University of British Columbia. She has over 20 years of experience in both public health care and private practice.",
      "She has specialized skills and knowledge about brain-related health conditions such as traumatic brain injury, concussion, stroke, and dementia. This includes helping people work through anxiety, depression, trauma, grief and loss, stress, adjustment to health changes, and relationship challenges.",
      "Jennifer incorporates EMDR, mindfulness, cognitive behaviour therapy, and solution focused therapy, embedded in a trauma-informed, systems perspective.",
    ],
  },
];