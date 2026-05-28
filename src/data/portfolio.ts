export interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  location: string;
  image: string;
  photos: string[];
}

const dualidadPhotos = Object.values(import.meta.glob('@/assets/dualidad-natural/*.{jpg,jpeg,png,webp,WEBP,JPG,JPEG,PNG}', { eager: true, import: 'default' })) as string[];
const modaPhotos = Object.values(import.meta.glob('@/assets/moda/*.{jpg,jpeg,png,webp,WEBP,JPG,JPEG,PNG}', { eager: true, import: 'default' })) as string[];
const desnudoPhotos = Object.values(import.meta.glob('@/assets/desnudo/*.{jpg,jpeg,png,webp,WEBP,JPG,JPEG,PNG}', { eager: true, import: 'default' })) as string[];
const marchaLgbtPhotos = Object.values(import.meta.glob('@/assets/marcha-lgbt/*.{jpg,jpeg,png,webp,WEBP,JPG,JPEG,PNG}', { eager: true, import: 'default' })) as string[];
const productoPhotos = Object.values(import.meta.glob('@/assets/producto/*.{jpg,jpeg,png,webp,WEBP,JPG,JPEG,PNG}', { eager: true, import: 'default' })) as string[];
const retratoPhotos = Object.values(import.meta.glob('@/assets/retrato/*.{jpg,jpeg,png,webp,WEBP,JPG,JPEG,PNG}', { eager: true, import: 'default' })) as string[];
const socialPhotos = Object.values(import.meta.glob('@/assets/social/*.{jpg,jpeg,png,webp,WEBP,JPG,JPEG,PNG}', { eager: true, import: 'default' })) as string[];
const vaquitasPhotos = Object.values(import.meta.glob('@/assets/vaquitas/*.{jpg,jpeg,png,webp,WEBP,JPG,JPEG,PNG}', { eager: true, import: 'default' })) as string[];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: "dualidad-natural",
    title: "Dualidad Natural",
    location: "Proyecto",
    image: dualidadPhotos[0] || "",
    photos: dualidadPhotos,
  },
  {
    id: 2,
    slug: "moda",
    title: "Moda",
    location: "Proyecto",
    image: modaPhotos[0] || "",
    photos: modaPhotos,
  },
  {
    id: 3,
    slug: "desnudo",
    title: "Desnudo",
    location: "Proyecto",
    image: desnudoPhotos[0] || "",
    photos: desnudoPhotos,
  },
  {
    id: 4,
    slug: "marcha-lgbt",
    title: "Marcha LGBT",
    location: "Proyecto",
    image: marchaLgbtPhotos[0] || "",
    photos: marchaLgbtPhotos,
  },
  {
    id: 5,
    slug: "producto",
    title: "Producto",
    location: "Proyecto",
    image: productoPhotos[0] || "",
    photos: productoPhotos,
  },
  {
    id: 6,
    slug: "retrato",
    title: "Retrato",
    location: "Proyecto",
    image: retratoPhotos[0] || "",
    photos: retratoPhotos,
  },
  {
    id: 7,
    slug: "social",
    title: "Social",
    location: "Proyecto",
    image: socialPhotos[0] || "",
    photos: socialPhotos,
  },
  {
    id: 8,
    slug: "vaquitas",
    title: "Vaquitas",
    location: "Proyecto",
    image: vaquitasPhotos[0] || "",
    photos: vaquitasPhotos,
  }
].filter(item => item.photos.length > 0);
