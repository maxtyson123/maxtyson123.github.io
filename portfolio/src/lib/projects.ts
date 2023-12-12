export interface image {
    name: string;
    description: string;
    link: string;
}

export interface project {
    name: string;
    version: string;
    type: string;
    displayLink: string;
    sourceLink: string;
    description: string;
    author: string;
    license: string;
    mainImage: string;
    images: image[];
}
