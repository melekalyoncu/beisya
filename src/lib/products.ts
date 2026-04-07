export type Category = "sabun" | "yuz" | "krem" | "losyon" | "genital" | "sac";

export interface Product {
  id: string;
  category: Category;
  nameKey: string;
  descKey: string;
  tags: string[];
  price?: string;
  badge?: string;
  image: string;
}

export const categories: { id: Category; nameKey: string; descKey: string; shortKey: string }[] = [
  { id: "sabun", nameKey: "cat_soap", descKey: "cat_soap_desc", shortKey: "cat_soap_short" },
  { id: "yuz", nameKey: "cat_face", descKey: "cat_face_desc", shortKey: "cat_face_short" },
  { id: "krem", nameKey: "cat_cream", descKey: "cat_cream_desc", shortKey: "cat_cream_short" },
  { id: "losyon", nameKey: "cat_lotion", descKey: "cat_lotion_desc", shortKey: "cat_lotion_short" },
  { id: "genital", nameKey: "cat_genital", descKey: "cat_genital_desc", shortKey: "cat_genital_short" },
  { id: "sac", nameKey: "cat_hair", descKey: "cat_hair_desc", shortKey: "cat_hair_short" },
];

export const products: Product[] = [
  // SABUNLAR
  {
    id: "acnx-sabun",
    category: "sabun",
    nameKey: "prod_acnx_name",
    descKey: "prod_acnx_desc",
    tags: ["feat_oily", "feat_daily"],
    image: "/images/acnx sabun.jpeg",
  },
  {
    id: "comedone-sabun",
    category: "sabun",
    nameKey: "prod_comedone_soap_name",
    descKey: "prod_comedone_soap_desc",
    tags: ["feat_deep", "feat_daily"],
    image: "/images/comedone sabun.jpeg",
  },
  {
    id: "exe-sabun",
    category: "sabun",
    nameKey: "prod_exe_soap_name",
    descKey: "prod_exe_soap_desc",
    tags: ["feat_sensitive", "feat_deep"],
    image: "/images/exe sabun.jpeg",
  },
  {
    id: "cay-agaci-sabun",
    category: "sabun",
    nameKey: "prod_tea_soap_name",
    descKey: "prod_tea_soap_desc",
    tags: ["feat_herbal", "feat_daily"],
    image: "/images/çay ağacı sabun.jpeg",
  },
  {
    id: "tolerans-sabun",
    category: "sabun",
    nameKey: "prod_tolerans_name",
    descKey: "prod_tolerans_desc",
    tags: ["feat_sensitive", "feat_gentle"],
    image: "/images/tolerans sabun.jpeg",
  },
  {
    id: "baby-sabun",
    category: "sabun",
    nameKey: "prod_baby_name",
    descKey: "prod_baby_desc",
    tags: ["feat_gentle", "feat_daily"],
    badge: "badge_best",
    image: "/images/baby sabun.jpeg",
  },

  // YÜZ VE VÜCUT YIKAMA JELLERİ
  {
    id: "comedone-vacuum-sampuan",
    category: "yuz",
    nameKey: "prod_comedone_shampoo_name",
    descKey: "prod_comedone_shampoo_desc",
    tags: ["feat_herbal", "feat_daily"],
    badge: "badge_best",
    image: "/images/comedone şampuan.jpeg",
  },
  {
    id: "exe-yuz-vucut-sampuan",
    category: "yuz",
    nameKey: "prod_exe_shampoo_name",
    descKey: "prod_exe_shampoo_desc",
    tags: ["feat_sensitive", "feat_gentle"],
    image: "/images/exe şampuan.jpeg",
  },
  {
    id: "cay-agaci-yuz-sampuan",
    category: "yuz",
    nameKey: "prod_tea_shampoo_name",
    descKey: "prod_tea_shampoo_desc",
    tags: ["feat_herbal", "feat_oily"],
    image: "/images/çay ağacı şampuan.jpeg",
  },

  // KREMLER
  {
    id: "balans-krem",
    category: "krem",
    nameKey: "prod_balans_name",
    descKey: "prod_balans_desc",
    tags: ["feat_deep", "feat_daily"],
    badge: "badge_best",
    image: "/images/balans krem.jpeg",
  },
  {
    id: "terapi-krem",
    category: "krem",
    nameKey: "prod_terapi_name",
    descKey: "prod_terapi_desc",
    tags: ["feat_sensitive", "feat_deep"],
    image: "/images/terapi krem.jpeg",
  },

  // LOSYON & TONİK
  {
    id: "super-tonik",
    category: "losyon",
    nameKey: "prod_tonik_name",
    descKey: "prod_tonik_desc",
    tags: ["feat_revive", "feat_daily"],
    badge: "badge_new",
    image: "/images/süper tonik.jpeg",
  },
  {
    id: "exe-losyon",
    category: "losyon",
    nameKey: "prod_exe_lotion_name",
    descKey: "prod_exe_lotion_desc",
    tags: ["feat_deep", "feat_sensitive"],
    image: "/images/exe losyon.jpeg",
  },
  {
    id: "yuz-vucut-sprey",
    category: "losyon",
    nameKey: "prod_body_spray_name",
    descKey: "prod_body_spray_desc",
    tags: ["feat_herbal", "feat_daily"],
    image: "/images/vücut sprey.jpeg",
  },

  // GENİTAL BAKIM
  {
    id: "intim-sampuan",
    category: "genital",
    nameKey: "prod_intim_name",
    descKey: "prod_intim_desc",
    tags: ["feat_gentle", "feat_daily"],
    image: "/images/intim şampuan.jpeg",
  },
  {
    id: "genital-sprey",
    category: "genital",
    nameKey: "prod_genital_spray_name",
    descKey: "prod_genital_spray_desc",
    tags: ["feat_herbal", "feat_gentle"],
    image: "/images/genital sprey.jpeg",
  },
  {
    id: "genital-bakim-jeli",
    category: "genital",
    nameKey: "prod_genital_gel_name",
    descKey: "prod_genital_gel_desc",
    tags: ["feat_water", "feat_nofrag"],
    badge: "badge_best",
    image: "/images/genital jel.jpeg",
  },
  {
    id: "perine-bakim-yagi",
    category: "genital",
    nameKey: "prod_perine_name",
    descKey: "prod_perine_desc",
    tags: ["feat_herbal", "feat_deep"],
    image: "/images/perine.jpeg",
  },

  // SAÇ BAKIM
  {
    id: "sac-guclendirici-sampuan",
    category: "sac",
    nameKey: "prod_hair_shampoo_name",
    descKey: "prod_hair_shampoo_desc",
    tags: ["feat_herbal", "feat_vegan"],
    image: "/images/saç şampuan.jpeg",
  },
  {
    id: "yogun-bakim-sac-sprey",
    category: "sac",
    nameKey: "prod_hair_spray_name",
    descKey: "prod_hair_spray_desc",
    tags: ["feat_herbal", "feat_daily"],
    badge: "badge_new",
    image: "/images/saç sprey.jpeg",
  },
];
