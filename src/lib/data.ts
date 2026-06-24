import type {
  TeamMember,
  Partner,
  Initiative,
  ImpactStat,
  YouthComponent,
  FuturePlan,
  CoreValue,
} from "@/types";

// ─── Team ─────────────────────────────────────────────────────────────────────

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "fanuel-kataka-amanya",
    name: "Fanuel Kataka Amanya",
    title: "Executive Director / CEO",
    department: "Leadership",
    image: "/assets/fn.jpeg",
    bio: "Fanuel leads CPDF with a vision for fostering democratic values and empowering young people to engage in civic matters.",
  },
  {
    id: "momanyi-mangabo-joshua",
    name: "Momanyi Mang’abo Joshua",
    title: "Director, Governance, Legal Affairs & Strategic Partnerships",
    department: "Leadership",
    image: "/assets/momanyi.jpeg",
    bio: "Joshua ensures compliance with legal frameworks and leads strategic partnerships and governance initiatives.",
  },
  {
    id: "ruth-bolo",
    name: "Ruth Bolo",
    title: "Deputy Executive Director, International Relations",
    department: "Leadership",
    image: "/assets/bolo.jpeg",
    bio: "Ruth builds and manages CPDF’s international relations while supporting executive leadership.",
  },
  {
    id: "dorcas-khamonyi",
    name: "Dorcas Khamonyi",
    title: "Head of Communications",
    department: "Communications",
    image: "/assets/dorcas.jpeg",
    bio: "Dorcas leads CPDF’s communications, public relations, and digital outreach strategies.",
  },
  {
    id: "eugene-githu-mwangi",
    name: "Eugene Githu Mwangi",
    title: "Head of Programmes & Resource Mobilisation, Operations & Research",
    department: "Programs",
    image: "/assets/githu.jpeg",
    bio: "Eugene oversees programmes, resource mobilisation, operations, and research to strengthen CPDF’s strategic impact.",
  },
  {
    id: "ken-babu",
    name: "Ken Babu",
    title: "Secretary General",
    department: "Leadership",
    image: "/assets/ken.jpeg",
    bio: "Ken coordinates organizational direction and serves as the Secretary General of CPDF.",
  },
  {
    id: "vivian-nyaminsa",
    name: "Vivian Nyaminsa",
    title: "Head of Secretariat, Youth League",
    department: "Programs",
    image: "/assets/vivian.jpeg",
    bio: "Vivian leads the Youth League Secretariat, ensuring youth voices are represented and empowered within CPDF.",
  },
  {
    id: "judith-oyoo",
    name: "Judith Oyoo",
    title: "Secretary, Special Interest Group",
    department: "Programs",
    image: "/assets/judy.jpeg",
    bio: "Judith coordinates initiatives that focus on advancing special interest groups within CPDF.",
  },
  {
    id: "edward-owiny",
    name: "Edward Owiny",
    title: "2nd Deputy Director, Political Engagement & Intergovernmental Affairs",
    department: "Leadership",
    image: "/assets/edward.png",
    bio: "Edward drives political engagement strategies and fosters intergovernmental collaborations.",
  },
  {
    id: "dalton-musumba",
    name: "Dalton Musumba",
    title: "Research, Monitoring & Evaluation (M&E) Officer",
    department: "Research",
    image: "/assets/musumba.jpeg",
    bio: "Dalton tracks project progress and impact, ensuring continuous improvement.",
  },
  {
    id: "winnie-masiga",
    name: "Winnie Masiga",
    title: "Administrative Officer",
    department: "Operations",
    image: "/assets/winnie.jpeg",
    bio: "Winnie ensures smooth office operations, logistics, and procurement.",
  },
  {
    id: "dalton-mutaki",
    name: "Dalton Mutaki",
    title: "HR Manager / Officer",
    department: "Operations",
    image: "/assets/dalton.jpeg",
    bio: "Dalton oversees recruitment, staff welfare, and training.",
  },
  {
    id: "luis-wafula",
    name: "Luis Wafula",
    title: "IT Officer",
    department: "Digital",
    image: "/assets/luis.jpg",
    bio: "Luis maintains CPDF's technology infrastructure.",
  },
  {
    id: "frankline-okubo",
    name: "Frankline Okubo",
    title: "Social Media Manager",
    department: "Communications",
    image: "/assets/frankline_okubo.jpeg",
    bio: "Frankline manages CPDF’s online presence and content creation.",
  },
  {
    id: "laureen-omula",
    name: "Laureen Omula",
    title: "Volunteer Coordinator",
    department: "Programs",
    image: "/assets/lorine.jpeg",
    bio: "Laureen manages volunteer recruitment and activities.",
  },
  {
    id: "george-asino",
    name: "George Asino",
    title: "Creative Content Producer",
    department: "Communications",
    image: "/assets/george.jpeg",
    bio: "George produces creative content to enhance CPDF’s communication strategies.",
  },
];

// ─── Partners ─────────────────────────────────────────────────────────────────

export const PARTNERS: Partner[] = [
  {
    id: "thomson-reuters",
    name: "Thomson Reuters Foundation",
    logo: "/images/partners/thomson-reuters.png",
    website: "https://www.trust.org/",
    category: "foundation",
    description: "Corporate foundation advancing media freedom, inclusive economies, and human rights",
  },
  {
    id: "open-government-partnership",
    name: "Open Government Partnership",
    logo: "/images/partners/open-government.png",
    website: "https://opengovpartnership.org",
    category: "governance",
    description: "Multilateral initiative advancing open and accountable governance",
  },
  {
    id: "adenauer-kenya-network",
    name: "Adenauer Kenya Network",
    logo: "/images/partners/adenauer.png",
    website: "https://kas.de",
    category: "international",
    description: "Promoting democracy, rule of law, and social market economy",
  },
  {
    id: "manifesto-yetu",
    name: "Manifesto Yetu",
    logo: "/images/partners/manifesto-yetu.png",
    website: "https://www.manifestoyetu.org/",
    category: "civil-society",
    description: "Youth-led civic accountability movement in Kenya",
  },
];

// ─── Initiatives ──────────────────────────────────────────────────────────────

export const INITIATIVES: Initiative[] = [
  {
    id: "political-dialogues",
    title: "Facilitating Political Dialogues",
    description:
      "Organizing multi-party discussions on governance, electoral integrity, and democratic development to foster consensus and peaceful coexistence.",
    icon: "MessageSquare",
  },
  {
    id: "party-democracy",
    title: "Strengthening Internal Party Democracy",
    description:
      "Promoting transparent and participatory decision-making processes within political parties to ensure democratic culture from within.",
    icon: "Users",
  },
  {
    id: "electoral-reforms",
    title: "Electoral & Political Reforms Advocacy",
    description:
      "Engaging stakeholders to push for policy changes that enhance electoral credibility and broaden political participation.",
    icon: "Vote",
  },
  {
    id: "capacity-building",
    title: "Capacity Building for Youth & Leaders",
    description:
      "Providing training for political party leaders and young civic actors to enhance their understanding of democratic governance and ethical leadership.",
    icon: "GraduationCap",
  },
  {
    id: "gender-inclusion",
    title: "Promoting Gender & Minority Inclusion",
    description:
      "Encouraging political parties and civic organizations to increase women and minority representation in leadership positions.",
    icon: "Heart",
  },
  {
    id: "civic-engagement",
    title: "Enhancing Civic Engagement",
    description:
      "Supporting youth-led advocacy campaigns, digital activism, and grassroots movements for political accountability.",
    icon: "Globe",
  },
  {
    id: "good-governance",
    title: "Promoting Democracy & Good Governance",
    description:
      "Advancing democratic principles and accountability frameworks across Kenya's political landscape.",
    icon: "Shield",
  },
  {
    id: "digital-democracy",
    title: "Leveraging Technology for Democracy",
    description:
      "Using digital platforms and social media to increase civic participation, voter education, and government accountability.",
    icon: "Laptop",
  },
];

// ─── Impact Stats ─────────────────────────────────────────────────────────────

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: "youth-trained",
    value: 5000,
    suffix: "+",
    label: "Young Leaders Trained",
    description: "Youth leaders and civic activists empowered across Kenya",
  },
  {
    id: "political-parties",
    value: 20,
    suffix: "+",
    label: "Political Parties",
    description: "Cross-party partnerships strengthening democracy",
  },
  {
    id: "counties",
    value: 24,
    suffix: "",
    label: "Counties Targeted",
    description: "Counties earmarked for ICT and democracy centers",
  },
  {
    id: "dialogues",
    value: 50,
    suffix: "+",
    label: "Dialogues Facilitated",
    description: "High-level cross-party governance discussions",
  },
];

// ─── Youth Program Components ─────────────────────────────────────────────────

export const YOUTH_COMPONENTS: YouthComponent[] = [
  {
    id: "political-empowerment",
    title: "Youth Political Empowerment",
    description:
      "Training young leaders within political parties and civic spaces to take on leadership roles and influence policies at all levels.",
    icon: "Zap",
  },
  {
    id: "civic-education",
    title: "Civic Education & Engagement",
    description:
      "Increasing youth awareness of their democratic rights and responsibilities through outreach programs and digital campaigns.",
    icon: "BookOpen",
  },
  {
    id: "mentorship",
    title: "Mentorship & Networking",
    description:
      "Connecting young political aspirants and civic leaders with experienced mentors for guidance, support, and career development.",
    icon: "Network",
  },
  {
    id: "digital-democracy",
    title: "Digital Democracy & Innovation",
    description:
      "Leveraging technology and social media to enhance youth engagement in governance processes and civic accountability.",
    icon: "Smartphone",
  },
  {
    id: "policy-advocacy",
    title: "Policy Advocacy",
    description:
      "Pushing for legal and institutional reforms that enhance youth representation in governance structures and decision-making.",
    icon: "FileText",
  },
  {
    id: "electoral-participation",
    title: "Electoral Participation & Voter Mobilization",
    description:
      "Encouraging and educating young voters on the importance of participation in elections and policy-making processes.",
    icon: "CheckSquare",
  },
];

// ─── Future Plans ─────────────────────────────────────────────────────────────

export const FUTURE_PLANS: FuturePlan[] = [
  {
    id: "ict-centers",
    step: 1,
    title: "Build ICT Centers Across 24 Counties",
    description:
      "Establishing Information and Communication Technology centers to enable digital civic participation in all 24 targeted counties.",
    timeline: "2025–2026",
  },
  {
    id: "democracy-centers",
    step: 2,
    title: "Build Fully-Fledged Democracy Centers",
    description:
      "Creating dedicated democracy centers equipped with the latest technology for training, dialogue, and civic education.",
    timeline: "2025–2027",
  },
  {
    id: "government-funding",
    step: 3,
    title: "Advocate for Government Funding",
    description:
      "Lobbying for increased government funding dedicated to youth political participation and civic empowerment programs.",
    timeline: "2025",
  },
  {
    id: "international-partnerships",
    step: 4,
    title: "Strengthen Regional & International Partnerships",
    description:
      "Building new alliances with regional bodies and international organizations to amplify CPDF's impact and funding base.",
    timeline: "2025–2026",
  },
  {
    id: "training-expansion",
    step: 5,
    title: "Expand Training Programs",
    description:
      "Scaling training programs to reach more young leaders, civic actors, and political party members across all 47 counties.",
    timeline: "2026",
  },
  {
    id: "digital-platforms",
    step: 6,
    title: "Develop Digital Platforms for Youth Civic Engagement",
    description:
      "Launching purpose-built digital tools and mobile apps to enable youth civic participation, voter education, and accountability tracking.",
    timeline: "2026",
  },
];

// ─── Core Values ──────────────────────────────────────────────────────────────

export const CORE_VALUES: CoreValue[] = [
  {
    id: "transparency",
    title: "Transparency",
    description: "Upholding openness in all organizational activities and decision-making processes.",
    icon: "Eye",
  },
  {
    id: "accountability",
    title: "Accountability",
    description: "Taking responsibility in all actions and holding leaders and institutions to account.",
    icon: "Scale",
  },
  {
    id: "inclusivity",
    title: "Inclusivity",
    description: "Ensuring everyone has a voice, regardless of background, gender, or political affiliation.",
    icon: "Users",
  },
  {
    id: "rule-of-law",
    title: "Rule of Law",
    description: "Advocating for fairness, justice, and equal application of the law across Kenya.",
    icon: "Shield",
  },
];
