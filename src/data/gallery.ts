// Photo catalogue for the Gallery page.
// To add a photo: copy an entry, drop the image in `public/images/gallery/`
// (or point `image` anywhere under /public), and fill in the story behind it.

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
    id: "first-meeting",
    image: "/images/celebrant.jpg",
    title: "The Day We Met",
    date: "January 2020",
    location: "Lagos, Nigeria",
    story:
      "The very first photo we ever took together. Neither of us knew that a casual hello would grow into a friendship this deep. Look at those unsuspecting smiles!",
  },
  {
    id: "road-trip",
    image: "/images/bem16.jpg",
    title: "The Road Trip",
    date: "August 2021",
    location: "Obudu Mountain Resort",
    story:
      "Twelve hours on the road, one flat tire, and a playlist we knew by heart. We laughed until our sides hurt and made memories that still make us smile.",
  },
  {
    id: "birthday-2022",
    image: "/images/bem22.jpg",
    title: "Surprise Party",
    date: "June 2022",
    location: "At Home",
    story:
      "The look on your face when everyone jumped out! We spent days planning it in secret. Worth every whispered phone call and hidden balloon.",
  },
  {
    id: "quiet-evening",
    image: "/images/cele.png",
    title: "A Quiet Evening",
    date: "December 2023",
    location: "The Rooftop",
    story:
      "No occasion, no plan — just good company and a sky full of stars. Some of the best moments are the ones nobody schedules.",
  },
];
