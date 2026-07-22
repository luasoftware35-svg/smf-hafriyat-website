export type SubmissionStatus = "yeni" | "inceleniyor" | "tamamlandi" | "iptal";

export type ProjectCategory = "hafriyat" | "yikim" | "altyapi";

export type ContactSubmission = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  project_type: string;
  project_address: string;
  volume: string | null;
  site_visit_date: string | null;
  message: string;
  status: SubmissionStatus;
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
};

export type DbService = {
  id: string;
  slug: string;
  title: string;
  icon: string;
  short_description: string;
  full_description: string;
  detail_paragraphs: string[];
  trust_points: string[];
  features: string[];
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type DbProject = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  location: string;
  completed_date: string;
  before_image: string;
  after_image: string;
  gallery_images: string[];
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type DbTeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type DbSiteStat = {
  id: string;
  label: string;
  value: number;
  suffix: string;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type DashboardMetrics = {
  newSubmissions: number;
  totalSubmissions: number;
  publishedServices: number;
  publishedProjects: number;
  publishedTeam: number;
  publishedStats: number;
};

export const submissionStatusLabels: Record<SubmissionStatus, string> = {
  yeni: "Yeni",
  inceleniyor: "İnceleniyor",
  tamamlandi: "Tamamlandı",
  iptal: "İptal",
};

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  hafriyat: "Hafriyat",
  yikim: "Yıkım",
  altyapi: "Altyapı",
};

export const serviceIconOptions = [
  "Shovel",
  "Hammer",
  "HardHat",
  "Truck",
  "ArrowDown",
  "Package",
  "Mountain",
  "Waves",
  "Droplets",
  "Container",
] as const;
