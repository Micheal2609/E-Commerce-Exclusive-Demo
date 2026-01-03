interface I_Person {
    id: string;
    name?: string;
    role?: string;
    photoUrl?: string;
    bio: I_Bio;
}

interface I_Bio {
    urlInstagram?: string;
    urlLinkedin?: string;
    urlTwitter?: string;
}

export type { I_Person, I_Bio };