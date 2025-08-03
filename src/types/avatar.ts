export interface AvatarImage {
  name: string;
  url: string;
}

export interface AvatarCategory {
  name: string;
  images: AvatarImage[];
}
