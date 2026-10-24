export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Gallery {
  slug: string;
  title: string;
  images: GalleryImage[];
}

// f_auto/q_auto serve WebP/AVIF at a sensible quality; the originals are 5-10 MB each
export const CLOUDINARY_BASE = 'https://res.cloudinary.com/dmajxoe5p/image/upload/f_auto,q_auto,w_1600/';

function gallery(slug: string, title: string, ids: string[]): Gallery {
  const images = ids.map((id, i) => ({
    src: `${CLOUDINARY_BASE}${id}`,
    alt: `${title}, photo ${i + 1} of ${ids.length}`,
  }));
  return { slug, title, images };
}

export const GALLERIES: Gallery[] = [
  gallery('sydney_collection', 'SYDNEY, AUSTRALIA', [
      'v1755496896/DSCF4607_Resize_Image_e8fx7x.jpg',
      'v1755496910/DSCF4585_qbldkp.jpg',
      'v1755496895/DSCF4591_nqkqyq.jpg',
      'v1755496909/Resize_Image_10MB_pvipx2.jpg',
      'v1755496897/DSCF4598_Resize_Image_mfgahw.jpg',
      'v1755496902/Resize_Image_10_MB_gydlc2.jpg',
      'v1755496913/DSCF4621_Resized_Image_h4cbgf.jpg',
      'v1755496902/Resize_Image_10MB_1_b8303u.jpg',
      'v1755496907/Resize_Image_10MB_2_qkzyip.jpg',
      'v1755496910/Resize_Image_10MB_3_gesoad.jpg',
      'v1755496915/Resize_Image_10_MB_1_i9j8g8.jpg',
  ]),
  gallery('china_trip_1', 'BEIJING, CHINA', [
      'v1755492968/DSCF3324_Resized_Image_gkbbqd.jpg',
      'v1755492972/DSCF3315_Resize_Image_pka3l6.jpg',
      'v1755492974/Resize_Image_10MB_2_svintj.jpg',
      'v1755492973/Resize_Image_10MB_1_sa6c9f.jpg',
      'v1755492973/DSCF3331_Resize_Image_hskjgl.jpg',
      'v1755492980/Resize_Image_10MB_m18oom.jpg',
      'v1755493044/DSCF3205_Resize_Image_dkw511.jpg',
      'v1755493038/DSCF3215_Resize_Image_e6fhyh.jpg',
  ]),
  gallery('china_trip_2', 'CHONGQING, SHENZHEN, & HONG KONG', [
      'v1755494383/Resize_Image_10MB_4_vwl6rs.jpg',
      'v1755494366/DSCF4187_tdpanm.jpg',
      'v1755494367/DSCF4197_Resize_Image_ll3ni1.jpg',
      'v1755494380/Resize_Image_10MB_hqzim8.jpg',
      'v1755494373/Resize_Image_10MB_1_pt8g3d.jpg',
      'v1755494355/DSCF3823_Resized_Image_j8y92c.jpg',
      'v1755494366/DSCF3843_Resize_Image_jgpa9j.jpg',
      'v1755494379/DSCF3850_Resize_Image_il5kwx.jpg',
      'v1755494374/DSCF3874_Resize_Image_pdonbf.jpg',
      'v1755494373/Resize_Image_10MB_2_cryymd.jpg',
      'v1755494361/DSCF3952_Resize_Image_axswsj.jpg',
      'v1755494362/DSCF3965_Resize_Image_xvzfcs.jpg',
      'v1755494367/DSCF4001_ydfq62.jpg',
      'v1755494374/Resize_Image_10MB_3_mrqgox.jpg',
  ]),
  gallery('fitzroy_collection', 'FITZROY, MELB', [
      'v1755494951/DSCF3610_Resize_Image_sgx176.jpg',
      'v1755494948/DSCF3604_Resize_Image_zkhzlu.jpg',
      'v1755494951/Resize_Image_10MB_vbosfv.jpg',
      'v1755494954/DSCF3573_Resize_Image_mub2hb.jpg',
      'v1755494938/DSCF3566_Resize_Image_xg3uyz.jpg',
      'v1755494930/DSCF3559_Resized_Image_bw3sob.jpg',
      'v1755494939/DSCF3649_cccfbd.jpg',
      'v1755494939/DSCF3661_Resized_Image_isokyi.jpg',
  ]),
  gallery('raglan_collection', 'RAGLAN, NZ', [
      'v1755496375/DSCF3039_Resize_Image_kxclga.jpg',
      'v1755496388/Resize_Image_10MB_1_pxrsjd.jpg',
      'v1755496379/DSCF3061_Resize_Image_g6bfv0.jpg',
      'v1755496373/DSCF3066_Resize_Image_lwlple.jpg',
      'v1755496385/DSCF3081_c3ysvl.jpg',
      'v1755496383/Resize_Image_10MB_2_fhzi8h.jpg',
      'v1755496384/DSCF3119_Resize_Image_vudhyc.jpg',
      'v1755496401/Resize_Image_10MB_3_nliytq.jpg',
      'v1755496384/DSCF3128_Resize_Image_sf5pu5.jpg',
      'v1755496381/Resize_Image_10_MB_wsgtfi.jpg',
      'v1755496405/Resize_Image_10MB_z7texg.jpg',
  ]),
  gallery('archive_collection', 'ARCHIVES', [
      'v1755497161/34010031_w3wi5v.jpg',
      'v1755497153/34010030_k0duvf.jpg',
      'v1755497150/34010018_ebeyoe.jpg',
      'v1755497158/34010026_aiahrf.jpg',
      'v1755497148/000025_jxzaj0.jpg',
      'v1755497148/000026_1_wohe42.jpg',
      'v1755497157/000024_dsyihf.jpg',
      'v1755497144/000022_1_dg6rio.jpg',
  ]),
];
