import morningNotes from '../assets/images/projects/morning-notes.png'
import localFinds from '../assets/images/projects/local-finds.png'
import studySpace from '../assets/images/projects/study-space.png'

export const projects = [
  {
    slug: 'morning-notes',
    title: 'Morning Notes',
    image: morningNotes,
    summary: 'A notes interface that gives daily thoughts, weekly plans, and ideas a place of their own.',
    tools: ['React', 'Vite', 'CSS'],
    whatItDoes: 'The interface brings notes into one calm workspace. A sidebar separates Today, This week, Ideas, and Archive, making the different kinds of writing easy to find.',
    whatIUsed: 'React, Vite, and plain CSS. Semantic markup provides a clear structure, while reusable components keep the layout consistent.',
    whatWasHard: 'The design challenge is balancing navigation with a quiet writing area. The narrow sidebar, generous space, and restrained controls keep the notes at the center of the composition.',
  },
  {
    slug: 'local-finds',
    title: 'Local Finds',
    image: localFinds,
    summary: 'A neighborhood discovery interface that brings nearby places, categories, and a map into one view.',
    tools: ['React', 'Vite', 'CSS'],
    whatItDoes: 'The interface presents nearby places alongside a map. Search and category chips sit above the listings, keeping a neighborhood search easy to scan.',
    whatIUsed: 'React, Vite, and plain CSS. Shared card styles, semantic markup, and responsive layouts keep the content clear across screen sizes.',
    whatWasHard: 'The design challenge is making a place list and a map work together. Grouped filters, consistent listing cards, and a distinct map area give each part a clear role without competing for attention.',
  },
  {
    slug: 'study-space',
    title: 'Study Space',
    image: studySpace,
    summary: 'A study dashboard that puts goals, study hours, and the week ahead in a clear overview.',
    tools: ['React', 'Vite', 'CSS'],
    whatItDoes: 'The interface brings study goals, hours, progress, and a weekly task list together. A streak indicator adds continuity, while the overview helps someone see what is next at a glance.',
    whatIUsed: 'React, Vite, and plain CSS. Reusable sections and a shared spacing scale keep the content organized and the layout consistent.',
    whatWasHard: 'The design challenge is showing several kinds of progress without crowding the page. Distinct panels, short labels, and a clear weekly list separate the overview from the next actions.',
  },
]
