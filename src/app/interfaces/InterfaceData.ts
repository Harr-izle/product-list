export interface ImageSources {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IData {
    id:string;
  image: ImageSources;
  name: string;
  category: string;
  price: number;
}

