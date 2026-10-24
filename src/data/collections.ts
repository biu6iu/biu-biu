import { CLOUDINARY_BASE } from './galleries.ts';

export interface Collection {
  name: string;
  path: string;
  coverImage: string;
  title: string;
}

export const COLLECTIONS: Collection[] = [
  {
    name: 'sydney',
    path: 'sydney_collection.html',
    coverImage: `${CLOUDINARY_BASE}v1755496896/DSCF4607_Resize_Image_e8fx7x.jpg`,
    title: 'Sydney 2024',
  },
  {
    name: 'china-trip-2',
    path: 'china_trip_2.html',
    coverImage: `${CLOUDINARY_BASE}v1755494383/Resize_Image_10MB_4_vwl6rs.jpg`,
    title: 'China trip 2',
  },
  {
    name: 'fitzroy',
    path: 'fitzroy_collection.html',
    coverImage: `${CLOUDINARY_BASE}v1755494951/DSCF3610_Resize_Image_sgx176.jpg`,
    title: 'Fitzroy 2024',
  },
  {
    name: 'china-trip-1',
    path: 'china_trip_1.html',
    coverImage: `${CLOUDINARY_BASE}v1755492968/DSCF3324_Resized_Image_gkbbqd.jpg`,
    title: 'China trip 1',
  },
  {
    name: 'raglan',
    path: 'raglan_collection.html',
    coverImage: `${CLOUDINARY_BASE}v1755496375/DSCF3039_Resize_Image_kxclga.jpg`,
    title: 'Raglan 2023',
  },
  {
    name: 'archive',
    path: 'archive_collection.html',
    coverImage: `${CLOUDINARY_BASE}v1755497161/34010031_w3wi5v.jpg`,
    title: 'Archive',
  },
];
