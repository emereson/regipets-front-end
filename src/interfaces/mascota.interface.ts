export interface Pack {
  id: number;
  url_image: string;
  titulo: string;
  sub_titulo: string;
  sub_titulo2?: string;
  descripcion: string;
  precio: number;
  ahorro: string;
  bananaMango: string;
}

// types/user.ts
export interface Usuario {
  id: number;
  activo: boolean;
  apellido: string;
  avatar_facebook?: string | null;
  celular?: string | null;
  email: string;
  estado?: string | null;
  fecha_nacimiento?: string | null; // formato 'YYYY-MM-DD'
  foto?: string | null;
  nombre: string;
  password: string;
  sexo?: string | null;
  telefono?: string | null;
  token_activacion?: string | null;
  token_facebook?: string | null;
  token_password?: string | null;
  usuario_perfil_id?: number | null;
  created_at?: string | null; // o Date si lo quieres como objeto
  updated_at?: string | null; // o Date
}

export interface Mascota {
  id: number;
  dni?: string | null;
  nombre?: string | null;
  apellido?: string | null;
  sexo?: string | null;
  tamano?: string | null;
  color?: string | null;
  fecha_nacimiento?: string | null;
  biografia?: string | null;
  calificacion?: string | null;
  castrado: boolean;
  fallecido: boolean;
  estado?: string | null;
  mascota_raza_id?: number | null;
  usuario_id?: number | null;
  created_at?: string | null; // YYYY-MM-DD
  updated_at?: string | null; // YYYY-MM-DD
  cod_microchip?: string | null;
  fecha_inscripcion?: string | null;
  usuario_crea?: string | null;
  usuario_mod?: string | null;
  fecha_muerte?: string | null; // ISO 8601 date string
  tipo_reg?: string | null;
  usuario: Usuario;
}
