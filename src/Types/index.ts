export interface TestimonialInterface {
  description: string;
}

export interface EventInterface {
  imageLink: string;
  name: string;
  registrationLink: string;
  month: string;
  day: string;
  venue: string;
}

export interface PastEventInterface {
  Title: string;
  Speakers: string | null;
  Firm: string | null;
  Position: string | null;
  Link: string | null;
  ImageLink?: string;
  Month: string;
  Day: number;
  Year: number;
  "Industry/Field": string | null;
}

export type PastEventsType = {
  [key in "0" | "1"]: PastEventInterface[];
};

export interface SpeakerInterface {
  image: string;
}

export interface SponsorInterface {
  name: string;
  imageLink: string;
}

export type CarouselProps<T> = {
  gap: string;
  offset: string;
  paddingY: string;
  items: T[];
  Component: React.FC<any>;
  speed?: number;
};

export interface ResourceInterface {
  link: string;
  thumbnail: string;
}

export interface MentorInterface {
  name: string;
  imageLink: string;
}

export interface BenefitInterface {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface GalleryEventInterface {
  imageLink: string;
  postLink: string;
  title: string;
}

export interface GalleryPhotoInterface {
  imageLink: string;
  title: string;
  link: string;
}

export interface NumberInterface {
  text: string;
  icon: JSX.Element;
  description: string;
}

export type RoleType =
  | "Banking"
  | "Alternatives"
  | "Markets"
  | "Mentorship"
  | "Technology"
  | "Entrepreneurship"
  | "Socials"
  | "Marketing"
  | "Consulting"
  | "Law";

export type MemberType = {
  email?: string;
  imageLink: string;
  linkedin: string;
  name: string;
  role: string;
};

export type HeadsType = {
  [key in RoleType]: MemberType[];
};

export type ExecutiveMembersType = MemberType[];

export interface SectorInterface {
  sectorMembers: MemberType[];
  title: string;
}
