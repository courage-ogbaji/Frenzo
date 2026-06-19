// Well-wishers and their birthday messages.
// To add a wisher: copy an entry, give it a unique `slug`, drop their photo in
// `public/images/wishers/<slug>.jpg` (or update the `image` path), write a short
// `excerpt` for the card and the full `message` (one string per paragraph).

export type Wish = {
  slug: string;
  name: string;
  image: string; // path under /public
  excerpt: string; // short teaser shown on the card
  message: string[]; // full message, one entry per paragraph
};

export const wishes: Wish[] = [
  {
    slug: "betty",
    name: "Betty",
    image: "/images/wishers/betty.jpg",
    excerpt:
      "From the very first day, you made the world feel warmer. Happy birthday to the kindest soul I know…",
    message: [
      "From the very first day, you made the world feel warmer. Happy birthday to the kindest soul I know.",
      "Thank you for every late-night call, every shared laugh, and every time you believed in me when I couldn't believe in myself.",
      "Here's to another year of adventures, growth, and ridiculous inside jokes. I love you more than words can say.",
    ],
  },
  {
    slug: "godcolors",
    name: "Godcolors",
    image: "/images/wishers/godcolors.jpeg",
    excerpt:
      "You've always been my hero and my compass. Wishing you the happiest of birthdays…",
    message: [
      "You've always been my hero and my compass. Wishing you the happiest of birthdays.",
      "Watching you chase your dreams has taught me what courage really looks like. I'm endlessly proud of you.",
      "May this year bring you everything you've worked so hard for, and more joy than you can hold.",
    ],
  },
  {
    slug: "kairos",
    name: "Kairos",
    image: "/images/wishers/kairos.jpg",
    excerpt:
      "Knowing you has been a gift. You make even the hardest days brighter. Happy birthday…",
    message: [
      "Knowing you has been a gift. You make even the hardest days brighter. Happy birthday!",
      "Your passion is contagious and your generosity never goes unnoticed. We are all lucky to have you.",
      "Wishing you a year filled with well-earned wins and the celebration you truly deserve.",
    ],
  },
];

export function getWish(slug: string): Wish | undefined {
  return wishes.find((wish) => wish.slug === slug);
}
