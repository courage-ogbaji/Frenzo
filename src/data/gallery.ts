// Photo catalogue for the Gallery page.
// To add a photo: copy an entry, drop the image in `public/images/gallery/`
// (or point `image` anywhere under /public), and fill in the story behind it.
//
// Dates are illustrative placeholders; locations are loose categories drawn from
// what each photo shows. Edit any of them freely.

export type Photo = {
  id: string;
  image: string; // path under /public
  title: string;
  date: string; // when it was taken, e.g. "March 2023"
  location: string; // where it was taken
  story: string; // the story behind the photo
};

export const photos: Photo[] = [
  {
    id: "media-1",
    image: "/images/gallery/Media (1).jpeg",
    title: "The Humble Beginning",
    date: "January 2022",
    location: "Achusa House",
    story:
      "The days of constanting growing even though it doesn't make sense yet. A snapshot of the quiet dedication behind everything he builds.",
  },
  {
    id: "media-2",
    image: "/images/gallery/Media (2).jpeg",
    title: "The Call into Destiny",
    date: "March 2022",
    location: "Zoe Conference",
    story:
      "The moment when Prophesy was spoken over a young man. The beginning of something beautiful.",
  },
  {
    id: "media-3",
    image: "/images/gallery/Media (3).jpeg",
    title: "Walking in thy calling",
    date: "May 2022",
    location: "The Classroom",
    story:
      "He has a gift for making young minds lean in and listen.",
  },
  {
    id: "media-4",
    image: "/images/gallery/Media (4).jpeg",
    title: "Inspiring Young Minds",
    date: "July 2022",
    location: "The Classroom",
    story:
      "When purpose mets opportunity, every visit leaves a mark on the next generation.",
  },
  {
    id: "media-5",
    image: "/images/gallery/Media (5).jpeg",
    title: "The Day you were call into Greateness",
    date: "September 2022",
    location: "Zoe Conference",
    story:
      "This day is too fresh to be forgotten so soon. The day wealth was declared over you.",
  },
  {
    id: "media-6",
    image: "/images/gallery/Media (6).jpeg",
    title: "Your favourite Sister",
    date: "November 2022",
    location: "With Friends",
    story:
      "Findesth though a sister like no other. One who will always be there for you. One who will always have your back.",
  },
  {
    id: "media-7",
    image: "/images/gallery/Media (7).jpeg",
    title: "Faith Moves",
    date: "February 2023",
    location: "Zoe Conference",
    story:
      "This Child will live to remember this day. The day his life was transformed for ever.",
  },
  {
    id: "media-9",
    image: "/images/gallery/Media (9).jpeg",
    title: "Arcane Himself",
    date: "June 2023",
    location: "Zoe Conference",
    story:
      "The beginning of something beautiful. A beautiful picture of a soul truly at peace.",
  },
  {
    id: "media-10",
    image: "/images/gallery/Media (10).jpeg",
    title: "Sharing the Message",
    date: "August 2023",
    location: "The Classroom",
    story:
      "His Father's true son. Teacher of the Word.",
  },
  {
    id: "media-12",
    image: "/images/gallery/Media (12).jpeg",
    title: "Teaching the Truth",
    date: "December 2023",
    location: "The Classroom",
    story:
      "One of my favorite pictures of you. The day you taught the truth to a room full of young minds.",
  },
  {
    id: "media-13",
    image: "/images/gallery/Media (13).jpeg",
    title: "A Prayer Offered",
    date: "March 2024",
    location: "Zoe Conference",
    story:
      "Bem gently lays his hands on a young student's head, praying over them in a heartfelt moment of encouragement. The scene captures his compassion and the quiet strength he brings to others.",
  },
  {
    id: "media-14",
    image: "/images/gallery/Media (14).jpeg",
    title: "The Birthing",
    date: "June 2024",
    location: "With Friends",
    story:
      "A season of the birthing. It is not always beautiful at the initial, but the end is always glorious. A beautiful picture of a soul truly at peace.",
  },
  {
    id: "media-15",
    image: "/images/gallery/Media (15).jpeg",
    title: "Brotherhood",
    date: "September 2024",
    location: "With Friends",
    story:
      "His greatness is not defined by how much he have, but by the quality of the men that stands him and for him.",
  },
  {
    id: "media-16",
    image: "/images/gallery/Media (16).jpeg",
    title: "Impacting Young Minds",
    date: "December 2024",
    location: "The Classroom",
    story:
      "Bem has discovered how to pour out himself, it is inspiring and instructing those around him and he does it relentlessly with fire and passion. His confident stance shows a natural gift for leading and inspiring.",
  },
  {
    id: "media-17",
    image: "/images/gallery/Media (17).jpeg",
    title: "Gathered Together",
    date: "January 2022",
    location: "Zoe Conference",
    story:
      "Bem acts like the sent one to whome power is an asset for change and at every giving opportunity he graciously unleashes it, causing the will of men to bend to purpose.",
  },
  {
    id: "media-18",
    image: "/images/gallery/Media (18).jpeg",
    title: "Singing With Heart",
    date: "March 2022",
    location: "Zoe Conference",
    story:
      "Bem stands tall with a radiant smile during a worship, clearly caught up in a joyful moment. His happiness is bright and genuine, surrounded by beautiful sister.",
  },
  {
    id: "media-19",
    image: "/images/gallery/Media (19).jpeg",
    title: "Benjamin and Jonah",
    date: "May 2022",
    location: "The Garden",
    story:
      "Jonah is Benjamins right hand guy. They aree closer in the spirit than they are in the flesh.",
  },
  {
    id: "media-20",
    image: "/images/gallery/Media (20).jpeg",
    title: "The Teacher's Stage",
    date: "July 2022",
    location: "The Classroom",
    story:
      "Bem leads a full classroom of engaged students, gesturing as he makes a point during his lesson. The attentive faces around him reflect the impact of his words.",
  },
  {
    id: "media-21",
    image: "/images/gallery/Media (21).jpeg",
    title: "Sharp and Smiling",
    date: "September 2022",
    location: "The Garden",
    story:
      "Bems smile has become a default gesture, it does not matter what happens he wears it all day long!.",
  },
  {
    id: "media-22",
    image: "/images/gallery/Media (22).jpeg",
    title: "Voice Lifted High",
    date: "November 2022",
    location: "Zoe Conference",
    story:
      "Having a sister in your life is a blessing, having one that sings doubles it.",
  },
  {
    id: "media-23",
    image: "/images/gallery/Media (23).jpeg",
    title: "Hands-On Moment",
    date: "February 2023",
    location: "Out and About",
    story:
      "Bem never misses the joke, smart man! epic sense of humour. i wonder what he is laughing at....",
  },
  {
    id: "media-24",
    image: "/images/gallery/Media (24).jpeg",
    title: "Looking Up Bright",
    date: "April 2023",
    location: "Out and About",
    story:
      "youthful optimism? or just a good cheer? naaaah, it is simply \'the bem\' effect!",
  },
  {
    id: "media-25",
    image: "/images/gallery/Media (25).jpeg",
    title: "Easy Confidence",
    date: "June 2023",
    location: "Out and About",
    story:
      "your worries obviously do not define you, the word of God is the source of your joy!",
  },
  {
    id: "media-26",
    image: "/images/gallery/Media (26).jpeg",
    title: "Cool and Calm",
    date: "August 2023",
    location: "Out and About",
    story:
      "Your face card is the GRIT of your spirit! we see it in your smile because you wear it as a smile.",
  },
  {
    id: "media-27",
    image: "/images/gallery/Media (27).jpeg",
    title: "Garden Smile",
    date: "October 2023",
    location: "The Garden",
    story:
      "Bem countenance is infectious! it can go beyond friends up to the faces of random strangers. he spreads it generously.",
  },
  {
    id: "media-28",
    image: "/images/gallery/Media (28).jpeg",
    title: "Campus Stroll",
    date: "December 2023",
    location: "The Garden",
    story:
      "Standing tall on a tidy walkway lined with hedges and trees, Bem strikes a sharp full-length pose with bag in hand. Sharp outfit, sharper attitude.",
  },
  {
    id: "media-29",
    image: "/images/gallery/Media (29).jpeg",
    title: "Ready for the Day",
    date: "March 2024",
    location: "The Garden",
    story:
      "Dressed neatly with a satchel by his side, Bem stands at ease along the green campus path, calm and self-assured. Every detail says a young man going places.",
  },
  {
    id: "media-30",
    image: "/images/gallery/Media (30).jpeg",
    title: "Friends and Style",
    date: "June 2024",
    location: "With Friends",
    story:
      "Bem stands shoulder to shoulder with a friend on the steps, both dressed crisp against a backdrop of greenery. A snapshot of good company and good times.",
  },
  {
    id: "media-31",
    image: "/images/gallery/Media (31).jpeg",
    title: "Best Buddies",
    date: "September 2024",
    location: "With Friends",
    story:
      "Bem laughs alongside a friend who throws up a peace sign, the two of them clearly enjoying the moment outdoors. Friendship and laughter fill the frame.",
  },
  {
    id: "media-32",
    image: "/images/gallery/Media (32).jpeg",
    title: "Brothers in Arms",
    date: "December 2024",
    location: "With Friends",
    story:
      "Arm around his friend and beaming with a bright laugh, Bem celebrates the day with great company on a leafy walkway. Pure camaraderie and joy.",
  },
  {
    id: "media-33",
    image: "/images/gallery/Media (33).jpeg",
    title: "Sharp and Smiling",
    date: "January 2022",
    location: "The Garden",
    story:
      "Dressed in a handsome tan blazer over a black shirt, Bem flashes a radiant smile in a beautiful green garden setting. A polished, celebratory portrait of the birthday man at his best.",
  },
  {
    id: "media-34",
    image: "/images/gallery/Media (34).jpeg",
    title: "Sharp in Tan",
    date: "March 2022",
    location: "The Garden",
    story:
      "Bem strolls confidently along a garden path in a crisp tan suit over a black shirt, framed by manicured shrubs and tall evergreens. Every detail, from the watch to the polished shoes, shows off his effortless sense of style.",
  },
  {
    id: "media-35",
    image: "/images/gallery/Media (35).jpeg",
    title: "Campus Days",
    date: "May 2022",
    location: "The Garden",
    story:
      "Caught in a candid moment outside a building, Bem smiles softly while looking down, backpack on his shoulder and a striped polo on. A potted palm and bright daylight set the easygoing student-life mood.",
  },
  {
    id: "media-36",
    image: "/images/gallery/Media (36).jpeg",
    title: "Sweet Selfie",
    date: "July 2022",
    location: "With Friends",
    story:
      "A warm, playful selfie of Bem and a friend leaning in close, both grinning for the camera. The cozy indoor setting and lighthearted faces capture a moment of genuine friendship.",
  },
  {
    id: "media-37",
    image: "/images/gallery/Media (37).jpeg",
    title: "That Bright Smile",
    date: "September 2022",
    location: "The Garden",
    story:
      "Bem beams with a wide, joyful grin in a patterned blue shirt, standing in a lush green park. His infectious happiness lights up the whole frame.",
  },
  {
    id: "media-38",
    image: "/images/gallery/Media (38).jpeg",
    title: "Park Stroll Pose",
    date: "November 2022",
    location: "The Garden",
    story:
      "Striking a relaxed pose under a leafy tree, Bem looks cool and composed in his patterned blue shirt. The green park backdrop makes for a perfect laid-back portrait.",
  },
  {
    id: "media-39",
    image: "/images/gallery/Media (39).jpeg",
    title: "Friends Up Close",
    date: "February 2023",
    location: "With Friends",
    story:
      "Another close-up selfie of Bem and a friend indoors, both faces turned toward the camera with easy smiles. The candid framing captures the warmth of good company.",
  },
  {
    id: "media-40",
    image: "/images/gallery/Media (40).jpeg",
    title: "Side by Side",
    date: "April 2023",
    location: "With Friends",
    story:
      "Bem grins gently beside a friend in a cozy indoor selfie, the soft light giving the moment a nostalgic glow. A snapshot of friendship and shared good times.",
  },
  {
    id: "bem-2",
    image: "/images/gallery/bem2.jpg",
    title: "Standing in Faith",
    date: "June 2023",
    location: "Zoe Conference",
    story:
      "Bem is supported by a young minister who rests a hand on his shoulder during a powerful moment on stage. Scripture glows on the screen behind them, marking a meaningful spiritual milestone.",
  },
  {
    id: "bem-4",
    image: "/images/gallery/bem4.jpg",
    title: "Moved in Worship",
    date: "August 2023",
    location: "Sunday Service",
    story:
      "Deep in a Sunday first service, Bem sits with a Bible on his lap, caught in a heartfelt moment of prayer and worship. His expression speaks of sincere devotion and faith.",
  },
  {
    id: "bem-5",
    image: "/images/gallery/bem5.jpg",
    title: "Pure Laughter",
    date: "October 2023",
    location: "With Friends",
    story:
      "Bem doubles over in unstoppable laughter during a gathering, arms folded and face lit up with joy. The whole room shares in the contagious happiness of the moment.",
  },
  {
    id: "bem-6",
    image: "/images/gallery/bem6.jpg",
    title: "Attentive Heart",
    date: "December 2023",
    location: "Sunday Service",
    story:
      "Seated among friends at an evening service, Bem listens intently with a notebook and pen in hand, ready to take in every word. The focused, faith-filled atmosphere fills the room.",
  },
  {
    id: "bem-7",
    image: "/images/gallery/bem7.jpg",
    title: "Caught in the Praise",
    date: "March 2024",
    location: "Zoe Conference",
    story:
      "Bem throws his arms wide and lets out a joyful shout, his blazer swinging open as the whole room erupts in celebration around him. Pure, unfiltered happiness in motion.",
  },
  {
    id: "bem-8",
    image: "/images/gallery/bem8.jpg",
    title: "Seated and Soaking It In",
    date: "June 2024",
    location: "Zoe Conference",
    story:
      "Arms folded and a Bible resting on his lap, Bem listens intently from his seat among friends at the gathering. A quiet, focused moment of taking it all in.",
  },
  {
    id: "bem-9",
    image: "/images/gallery/bem9.jpg",
    title: "Notes and a Blue Cap",
    date: "September 2024",
    location: "Zoe Conference",
    story:
      "Sporting a bright blue cap, Bem sits forward with pen and notebook in hand, jotting down every word with a row of attentive faces behind him. Eager to capture the message.",
  },
  {
    id: "bem-10",
    image: "/images/gallery/bem10.jpg",
    title: "Hand on Heart",
    date: "December 2024",
    location: "Zoe Conference",
    story:
      "Eyes closed and hand pressed to his chest, Bem pours himself into a moment of heartfelt worship beneath the soft blue stage light. Deeply moved and fully present.",
  },
  {
    id: "bem-11",
    image: "/images/gallery/bem11.jpg",
    title: "A Quiet Surrender",
    date: "January 2022",
    location: "Zoe Conference",
    story:
      "Standing in his sharp checked blazer and striped tie, Bem closes his eyes in a tender, reflective moment of worship. Stillness and sincerity captured beautifully.",
  },
  {
    id: "bem-12",
    image: "/images/gallery/bem12.jpg",
    title: "Lost in Thought",
    date: "March 2022",
    location: "Zoe Conference",
    story:
      "Hand to his chin and an open book on his lap, Bem leans into a thoughtful, contemplative pose during the program. The picture of focus and quiet curiosity.",
  },
  {
    id: "bem-13",
    image: "/images/gallery/bem13.jpg",
    title: "The Diligent Note-Taker",
    date: "May 2022",
    location: "Zoe Conference",
    story:
      "In a striking burgundy blazer and tie, Bem sits with his notebook open and pen ready, gazing attentively toward the front. Sharp, attentive, and ready to learn.",
  },
  {
    id: "bem-14",
    image: "/images/gallery/bem14.jpg",
    title: "Singing From the Heart",
    date: "July 2022",
    location: "Zoe Conference",
    story:
      "With an open book balanced on his knee, Bem lifts his voice in song alongside friends, fully caught up in the moment. Joyful expression in full flow.",
  },
  {
    id: "bem-15",
    image: "/images/gallery/bem15.jpg",
    title: "A Raised Hand",
    date: "September 2022",
    location: "Zoe Conference",
    story:
      "In a bold burgundy suit, Bem lifts one hand high with eyes shut tight in an emotional, soulful moment of worship. Heartfelt devotion radiating from his expression.",
  },
  {
    id: "bem-16",
    image: "/images/gallery/bem16.jpg",
    title: "A Tender Moment",
    date: "November 2022",
    location: "Zoe Conference",
    story:
      "Captured in soft black and white, Bem bows his head in a quiet, emotional moment surrounded by others. A timeless, reflective portrait.",
  },
  {
    id: "bem-17",
    image: "/images/gallery/bem17.jpg",
    title: "Front-Row Focus",
    date: "February 2023",
    location: "Zoe Conference",
    story:
      "Seated near the front in a checked shirt, notebook and pen in hand, Bem watches intently with the crowd gathered around him. Engaged and right in the heart of the action.",
  },
  {
    id: "bem-18",
    image: "/images/gallery/bem18.jpg",
    title: "Front Row Focus",
    date: "April 2023",
    location: "Zoe Conference",
    story:
      "Bem sits attentively in the front row of a packed conference hall, hands clasped and dressed sharp in a crisp shirt and tie, soaking in every moment of the gathering.",
  },
  {
    id: "bem-19",
    image: "/images/gallery/bem19.jpg",
    title: "Sharing the Program",
    date: "June 2023",
    location: "Zoe Conference",
    story:
      "Bem reads through an event booklet alongside a friend, the two of them quietly comparing notes amid the buzz of the crowd.",
  },
  {
    id: "bem-20",
    image: "/images/gallery/bem20.jpg",
    title: "Caught Up in Joy",
    date: "August 2023",
    location: "Zoe Conference",
    story:
      "Eyes closed and face lit with pure feeling, Bem stands worshipping wholeheartedly against a glowing blue backdrop.",
  },
  {
    id: "bem-21",
    image: "/images/gallery/bem21.jpg",
    title: "Standing Ovation",
    date: "October 2023",
    location: "Zoe Conference",
    story:
      "Bem claps with a beaming smile beside a friend as the whole room rises to its feet in celebration and applause.",
  },
  {
    id: "bem-22",
    image: "/images/gallery/bem22.jpg",
    title: "Taking the Mic",
    date: "December 2023",
    location: "Zoe Conference",
    story:
      "Sharp in a grey suit and patterned tie, Bem speaks into the microphone while glancing at his phone, leading the moment with confidence.",
  },
  {
    id: "bem-23",
    image: "/images/gallery/bem23.jpg",
    title: "Pouring It Out",
    date: "March 2024",
    location: "Zoe Conference",
    story:
      "Lost in heartfelt song, Bem sings out with his whole chest among the seated crowd, every emotion written across his face.",
  },
  {
    id: "bem-24",
    image: "/images/gallery/bem24.jpg",
    title: "Friends and Laughter",
    date: "June 2024",
    location: "With Friends",
    story:
      "Bem shares a warm, genuine laugh with a friend in the audience, the two of them clearly enjoying every minute together.",
  },
  {
    id: "bem-25",
    image: "/images/gallery/bem25.jpg",
    title: "Deep in Thought",
    date: "September 2024",
    location: "Zoe Conference",
    story:
      "Chin resting thoughtfully on his hands, Bem listens intently in a checkered shirt, fully absorbed in the moment.",
  },
  {
    id: "bem-26",
    image: "/images/gallery/bem26.jpg",
    title: "Pure Delight",
    date: "December 2024",
    location: "Zoe Conference",
    story:
      "With a wide, radiant grin and his Bible in hand, Bem laughs joyfully among friends at the gathering.",
  },
  {
    id: "bem-n",
    image: "/images/gallery/bem_n.jpg",
    title: "A Quiet Prayer",
    date: "January 2022",
    location: "Midweek Service",
    story:
      "In a tan suit, Bem sits in peaceful reflection with open hands during a mid-week service, lost in a tender moment of prayer.",
  },
  {
    id: "shared-image-2",
    image: "/images/gallery/shared image (2).jpeg",
    title: "Lending a Hand",
    date: "March 2022",
    location: "Out and About",
    story:
      "Bem pushes a loaded wheelbarrow down a tree-lined dirt road, rolling up his sleeves to help out with a friend close behind.",
  },
];
