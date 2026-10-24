import { CLOUDINARY_BASE } from './galleries.ts';

export interface Collection {
  name: string;
  path: string;
  coverImage: string;
  /** Cover's original pixel size, to reserve its space before it loads */
  coverWidth: number;
  coverHeight: number;
  title: string;
}

/** URL slug of a collection's page, matching its gallery's slug in galleries.ts */
export const collectionSlug = (collection: Collection) => collection.path.replace(/\.html$/, '');

export const COLLECTIONS: Collection[] = [
  {
    name: 'sydney',
    path: 'sydney_collection.html',
    coverImage: `${CLOUDINARY_BASE}v1755496896/DSCF4607_Resize_Image_e8fx7x.jpg`,
    coverWidth: 6240,
    coverHeight: 4160,
    title: 'Sydney 2024',
  },
  {
    name: 'china-trip-2',
    path: 'china_trip_2.html',
    coverImage: `${CLOUDINARY_BASE}v1755494383/Resize_Image_10MB_4_vwl6rs.jpg`,
    coverWidth: 6240,
    coverHeight: 4160,
    title: 'China trip 2',
  },
  {
    name: 'fitzroy',
    path: 'fitzroy_collection.html',
    coverImage: `${CLOUDINARY_BASE}v1755494951/DSCF3610_Resize_Image_sgx176.jpg`,
    coverWidth: 6240,
    coverHeight: 4160,
    title: 'Fitzroy 2024',
  },
  {
    name: 'china-trip-1',
    path: 'china_trip_1.html',
    coverImage: `${CLOUDINARY_BASE}v1755492968/DSCF3324_Resized_Image_gkbbqd.jpg`,
    coverWidth: 6240,
    coverHeight: 4160,
    title: 'China trip 1',
  },
  {
    name: 'raglan',
    path: 'raglan_collection.html',
    coverImage: `${CLOUDINARY_BASE}v1755496375/DSCF3039_Resize_Image_kxclga.jpg`,
    coverWidth: 6240,
    coverHeight: 4160,
    title: 'Raglan 2023',
  },
  {
    name: 'archive',
    path: 'archive_collection.html',
    coverImage: `${CLOUDINARY_BASE}v1755497161/34010031_w3wi5v.jpg`,
    coverWidth: 3088,
    coverHeight: 2048,
    title: 'Archive',
  },
];
