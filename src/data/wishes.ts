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
    image: "/images/wishers/betty.jpeg",
    excerpt:
      "To be honest, you are one of my favorite people on earth. I usually tell everyone, If you want to get anything out of me, pass through Benjamin. I love your heart, your simplicity, your genuineness and your character. I am always grateful for the days we crossed paths. You are one of the priceless gifts GCMI gave to me. Most times, my mind can't comprehend the intensity of greatness that dwells on your inside. I wonder if you even know what you carry, or who you are. You are a blessing to creation brother. The world is blessed to have you.....",
    message: [
      "To be honest, you are one of my favorite people on earth. I often tell people that if they want to get anything from me, they should simply go through Benjamin.",
      "I genuinely love your heart, your simplicity, your sincerity, and the beautiful character you carry. In a world where authenticity is becoming rare, you remain refreshingly genuine. I am always grateful for the day our paths crossed. Without a doubt, you are one of the priceless gifts GCMI has given me, and I do not take that blessing for granted.",
      "Many times, my mind struggles to comprehend the depth of greatness that resides within you. I often wonder if you truly know who you are and what God has deposited inside of you. There is so much grace, wisdom, and potential in your life, and I believe the world is yet to see the fullness of all that God has placed within you.",
      "You are truly a blessing to creation, brother, and the world is better because you are here.",
      "Today, I pray over you both as a sister and a friend. May the mighty hand of God continually rest upon you. May you walk in favor, wisdom, strength, and divine preservation. You are blessed, highly favored, and destined for greater heights.",
    ],
  },
  {
    slug: "godcolors",
    name: "Godcolors",
    image: "/images/wishers/godcolors.jpeg",
    excerpt:
      "Bem, you have decided to tread an uncanny path .... One that betrays the conventional inclinations of self preservation, vain glory and the satisfaction of unjust gains! Young as you may be, you have managed to catch glimpses of heights that only spirits get to, so yes! You see differently, your disposition connotes the nature of the loving God, the size of your heart reveals that you've caught the attention of a loving God and he has glazed it with the sting of his own beating heart....",
    message: [
      "Bem, you have decided to tread an uncanny path .... One that betrays the conventional inclinations of self preservation, vain glory and the satisfaction of unjust gains!",
      "Young as you may be, you have managed to catch glimpses of heights that only spirits get to, so yes! You see differently, your disposition connotes the nature of our Father, the size of your heart reveals that you've caught the attention of a loving God and he has glazed it with the sting of his own beating heart.",
      "I have always believed that 'the matter of the heart is the heart of the matter'. If this is true, it will be safe to say, yours is a full-treasure of a heart!",
      "God bless your heart!",
      "Your light is within you!  This is why you cannot be dimmed, because you shine from inside out!",
      "I love you dearly. May the testimony of the spirit of God for you explode in this new year and may it mark a clear shift for you. I have a lot to say to you but let's save it for the days when knees have gone deep and hearts have ascended high.... Lol",
      "This is very personal, but you have earned the right to use my 'Exclusive Godcolors Description', I hope these words do justice;",
      "\"Forged from the embers of hallowed antiquity. hewned from the very rocks that heralded civilization as we know it. Bud from the stems of the majesty in eternal nativity; not made of falial RNA, but born of spirit DNA! Famed as the joy of the celestial hierachy, revered in the highest cadre of immortal dynasty. Framed to texture of the heavenly flames, burning in the intensity aboves orions claims! Covenanted to statures beyond posidons fame, exalted in glory to now and forever reign.\"",
      "May your Godcolors break out!",
    ],
  },
  {
    slug: "kairos",
    name: "Kairos",
    image: "/images/wishers/kairos.jpeg",
    excerpt:
      "I can vividly remember the very first time we spoke. What started with a simple conversation became one of the most beautiful friendships I've ever had…",
    message: [
      "Bemmmmmm ❤️",
      "I can vividly remember the very first time we spoke to each other. Even though we had been seeing each other in church and in school, we had never actually talked. 😂",
      'I kept wondering, "Who is this shy and quiet boy?"',
      'Then one day after service, I decided to approach you and asked, "Why are you always quiet?"',
      'And you replied, "Nothing," in the shyest tone ever.',
      'Then I looked at you and said, "Why are you talking like this? Are you hungry?" 😂',
      'And you shyly replied again, "This is how I use to talk."',
      "Somehow, somehow—I honestly don't know how—we went from being strangers who barely spoke to becoming very, very good friends.",
      "Looking back now, I can't help but smile at how far our friendship has come. What started with a simple conversation became one of the most beautiful friendships I have ever had. Through the years, you have become more than just a friend to me; you have become a brother, someone I genuinely love, appreciate, and cherish.",
      "Thank you for all the memories, the laughter, the support, and for simply being you. Your friendship has been a gift, and I am truly grateful for every moment we've shared.",
      "On your birthday, I want you to know how much you mean to me. I pray that this new year brings you happiness, peace, growth, favor, and countless reasons to smile. May God continue to guide your steps and bless everything that concerns you.",
      "Happy Birthday, Bem. ❤️",
      "I love you dearly.",
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
      "Happy Birthday Bem! 🎉🎂🙏✨",
    ],
  },
  {
    slug: "pst-joe",
    name: "Pst. Joe",
    image: "/images/wishers/pst-joe.jpg",
    excerpt:
      'Just have "a Bem" around, and you\'ll automatically become lazy. God bless your beautiful soul…',
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
  {
    slug: "pst-rome",
    name: "Pst. Rome",
    image: "/images/wishers/pst-rome.jpeg",
    excerpt:
      "Hope your new year runs like perfect Python: clean syntax, no errors, and fast execution…",
    message: [
      "Happy birthday Benjamin! 🎉",
      "Hope your new year runs like perfect Python: clean syntax, no errors, and fast execution.",
      "May your `while` loop of blessings never break, your `if` statements always return `True` for good things, and your bank balance have way more `zeros()` than your code.",
      "Keep building dope stuff, dev. Proud of you!",
      "Enjoy your day bro 👑",
    ],
  },
  {
    slug: "Destiny",
    name: "Destiny",
    image: "/images/wishers/destiny.jpeg",
    excerpt: "My vocabulary is seriously limiting me from expressing myself...but I'll try to put in the right words.The first time I met you, I immediately assumed you were a snub during our school of ministry classes, truly assumption is the lowest form of knowledge, on getting to interact with you, I saw the clear reflection of who a Christian is, you effortlessly reflect God in every aspect of your life. The way you carry everyone along, you sacrifice where others would chose their comfort. I vividly remember during our PGC prayers you inspired everyone around in one spirit,you fueled the passion for prayer when others felt weary. Sir  Benjamin is that one person who always sees a solution when others see limitations to why things cannot be done....",
    message: [
      "My vocabulary is seriously limiting me from expressing myself...but I'll try to put in the right words.The first time I met you, I immediately assumed you were a snub during our school of ministry classes, truly assumption is the lowest form of knowledge, on getting to interact with you, I saw the clear reflection of who a Christian is, you effortlessly reflect God in every aspect of your life.",
      "The way you carry everyone along, you sacrifice where others would chose their comfort. I vividly remember during our PGC prayers you inspired everyone around in one spirit,you fueled the passion for prayer when others felt weary.",
      "Sir  Benjamin is that one person who always sees a solution when others see limitations to why things cannot be done.",
      "Your humility, kindness, hardwork, commitment to God's work, love for God's people and the passion to help others fulfill their dreams are virtues worthy of emulation by all.",
      "The Lord shall make your path prosperous and crown all your efforts with good success.",
    ],
  },
];

export function getWish(slug: string): Wish | undefined {
  return wishes.find((wish) => wish.slug === slug);
}
