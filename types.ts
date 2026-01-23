
export interface ProfileData {
  name: string;
  status: string;
  relationship: string;
  city: string;
  country: string;
  birthdate: string;
  gender: string;
  fortune: string;
  bio: string;
  profilePic: string;
  stats: {
    trustworthy: number; // 0-3
    cool: number; // 0-3
    sexy: number; // 0-3
    fans: number;
  };
  details: {
    ethnicity: string;
    religion: string;
    humor: string;
    fashion: string;
    hometown: string;
    webpage: string;
    passions: string;
    sports: string;
    activities: string;
    books: string;
    music: string;
    tvShows: string;
    movies: string;
    cuisines: string;
  };
  scraps: Scrap[];
  testimonials: Testimonial[];
  communities: Community[];
  friends: Friend[];
}

export interface Scrap {
  id: string;
  author: string;
  date: string;
  content: string;
  avatar: string;
}

export interface Testimonial {
  id: string;
  author: string;
  content: string;
  avatar: string;
}

export interface Community {
  id: string;
  name: string;
  members?: number;
  image: string;
}

export interface Friend {
  id: string;
  name: string;
  image: string;
}

export type ScreenshotMode = 'none' | 'post' | 'story';
