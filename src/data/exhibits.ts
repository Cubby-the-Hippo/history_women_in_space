import type { ExhibitFigure } from '../types'

export const exhibitFigures: ExhibitFigure[] = [
  {
    id: 'earhart',
    name: 'Amelia Earhart',
    years: '1897–1937',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e80484f?w=800&q=80',
    biography:
      'Amelia Earhart was an American aviation pioneer and author who became one of the most celebrated figures of the early 20th century. Born in Kansas, she developed a passion for flight that would define her life and legacy.',
    achievements: [
      'First woman to fly solo across the Atlantic Ocean (1932)',
      'Set multiple aviation speed and altitude records',
      'Co-founded The Ninety-Nines, an organization for women pilots',
      'Published bestselling books on her flying experiences',
    ],
    significance:
      'Earhart transformed public perception of women in aviation. At a time when flying was considered a masculine pursuit, she demonstrated that courage and skill know no gender.',
    obstacles:
      'Earhart faced relentless media scrutiny that focused on her appearance as much as her achievements. She navigated a society that celebrated her while questioning whether women truly belonged in the cockpit.',
    stemContribution:
      'Her advocacy inspired generations of women to pursue careers in aviation, engineering, and aerospace. The Ninety-Nines continues to support women pilots worldwide.',
    artifactId: 'earhart-license',
  },
  {
    id: 'coleman',
    name: 'Bessie Coleman',
    years: '1892–1926',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    biography:
      'Born to sharecroppers in Texas, Bessie Coleman dreamed of flight when the sky seemed closed to Black women in America. Refused admission to U.S. flight schools, she taught herself French and traveled to France.',
    achievements: [
      'First African American and Native American woman to earn a pilot\'s license (1921)',
      'First Black person to earn an international aviation license',
      'Performed daring barnstorming shows across the United States',
      'Refused to perform at venues that segregated audiences',
    ],
    significance:
      'Coleman shattered racial and gender barriers simultaneously. She proved that determination could overcome systems designed to exclude—and inspired countless others to reach for the sky.',
    obstacles:
      'Denied training in America due to race and gender, Coleman faced poverty, discrimination, and the constant threat of violence. She died tragically in a plane crash at age 34, before seeing full recognition.',
    stemContribution:
      'The Bessie Coleman Aero Clubs and scholarships in her name continue to support Black women in aviation. Her legacy lives in every pilot who refused to accept "no" as an answer.',
    artifactId: 'bessie-photo',
  },
  {
    id: 'wasp',
    name: 'Women Airforce Service Pilots (WASP)',
    years: '1942–1944',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2ab5d8e9f?w=800&q=80',
    biography:
      'The WASP were a corps of American women who flew military aircraft during World War II. Led by pioneers like Jacqueline Cochran and Nancy Love, they freed male pilots for combat duty.',
    achievements: [
      'Flew over 60 million miles in military operations',
      'Ferried aircraft between factories and bases',
      'Towed aerial gunnery targets for training',
      'Test-flew repaired aircraft before return to service',
    ],
    significance:
      'The WASP proved that women could fly every type of military aircraft safely and skillfully. Their service was essential to the war effort, yet they were denied veteran status for decades.',
    obstacles:
      'WASP pilots received less pay than male counterparts, had no military rank, and were not covered by life insurance. Thirty-eight died in service; their families often paid for burials themselves.',
    stemContribution:
      'The WASP opened military aviation to women and demonstrated capabilities that would eventually lead to women serving in combat roles and space programs.',
    artifactId: 'wasp-uniform',
  },
  {
    id: 'ride',
    name: 'Sally Ride',
    years: '1951–2012',
    image: 'https://images.unsplash.com/photo-1457364559794-aa486e612e97?w=800&q=80',
    biography:
      'Sally Ride was an American physicist and astronaut who became the first American woman in space. A Stanford graduate with degrees in physics and English, she was selected for NASA\'s astronaut corps in 1978.',
    achievements: [
      'First American woman in space (STS-7, 1983)',
      'Youngest American astronaut at time of first flight',
      'Served on the Rogers Commission investigating Challenger disaster',
      'Founded Sally Ride Science to inspire girls in STEM',
    ],
    significance:
      'Ride\'s flight aboard Challenger proved that women belonged in space exploration. She handled intense media attention with grace while focusing on the science that mattered.',
    obstacles:
      'Ride faced sexist questions from reporters and the pressure of representing all women. She kept her personal life private in an era when LGBTQ+ identity could end careers.',
    stemContribution:
      'Sally Ride Science created educational programs reaching millions of students. Her legacy continues through initiatives that encourage girls to pursue science and engineering.',
    artifactId: 'ride-suit',
  },
  {
    id: 'jemison',
    name: 'Mae Jemison',
    years: 'Born 1956',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
    biography:
      'Mae Jemison is an American engineer, physician, and former NASA astronaut. Born in Alabama, she entered Stanford University at age 16 and earned degrees in chemical engineering and African American studies.',
    achievements: [
      'First Black woman in space (STS-47, 1992)',
      'Served as science mission specialist on Endeavour',
      'Founded technology research companies',
      'Led 100 Year Starship initiative exploring interstellar travel',
    ],
    significance:
      'Jemison\'s journey from the South to space embodied the expansion of possibility. She showed that excellence in STEM could emerge from any background when opportunity and determination align.',
    obstacles:
      'As a Black woman in STEM, Jemison encountered bias at every stage—from teachers who doubted her ambitions to institutions slow to recognize diverse talent.',
    stemContribution:
      'Through the Dorothy Jemison Foundation and educational outreach, she continues to inspire students worldwide to pursue science, particularly in underserved communities.',
    artifactId: 'sts47-patch',
  },
  {
    id: 'collins',
    name: 'Eileen Collins',
    years: 'Born 1956',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80',
    biography:
      'Eileen Collins is a retired U.S. Air Force colonel and NASA astronaut. She was among the first women to earn pilot wings in the U.S. military and became NASA\'s first female Space Shuttle commander.',
    achievements: [
      'First woman to pilot a Space Shuttle (1995)',
      'First woman to command a Space Shuttle mission (1999)',
      'Logged over 872 hours in space across four missions',
      'Led STS-114, the Return to Flight mission after Columbia',
    ],
    significance:
      'Collins broke the final barrier in shuttle operations—the commander\'s seat. Her leadership demonstrated that women could command the most complex flying machines ever built.',
    obstacles:
      'Collins entered military flight training when women were still rare in cockpits. She earned respect through exceptional skill while navigating institutional skepticism.',
    stemContribution:
      'Her career path from military pilot to shuttle commander created a model for women in aerospace leadership that continues to influence NASA and commercial space programs.',
    artifactId: 'sts47-patch',
  },
]
