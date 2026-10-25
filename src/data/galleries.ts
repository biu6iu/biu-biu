export interface GalleryImage {
  src: string;
  alt: string;
  /** Original pixel size; only the ratio matters, it reserves the photo's space before it loads */
  width: number;
  height: number;
}

export interface Gallery {
  slug: string;
  /** Its name on the collections page and in the browser tab */
  collectionTitle: string;
  /** The heading on its own page */
  title: string;
  images: GalleryImage[];
}

// f_auto/q_auto serve WebP/AVIF at a sensible quality; the originals are 5-10 MB each
const CLOUDINARY_BASE = 'https://res.cloudinary.com/dmajxoe5p/image/upload/f_auto,q_auto,w_1600/';

/** Each photo is [Cloudinary id, original width, original height]. */
type PhotoSource = [id: string, width: number, height: number];

function gallery(slug: string, collectionTitle: string, title: string, photos: PhotoSource[]): Gallery {
  const images = photos.map(([id, width, height], i) => ({
    src: `${CLOUDINARY_BASE}${id}`,
    alt: `${title}, photo ${i + 1} of ${photos.length}`,
    width,
    height,
  }));
  return { slug, collectionTitle, title, images };
}

// In the order they appear on the collections page
export const GALLERIES: Gallery[] = [
  gallery('sydney_collection', 'Sydney 2024', 'SYDNEY, AUSTRALIA', [
    ['v1755496896/DSCF4607_Resize_Image_e8fx7x.jpg', 6240, 4160],
    ['v1755496910/DSCF4585_qbldkp.jpg', 6240, 4160],
    ['v1755496895/DSCF4591_nqkqyq.jpg', 6240, 4160],
    ['v1755496909/Resize_Image_10MB_pvipx2.jpg', 6240, 4160],
    ['v1755496897/DSCF4598_Resize_Image_mfgahw.jpg', 4160, 6240],
    ['v1755496902/Resize_Image_10_MB_gydlc2.jpg', 6240, 4160],
    ['v1755496913/DSCF4621_Resized_Image_h4cbgf.jpg', 6240, 4160],
    ['v1755496902/Resize_Image_10MB_1_b8303u.jpg', 4160, 6240],
    ['v1755496907/Resize_Image_10MB_2_qkzyip.jpg', 6240, 4160],
    ['v1755496910/Resize_Image_10MB_3_gesoad.jpg', 6240, 4160],
    ['v1755496915/Resize_Image_10_MB_1_i9j8g8.jpg', 6240, 4160],
  ]),
  gallery('china_trip_2', 'China trip 2', 'CHONGQING, SHENZHEN, & HONG KONG', [
    ['v1755494383/Resize_Image_10MB_4_vwl6rs.jpg', 6240, 4160],
    ['v1755494366/DSCF4187_tdpanm.jpg', 6240, 4160],
    ['v1755494367/DSCF4197_Resize_Image_ll3ni1.jpg', 6240, 4160],
    ['v1755494380/Resize_Image_10MB_hqzim8.jpg', 6240, 4160],
    ['v1755494373/Resize_Image_10MB_1_pt8g3d.jpg', 4160, 6240],
    ['v1755494355/DSCF3823_Resized_Image_j8y92c.jpg', 6240, 4160],
    ['v1755494366/DSCF3843_Resize_Image_jgpa9j.jpg', 4160, 6240],
    ['v1755494379/DSCF3850_Resize_Image_il5kwx.jpg', 6240, 4160],
    ['v1755494374/DSCF3874_Resize_Image_pdonbf.jpg', 6240, 4160],
    ['v1755494373/Resize_Image_10MB_2_cryymd.jpg', 4160, 6240],
    ['v1755494361/DSCF3952_Resize_Image_axswsj.jpg', 6240, 4160],
    ['v1755494362/DSCF3965_Resize_Image_xvzfcs.jpg', 6240, 4160],
    ['v1755494367/DSCF4001_ydfq62.jpg', 6240, 4160],
    ['v1755494374/Resize_Image_10MB_3_mrqgox.jpg', 6240, 4160],
  ]),
  gallery('fitzroy_collection', 'Fitzroy 2024', 'FITZROY, MELB', [
    ['v1755494951/DSCF3610_Resize_Image_sgx176.jpg', 6240, 4160],
    ['v1755494948/DSCF3604_Resize_Image_zkhzlu.jpg', 6240, 4160],
    ['v1755494951/Resize_Image_10MB_vbosfv.jpg', 6240, 4160],
    ['v1755494954/DSCF3573_Resize_Image_mub2hb.jpg', 6240, 4160],
    ['v1755494938/DSCF3566_Resize_Image_xg3uyz.jpg', 6240, 4160],
    ['v1755494930/DSCF3559_Resized_Image_bw3sob.jpg', 6240, 4160],
    ['v1755494939/DSCF3649_cccfbd.jpg', 6240, 4160],
    ['v1755494939/DSCF3661_Resized_Image_isokyi.jpg', 6240, 4160],
  ]),
  gallery('china_trip_1', 'China trip 1', 'BEIJING, CHINA', [
    ['v1755492968/DSCF3324_Resized_Image_gkbbqd.jpg', 6240, 4160],
    ['v1755492972/DSCF3315_Resize_Image_pka3l6.jpg', 6240, 4160],
    ['v1755492974/Resize_Image_10MB_2_svintj.jpg', 6240, 4160],
    ['v1755492973/Resize_Image_10MB_1_sa6c9f.jpg', 6240, 4160],
    ['v1755492973/DSCF3331_Resize_Image_hskjgl.jpg', 6240, 4160],
    ['v1755492980/Resize_Image_10MB_m18oom.jpg', 4160, 6240],
    ['v1755493044/DSCF3205_Resize_Image_dkw511.jpg', 6240, 4160],
    ['v1755493038/DSCF3215_Resize_Image_e6fhyh.jpg', 6240, 4160],
  ]),
  gallery('raglan_collection', 'Raglan 2023', 'RAGLAN, NZ', [
    ['v1755496375/DSCF3039_Resize_Image_kxclga.jpg', 6240, 4160],
    ['v1755496388/Resize_Image_10MB_1_pxrsjd.jpg', 4160, 6240],
    ['v1755496379/DSCF3061_Resize_Image_g6bfv0.jpg', 6240, 4160],
    ['v1755496373/DSCF3066_Resize_Image_lwlple.jpg', 6240, 4160],
    ['v1755496385/DSCF3081_c3ysvl.jpg', 6240, 4160],
    ['v1755496383/Resize_Image_10MB_2_fhzi8h.jpg', 6240, 4160],
    ['v1755496384/DSCF3119_Resize_Image_vudhyc.jpg', 6240, 4160],
    ['v1755496401/Resize_Image_10MB_3_nliytq.jpg', 6240, 4160],
    ['v1755496384/DSCF3128_Resize_Image_sf5pu5.jpg', 6240, 4160],
    ['v1755496381/Resize_Image_10_MB_wsgtfi.jpg', 6240, 4160],
    ['v1755496405/Resize_Image_10MB_z7texg.jpg', 6240, 4160],
  ]),
  gallery('archive_collection', 'Archive', 'ARCHIVES', [
    ['v1755497161/34010031_w3wi5v.jpg', 3088, 2048],
    ['v1755497153/34010030_k0duvf.jpg', 3088, 2048],
    ['v1755497150/34010018_ebeyoe.jpg', 3088, 2048],
    ['v1755497158/34010026_aiahrf.jpg', 3088, 2048],
    ['v1755497148/000025_jxzaj0.jpg', 3637, 2433],
    ['v1755497148/000026_1_wohe42.jpg', 3637, 2433],
    ['v1755497157/000024_dsyihf.jpg', 3637, 2433],
    ['v1755497144/000022_1_dg6rio.jpg', 3637, 2433],
  ]),
];
