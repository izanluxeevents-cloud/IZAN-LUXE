export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: string;
  title: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  event: string;
  content: string;
  rating: number;
}
