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
  {
    slug: "Sarah",
    name: "Sarah",
    image: "/images/wishers/sarah.jpeg",
    excerpt:
      "Your life is a beautiful testimony of consistent growth, unwaring faith, and a sincere love for God...",
    message: [
      "Happy Birthday to a truly remarkable person!",

      "Your life is a beautiful testimony of consistent growth, unwavering faith, and a sincere love for God.",
      "It's inspiring to see how you've continued to mature in character, wisdom, and purpose while keeping your heart anchored in Him. Your genuine passion for God and the way you reflect His love in your words and actions have touched more lives than you may realize.",

      "As you celebrate another year, may God continue to increase you in grace, favor, wisdom, and strength. May your walk with Him grow even deeper, your purpose become even clearer, and your days be filled with joy, peace, and divine fulfillment.",

      "Thank you for being a shining example of what it means to grow faithfully and love God wholeheartedly. Wishing you a birthday filled with God's goodness and a year overflowing with His blessings.",
      "Happy Birthday Bem! 🎉🎂🙏✨"
        ],
  },
  {
    slug: "pst-joe",
    name: "Pst. Joe",
    image: "/images/wishers/pst-joe.jpg",
    excerpt:
      "Just have \"a Bem\" around, and you'll automatically become lazy. God bless your beautiful soul…",
    message: [
      "Bem Ben Benjamin!",
      "[I don't know if it's proper to be smiling and blushing at a birthday Goodwill message, but for Bem, I had to😊.] Just have \"a Bem\" around, and you'll automatically become lazy.",
      "God bless your beautiful soul, and make blossoming your already large heart.",
      "In this new phase, may He crown all your efforts with the fattest cattles in the field.",
      "Thank you for being the best of yourself",
      "Thank you for all your selfless services",
      "You'll definitely reap where you did not sow... So cheers to greatness!! and Happy blessed birthday!! 👏💫✨️",
    ],
  },
  {
    slug: "prince-oche",
    name: "Prince Oche",
    image: "/images/wishers/prince-oche.jpg",
    excerpt:
      "A kingdom soldier like you is rare. Strong in faith, steady in battle, and faithful to the King…",
    message: [
      "Happy Birthday, Mr. Benjamin! 🎉",
      "A kingdom soldier like you is rare. Strong in faith, steady in battle, and faithful to the King.",
      "My prayer: May God strengthen your arm for battle, renew your mind daily in His Word, and let your life keep manifesting His promises. No arm of flesh, only His strength. No sweat, only His rest.",
      "May this new year bring deeper intimacy, greater exploits, and victories that only Heaven can explain.",
      "I love and celebrate you brother always",
      "You're not just my friend, you're a brother Honored to do kingdom work with you.",
      "Happy birthday, soldier Go forth and occupy.",
    ],
  },
  {
    slug: "esther",
    name: "Esther",
    image: "/images/wishers/esther.jpeg",
    excerpt:
      "Thank you for being so caring, generous and supportive. You show me what genuine love and support look like…",
    message: [
      "Happy Birthday brother",
      "Thank you for been so caring, generous and supportive. Thank you for showing me what genuine love and support look like.",
      "You have a rare gift of making people feel heard, valued, and encouraged. No matter what is happening in your own life, you always make time to listen, offer advice, and remind me to keep going.",
      "Your generosity is not measured by how much you have, but by the size of your heart and I'm truly grateful for that",
      "On your birthday, I hope you take a moment to appreciate the incredible person you are and the positive impact you have on everyone around you. May this new year bring you opportunities that match your kindness, joy that fills your heart, and blessings that exceed your expectations.",
      "Thank you for being an amazing brother.",
      "Wishing you a birthday filled with laughter, love, and unforgettable memories. You deserve every good thing that comes your way.",
    ],
  },
  {
    slug: "ene",
    name: "Ene",
    image: "/images/wishers/ene.jpeg",
    excerpt:
      "I thank God for your life and the man you are becoming, and I love your personality…",
    message: [
      "Happy birthday sir Bem, I thank God for your life and the man you are becoming, and I love your personality.",
      "May God's favour surround all that you do, Happy birthday once again",
    ],
  },
  {
    slug: "miracle",
    name: "Miracle",
    image: "/images/wishers/miracle.jpeg",
    excerpt:
      "Bem can be annoying a lot of times, but he's still a good guy. We've known each other for 13 years now…",
    message: [
      "Well Bem can be annoying alot of times, but he's still a good guy.",
      "I can say this because we've known each other for 13 years now.",
      "He always never agrees with my decision, even though it's correct or not.",
      "But that's what I like about him, he's ability to trust his decision, it's an amazing act if you ask me.",
      "He can be nonchalant, but also caring, calm but confident. Learnt alot from the young man, had alot of adventures with him, and will continue having.",
      "Promised ourselves to be the wealthiest set of men the world has seen and we'd definitely achieve that. Grateful for the kind of person he's becoming. I was the one that introduced him to the faith but he'd still not agree. Oh well.",
      "Happy Birthday my brother.",
      "God bless you.",
    ],
  },
  {
    slug: "omari",
    name: "Omari",
    image: "/images/wishers/omari.jpeg",
    excerpt:
      "Watching you grow these past few years has truly been inspiring. You're one of the simplest, kindest souls I know…",
    message: [
      "Happy Birthday dear Bem 🎉",
      "Watching you grow these past few years has truly been inspiring, just like seeing you embrace every phase of life with grace. You're one of the simplest, kindest souls I know, and your light makes the world softer for everyone around you.",
      "I pray God blesses you abundantly, perfects all that concerns you, and writes new chapters of joy, purpose, and peace in your story this year. May your life keep shining brighter with each passing day.",
      "Happy birthday, Bem. You deserve all the good things life has.",
    ],
  },
];

export function getWish(slug: string): Wish | undefined {
  return wishes.find((wish) => wish.slug === slug);
}
