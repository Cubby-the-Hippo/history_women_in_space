import type { GameNode } from '../types'

export const gameRoutes = {
  '1920s': {
    title: '1920s Aspiring Pilot',
    subtitle: 'The sky is closed—but not forever',
    startId: 'pilot-start',
  },
  wasp: {
    title: 'WWII WASP Pilot',
    subtitle: 'Prove your skill when the nation needs you',
    startId: 'wasp-start',
  },
  astronaut: {
    title: '1980s Astronaut Trainee',
    subtitle: 'Train for the stars under the world\'s gaze',
    startId: 'astro-start',
  },
  modern: {
    title: 'Modern Aerospace Engineer',
    subtitle: 'Build the future from the ground up',
    startId: 'modern-start',
  },
} as const

export type GameRouteKey = keyof typeof gameRoutes

export const gameNodes: Record<string, GameNode> = {
  'pilot-start': {
    id: 'pilot-start',
    route: '1920s',
    speaker: 'Narrator',
    text: 'Chicago, 1925. You are a young woman with dreams of flight. Newspapers celebrate Amelia Earhart\'s Atlantic crossing, but every flight school you visit turns you away. "Flying is no profession for a lady," they say.',
    educational:
      'In the 1920s, fewer than 200 women held pilot licenses in the United States. Flight schools routinely rejected female applicants.',
    choices: [
      { label: 'Apply to another American flight school', nextId: 'pilot-denied' },
      { label: 'Research training programs abroad', nextId: 'pilot-france' },
      { label: 'Seek out Bessie Coleman\'s story for inspiration', nextId: 'pilot-bessie' },
    ],
  },
  'pilot-denied': {
    id: 'pilot-denied',
    route: '1920s',
    text: 'The instructor barely looks up from his paperwork. "We don\'t take women here. Try somewhere else." You\'ve heard this twelve times now. Your savings are dwindling, but your determination grows.',
    educational:
      'Systematic exclusion from flight training forced many aspiring women pilots to abandon their dreams or seek alternatives outside the United States.',
    choices: [
      { label: 'Refuse to give up—find another way', nextId: 'pilot-france' },
      { label: 'Organize with other women seeking training', nextId: 'pilot-organize' },
    ],
  },
  'pilot-bessie': {
    id: 'pilot-bessie',
    route: '1920s',
    text: 'You read about Bessie Coleman—how she learned French, sailed to France, and earned her license from the Fédération Aéronautique Internationale. If the sky was closed to her in America, she opened it herself abroad. Her story lights a fire in you.',
    artifactUnlock: 'bessie-photo',
    educational:
      'Bessie Coleman (1892–1926) became the first African American and Native American woman to earn a pilot\'s license in 1921, training in France after being denied in the U.S.',
    choices: [
      { label: 'Begin studying French for flight school in France', nextId: 'pilot-france' },
      { label: 'Share Coleman\'s story at your local community center', nextId: 'pilot-organize' },
    ],
  },
  'pilot-organize': {
    id: 'pilot-organize',
    route: '1920s',
    text: 'You gather six other women who share your dream. Together, you write letters to newspapers, contact aviation clubs, and pool resources. The Ninety-Nines won\'t form for another four years, but you are planting seeds.',
    educational:
      'Women pilots often relied on networks and mutual support. Amelia Earhart later co-founded The Ninety-Nines in 1929 to advance women in aviation.',
    choices: [
      { label: 'Pool funds to send one member to train abroad', nextId: 'pilot-france' },
      { label: 'Continue advocating for American schools to accept women', nextId: 'pilot-denied' },
    ],
  },
  'pilot-france': {
    id: 'pilot-france',
    route: '1920s',
    text: 'Six months later, you stand on a airfield outside Paris. The training is grueling—your instructor pushes harder because you are a woman. But you master the loops, the spins, the emergency landings. In 1927, you earn your international pilot\'s license.',
    artifactUnlock: 'earhart-license',
    educational:
      'Many American women trained in France, including Bessie Coleman and later members of the golden age of aviation. International licenses were recognized worldwide.',
    choices: [
      { label: 'Return to America to barnstorm and inspire others', nextId: 'pilot-ending-inspire' },
      { label: 'Stay in Europe to compete in air races', nextId: 'pilot-ending-racer' },
    ],
  },
  'pilot-ending-inspire': {
    id: 'pilot-ending-inspire',
    route: '1920s',
    text: 'You tour small towns across the Midwest, giving flights to girls who have never seen a woman pilot. One girl asks if she can be like you someday. "The sky is open," you tell her. "You just have to fly toward it."',
    isEnding: true,
    endingTitle: 'Trailblazer of the Golden Age',
    endingReflection:
      'You joined a generation of women who refused to accept closed doors. Your courage helped pave the runway for every woman pilot who followed.',
    artifactUnlock: 'earhart-license',
  },
  'pilot-ending-racer': {
    id: 'pilot-ending-racer',
    route: '1920s',
    text: 'You compete in the Coupe Féminine, finishing among the top pilots. European newspapers call you "America\'s answer to Earhart." You prove that skill—not gender—belongs in the cockpit.',
    isEnding: true,
    endingTitle: 'Champion of the Skies',
    endingReflection:
      'By competing at the highest levels, you challenged the world\'s assumptions about women\'s capabilities in technical, high-stakes fields.',
  },

  'wasp-start': {
    id: 'wasp-start',
    route: 'wasp',
    speaker: 'Narrator',
    text: 'Sweetwater, Texas, 1943. You have 500 hours of flying experience—more than many male military pilots. The Army Air Forces needs pilots, and for the first time, they\'re recruiting women. You report to Avenger Field as a WASP trainee.',
    educational:
      'The Women Airforce Service Pilots program trained 1,074 women to fly military aircraft between 1942 and 1944.',
    choices: [
      { label: 'Focus on mastering the B-26 Marauder', nextId: 'wasp-training' },
      { label: 'Volunteer for the dangerous towing missions', nextId: 'wasp-towing' },
      { label: 'Support fellow trainees facing discrimination', nextId: 'wasp-solidarity' },
    ],
  },
  'wasp-training': {
    id: 'wasp-training',
    route: 'wasp',
    text: 'The B-26 has a reputation—the "Widow Maker." Male pilots refuse to fly it, but WASP are assigned to prove it\'s safe. Your hands steady on the controls, you complete every test flight flawlessly. The men watch in silence.',
    educational:
      'WASP pilots flew 77 types of aircraft, including bombers and fighters. They often flew aircraft male pilots considered too dangerous.',
    choices: [
      { label: 'Accept the dangerous ferry missions', nextId: 'wasp-ferry' },
      { label: 'Document your flight hours for official records', nextId: 'wasp-recognition' },
    ],
  },
  'wasp-towing': {
    id: 'wasp-towing',
    route: 'wasp',
    text: 'You tow a target sleeve behind your aircraft while gunners below practice anti-aircraft fire. The bullets come close—too close. This is one of the most dangerous WASP assignments, but the training saves lives in combat.',
    educational:
      'WASP towed aerial gunnery targets, flew tracking missions, and simulated strafing runs—essential but hazardous training support.',
    choices: [
      { label: 'Complete your mission and file your report', nextId: 'wasp-ferry' },
      { label: 'Speak to command about inadequate safety equipment', nextId: 'wasp-solidarity' },
    ],
  },
  'wasp-solidarity': {
    id: 'wasp-solidarity',
    route: 'wasp',
    text: 'A fellow WASP was killed last week. The Army didn\'t pay for her funeral—her family did. You and your sisters collect money from your own meager pay to honor her. You write letters to Congress demanding recognition.',
    artifactUnlock: 'wasp-uniform',
    educational:
      'Thirty-eight WASP died in service. Because they were classified as civilians, families received no military death benefits.',
    choices: [
      { label: 'Continue flying—honor her by doing your duty', nextId: 'wasp-ferry' },
      { label: 'Join the campaign for military status', nextId: 'wasp-recognition' },
    ],
  },
  'wasp-ferry': {
    id: 'wasp-ferry',
    route: 'wasp',
    text: 'You ferry a P-51 Mustang from a factory in California to the East Coast—2,500 miles alone. Below, the country you serve still debates whether women belong in cockpits. Above, you know the answer.',
    artifactUnlock: 'wasp-uniform',
    choices: [
      { label: 'Push for WASP to receive military benefits', nextId: 'wasp-recognition' },
      { label: 'Train the next class of WASP recruits', nextId: 'wasp-ending-mentor' },
    ],
  },
  'wasp-recognition': {
    id: 'wasp-recognition',
    route: 'wasp',
    text: 'The war ends. The WASP program is disbanded—no ceremony, no benefits, no veteran status. But in 1977, Congress finally grants you military recognition. In 2010, you receive the Congressional Gold Medal. You were always veterans.',
    choices: [
      { label: 'Reflect on your legacy', nextId: 'wasp-ending-legacy' },
    ],
  },
  'wasp-ending-mentor': {
    id: 'wasp-ending-mentor',
    route: 'wasp',
    text: 'You train 47 women before the program ends. Decades later, one becomes a Space Shuttle commander. She writes to thank you: "You showed us the sky was ours."',
    isEnding: true,
    endingTitle: 'Guardian of the Squadron',
    endingReflection:
      'The WASP flew over 60 million miles and proved women\'s capabilities in military aviation. Their legacy lives in every woman who commands an aircraft today.',
    artifactUnlock: 'wasp-uniform',
  },
  'wasp-ending-legacy': {
    id: 'wasp-ending-legacy',
    route: 'wasp',
    text: 'Standing at the Congressional Gold Medal ceremony, you think of the 38 sisters who didn\'t live to see this day. "We did it," you whisper. "We always belonged here."',
    isEnding: true,
    endingTitle: 'Honored at Last',
    endingReflection:
      'The WASP story teaches that recognition delayed is justice denied—but persistence can eventually right historical wrongs.',
    artifactUnlock: 'wasp-uniform',
  },

  'astro-start': {
    id: 'astro-start',
    route: 'astronaut',
    speaker: 'Narrator',
    text: 'Houston, 1979. You are one of six women selected for NASA\'s astronaut corps—the first American women ever chosen. The training is brutal: survival school, T-38 jets, physics, engineering. The world watches every move you make.',
    educational:
      'NASA selected its first six women astronauts in 1978. Sally Ride would become the first American woman in space in 1983.',
    choices: [
      { label: 'Focus on mastering the T-38 training jets', nextId: 'astro-training' },
      { label: 'Handle media questions with dignity', nextId: 'astro-media' },
      { label: 'Study Sally Ride\'s scientific background', nextId: 'astro-science' },
    ],
  },
  'astro-training': {
    id: 'astro-training',
    route: 'astronaut',
    text: 'You pull 7 Gs in the centrifuge until vision grays at the edges. Your male classmates have been training for this their whole lives—but you match them hour for hour. The instructor marks "qualified" on your chart.',
    educational:
      'Astronaut training includes high-G centrifuge runs, wilderness survival, spacewalk simulation in water tanks, and thousands of hours of systems study.',
    choices: [
      { label: 'Prepare for your mission assignment', nextId: 'astro-mission' },
      { label: 'Mentor the next class of women astronauts', nextId: 'astro-mentor' },
    ],
  },
  'astro-media': {
    id: 'astro-media',
    route: 'astronaut',
    text: 'A reporter asks: "Will you wear makeup in space?" Another wants to know about your emotions during launch. You redirect: "The mission requires focus, training, and teamwork. That\'s what matters." Sally Ride faced the same questions—and answered with grace.',
    educational:
      'Women astronauts faced sexist media coverage that rarely confronted male astronauts. Ride and others worked to shift focus to science and capability.',
    choices: [
      { label: 'Request NASA improve media training for all astronauts', nextId: 'astro-mentor' },
      { label: 'Return focus to mission preparation', nextId: 'astro-science' },
    ],
  },
  'astro-science': {
    id: 'astro-science',
    route: 'astronaut',
    text: 'You spend nights in the simulator running experiments—protein crystal growth, materials science, Earth observation. Your PhD in physics prepared you for this. In space, you will conduct research that can only be done in microgravity.',
    artifactUnlock: 'ride-suit',
    educational:
      'Sally Ride was a physicist. Mae Jemison was a physician and engineer. Scientific expertise was essential to astronaut selection and mission success.',
    choices: [
      { label: 'Prepare for launch day', nextId: 'astro-mission' },
      { label: 'Develop outreach programs for young scientists', nextId: 'astro-mentor' },
    ],
  },
  'astro-mentor': {
    id: 'astro-mentor',
    route: 'astronaut',
    text: 'You visit schools across the country. A girl in Detroit asks if she can be an astronaut. "Look at me," you say. "I\'m from a neighborhood just like yours. The path is hard, but it exists." She believes you.',
    choices: [
      { label: 'Continue toward your own mission', nextId: 'astro-mission' },
    ],
  },
  'astro-mission': {
    id: 'astro-mission',
    route: 'astronaut',
    text: 'Launch day. Challenger rises on a pillar of fire. Weightlessness. Earth curves below in impossible blue. You float to the experiment rack and begin your work. 180 miles up, you are exactly where you belong.',
    artifactUnlock: 'ride-suit',
    choices: [
      { label: 'Complete your mission and return home', nextId: 'astro-ending-space' },
    ],
  },
  'astro-ending-space': {
    id: 'astro-ending-space',
    route: 'astronaut',
    text: 'Back on Earth, a girl sends you her science fair project—a model rocket with your name on it. "Thank you for showing me the way," she writes. You pin it in your office next to your mission patch.',
    isEnding: true,
    endingTitle: 'Among the Stars',
    endingReflection:
      'You joined Sally Ride, Mae Jemison, and Eileen Collins in proving that space belongs to all humanity. Your mission expanded what girls believe is possible.',
    artifactUnlock: 'sts47-patch',
  },

  'modern-start': {
    id: 'modern-start',
    route: 'modern',
    speaker: 'Narrator',
    text: 'Seattle, 2024. You are a aerospace engineer designing satellite systems. Your team is brilliant—but you\'re the only woman in the room. Last week, a colleague interrupted your presentation to explain your own design back to you.',
    educational:
      'Women remain underrepresented in aerospace engineering. As of recent data, women hold roughly 15-20% of engineering roles in the aerospace sector.',
    choices: [
      { label: 'Present your design again—with data to back every claim', nextId: 'modern-prove' },
      { label: 'Mentor the intern who reminds you of yourself', nextId: 'modern-mentor' },
      { label: 'Propose a diversity initiative to leadership', nextId: 'modern-advocate' },
    ],
  },
  'modern-prove': {
    id: 'modern-prove',
    route: 'modern',
    text: 'You rebuild the presentation with test results, thermal models, and failure analysis. In the review meeting, you walk through every number. The project lead nods. "This design is solid. Let\'s proceed." No one interrupts this time.',
    educational:
      'Research shows that women in STEM often face "prove it again" bias—needing more evidence than male colleagues to be credited for the same competence.',
    choices: [
      { label: 'Lead the satellite deployment mission', nextId: 'modern-mission' },
      { label: 'Document best practices for inclusive team reviews', nextId: 'modern-advocate' },
    ],
  },
  'modern-mentor': {
    id: 'modern-mentor',
    route: 'modern',
    text: 'The intern, Priya, is brilliant but hesitant to speak in meetings. You coach her through her first major presentation. She crushes it. Later, she tells you: "I didn\'t know someone like me could lead here."',
    educational:
      'Mentorship significantly impacts retention of women in STEM. Having role models and sponsors helps navigate workplace challenges.',
    choices: [
      { label: 'Recommend Priya for the leadership development program', nextId: 'modern-advocate' },
      { label: 'Collaborate on the satellite project together', nextId: 'modern-mission' },
    ],
  },
  'modern-advocate': {
    id: 'modern-advocate',
    route: 'modern',
    text: 'Your proposal reaches the CEO: paid internships for underrepresented students, blind review for technical promotions, and a speaker series featuring women in aerospace. She approves the pilot program. Change begins with structure, not just inspiration.',
    choices: [
      { label: 'Launch the satellite you designed', nextId: 'modern-mission' },
    ],
  },
  'modern-mission': {
    id: 'modern-mission',
    route: 'modern',
    text: 'The satellite you designed enters orbit—monitoring climate patterns that will inform policy for decades. Mission control erupts. Priya is at the console beside you. "We did it," she says. "We absolutely did."',
    artifactUnlock: 'sts47-patch',
    choices: [
      { label: 'Celebrate and look toward the future', nextId: 'modern-ending-orbit' },
    ],
  },
  'modern-ending-orbit': {
    id: 'modern-ending-orbit',
    route: 'modern',
    text: 'That night, you stand on your roof watching the satellite pass overhead—a point of light you helped put there. You think of Bessie, the WASP, Sally, Mae, Eileen. They built the path. You are walking it forward.',
    isEnding: true,
    endingTitle: 'Engineer of Tomorrow',
    endingReflection:
      'Today\'s women in aerospace stand on the shoulders of pioneers who refused to accept exclusion. Your work continues their legacy into the stars.',
    artifactUnlock: 'sts47-patch',
  },
}
