export interface BenefitProps {
    title: string;
    description: string;
    icon: any;
    highlighted: boolean;
}

export interface CarouselProps {
    gap: string;
    offset: string;
    paddingY: string;
    items: any[];
    Component: React.ComponentType<any>;
    animate?: boolean;
}


export interface PersonProps {
    name: string;
    role: string;
    job: string;
    image: string;
    email: string;
    linkedin: string;
    reverse: boolean
}


export interface SpeakerProps {
    name: string;
    topic: string;
    date: string;
}

export interface BigSpeakerProps {
    name: string;
    topic: string;
    description: string;
    reverse: boolean;
}

export interface SponsorProps {
    logo: string;
    summary: string;
}

export interface PackagesInterface {
    prices: {
        [key: string]: string;
    };
    items: {
        name: string;
        is_title_row: boolean;
        packages: {
            [key: string]: boolean;
        };
    }[];
}

export interface TestimonyProps {
    name: string;
    description: string;
}
export interface TimelineEvent {
    title: string;
    date: string;
    description: string;
    image: string;
}


export interface TimelineElementProps {
    title: string;
    date: string;
    description: string;
    image: string;
    isRight: boolean
}

export interface TimelineModalProps {
    title: string;
    description: string;
    image: string;
}