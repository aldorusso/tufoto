import { Photo } from '@/types';

export const PHOTOGRAPHERS = [
  { id: 'p1', name: 'Elena Martínez', avatar: 'https://i.pravatar.cc/150?img=47', bio: 'Bodas & Retratos', photoCount: 142 },
  { id: 'p2', name: 'Carlos Reyes',   avatar: 'https://i.pravatar.cc/150?img=52', bio: 'Festivales & Deportes', photoCount: 98 },
  { id: 'p3', name: 'Sofía Chen',     avatar: 'https://i.pravatar.cc/150?img=45', bio: 'Fine Art & Editorial', photoCount: 76 },
  { id: 'p4', name: 'Marco Ruiz',     avatar: 'https://i.pravatar.cc/150?img=60', bio: 'Deportes & Acción', photoCount: 211 },
];

const FORMATS = {
  digital: [
    { id: 'digital-hd',  name: 'Digital HD',   description: 'Archivo digital 4K sin marcas', price: 0,   resolution: '4000×6000px' },
    { id: 'digital-web', name: 'Digital Web',   description: 'Optimizada para redes 2K',      price: -10, resolution: '2000×3000px' },
  ],
  print: [
    { id: 'print-20x30', name: 'Impresión 20×30', description: 'Papel mate premium 250gr',    price: 25,  resolution: '20×30 cm' },
    { id: 'print-40x60', name: 'Impresión 40×60', description: 'Papel lustre professional',   price: 55,  resolution: '40×60 cm' },
    { id: 'canvas-30x45',name: 'Canvas 30×45',    description: 'Lienzo tensado de galería',   price: 79,  resolution: '30×45 cm' },
  ],
};

function makeFormats(basePrice: number) {
  return [
    { ...FORMATS.digital[0], price: basePrice },
    { ...FORMATS.digital[1], price: Math.max(5, basePrice + FORMATS.digital[1].price) },
    { ...FORMATS.print[0],   price: basePrice + FORMATS.print[0].price },
    { ...FORMATS.print[1],   price: basePrice + FORMATS.print[1].price },
    { ...FORMATS.print[2],   price: basePrice + FORMATS.print[2].price },
  ];
}

export const MOCK_PHOTOS: Photo[] = [
  // ── WEDDINGS ──
  {
    id: 'w1', title: 'Primer baile en la luz dorada', photographer: 'Elena Martínez',
    photographerAvatar: 'https://i.pravatar.cc/150?img=47',
    category: 'wedding', date: '2024-06-15', location: 'Sevilla, España',
    price: 49, tags: ['boda', 'baile', 'romántico'], formats: makeFormats(49),
    width: 1200, height: 1800, blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIhAAAQMEAgMAAAAAAAAAAAAAAQIDBAAFERIhMVGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AM+rTS7SpSCG0LYVGSFBKypCR7HnJP3rVdFp0EymW42UJSoKbJBHBHdH31qoqgFPbJJGagdFPSVNMIZaHkAKB5r/2Q==',
    unsplashId: 'XiZ4pFKHobE', featured: true, sold: 83,
  },
  {
    id: 'w2', title: 'Velo al viento', photographer: 'Elena Martínez',
    photographerAvatar: 'https://i.pravatar.cc/150?img=47',
    category: 'wedding', date: '2024-07-20', location: 'Mallorca, España',
    price: 39, tags: ['boda', 'velo', 'playa'], formats: makeFormats(39),
    width: 1200, height: 900, blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQYH/8QAIBAAAQQCAgMAAAAAAAAAAAAAAQIDBAURITFBkf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCz1ba27JoNvZoFpFMiIkOzpBKXJCiSAogjGAkDjxqPRb2xt9uRFkRhIjvtlDiFjIUk8EH6EUUB//Z',
    unsplashId: 'SYofHpxYL9c', featured: false, sold: 41,
  },
  {
    id: 'w3', title: 'Anillos sobre pétalos', photographer: 'Sofía Chen',
    photographerAvatar: 'https://i.pravatar.cc/150?img=45',
    category: 'wedding', date: '2024-05-10', location: 'Barcelona, España',
    price: 29, tags: ['boda', 'anillos', 'detalle'], formats: makeFormats(29),
    width: 900, height: 1200, blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAHhAAAgEEAwAAAAAAAAAAAAAAAgMBBAURITFh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMF4jdXmUtyJNtG5llH9kxFhAKQwVBIHHYkgfmt1Qr3P74CtjFR4AiMIWBgpGFE+vAoAoP/Z',
    unsplashId: 'nF0nQuqBCoA', featured: false, sold: 29,
  },

  // ── FESTIVALS ──
  {
    id: 'f1', title: 'Mar de manos en el festival', photographer: 'Carlos Reyes',
    photographerAvatar: 'https://i.pravatar.cc/150?img=52',
    category: 'festival', date: '2024-08-03', location: 'Valencia, España',
    price: 35, tags: ['festival', 'música', 'multitud'], formats: makeFormats(35),
    width: 1400, height: 933, blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwYI/8QAIBAAAQMEAwEAAAAAAAAAAAAAAQIDBAUREiFBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCfW9bv3G6bY6n2nT7bHlShHlpTn+EYAXjH0DkH36PNZ6VFZW3KtspDi2nQ4EKbCk5BHB55qHooBaf/2Q==',
    unsplashId: 'Pf9olvMpXNE', featured: true, sold: 127,
  },
  {
    id: 'f2', title: 'Llamas de neón bajo la lluvia', photographer: 'Carlos Reyes',
    photographerAvatar: 'https://i.pravatar.cc/150?img=52',
    category: 'festival', date: '2024-07-15', location: 'Ibiza, España',
    price: 45, tags: ['festival', 'neón', 'arte'], formats: makeFormats(45),
    width: 1200, height: 1600, blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQcI/8QAHhAAAQQCAwEAAAAAAAAAAAAAAQIDBAURITFB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKzm+bBb7VGjxqaVDSmOFGOGChQHBA4AOOf0a01TtqBp5pKFsuJUlwAfCHAUDH+gAOuT61ooBv/Z',
    unsplashId: 'VKnk90PNrqo', featured: false, sold: 95,
  },
  {
    id: 'f3', title: 'Atardecer en el escenario principal', photographer: 'Sofía Chen',
    photographerAvatar: 'https://i.pravatar.cc/150?img=45',
    category: 'festival', date: '2024-06-28', location: 'Madrid, España',
    price: 55, tags: ['festival', 'escenario', 'atardecer'], formats: makeFormats(55),
    width: 1600, height: 900, blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcI/8QAHxAAAgIBBQEAAAAAAAAAAAAAAQIDBAURITFBkf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCJLqe7nBJjtS0MH4p8gHPt/v4c9al211Vp64oiG3FMqdz2lqOFK9ycn86UUF//2Q==',
    unsplashId: 'yTwXpLO5HAA', featured: true, sold: 68,
  },

  // ── SPORTS ──
  {
    id: 's1', title: 'El momento exacto del gol', photographer: 'Marco Ruiz',
    photographerAvatar: 'https://i.pravatar.cc/150?img=60',
    category: 'sports', date: '2024-03-22', location: 'Bilbao, España',
    price: 59, tags: ['fútbol', 'gol', 'acción'], formats: makeFormats(59),
    width: 1600, height: 1067, blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcI/8QAIBAAAQQBBQEAAAAAAAAAAAAAAQIDBAUREiExQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCqVtUVb48C3TkRizFjoZDZQhLgHJAHJOSTyfvWuvXN5htqFHnPIisjDbaVYCRwBwOMDH96UUB//2Q==',
    unsplashId: 'OTXHm5wfSOM', featured: false, sold: 201,
  },
  {
    id: 's2', title: 'Surfista corta la ola perfecta', photographer: 'Marco Ruiz',
    photographerAvatar: 'https://i.pravatar.cc/150?img=60',
    category: 'sports', date: '2024-09-05', location: 'San Sebastián, España',
    price: 49, tags: ['surf', 'ola', 'naturaleza'], formats: makeFormats(49),
    width: 1200, height: 800, blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwQI/8QAHhAAAgIBBQEAAAAAAAAAAAAAAQIDBAURIiEx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIe6bs2Ddoaxb6eFMdGVIRKYDuiPuwdpB/rWi8bfuGpymlTrdJlFOCVsJWSD6JB/ekFAf//Z',
    unsplashId: 'z2WEbHR2vkA', featured: false, sold: 156,
  },
  {
    id: 's3', title: 'Maratón al amanecer', photographer: 'Carlos Reyes',
    photographerAvatar: 'https://i.pravatar.cc/150?img=52',
    category: 'sports', date: '2024-04-14', location: 'Barcelona, España',
    price: 39, tags: ['running', 'maratón', 'amanecer'], formats: makeFormats(39),
    width: 1400, height: 933, blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACAsJ/8QAIBAAAQQBBQEAAAAAAAAAAAAAAQIDBAUHEiIxUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCqbbmTnJUxSIMR2OqKErUlgIV3KAIwMfuuLrqerTJsuZGe0pDU0JzHSkDKAlI6+9KKC//Z',
    unsplashId: 'Hli3R6LKibo', featured: true, sold: 44,
  },

  // ── PORTRAITS ──
  {
    id: 'p1', title: 'Mirada de la novia', photographer: 'Elena Martínez',
    photographerAvatar: 'https://i.pravatar.cc/150?img=47',
    category: 'portrait', date: '2024-06-15', location: 'Sevilla, España',
    price: 65, tags: ['retrato', 'boda', 'emociones'], formats: makeFormats(65),
    width: 800, height: 1200, blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgcI/8QAHhAAAgICAwEAAAAAAAAAAAAAAQIDBAURITFB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKzm61BFLbYjw6e3DZBDhQwp4EeyASQP0aVW93pjmTcaU6pmRknJedJKj9kkk/8AmiigD//Z',
    unsplashId: 'rDEOVtE7vOs', featured: false, sold: 72,
  },
  {
    id: 'p2', title: 'Músico en backstage', photographer: 'Sofía Chen',
    photographerAvatar: 'https://i.pravatar.cc/150?img=45',
    category: 'portrait', date: '2024-08-03', location: 'Valencia, España',
    price: 45, tags: ['retrato', 'músico', 'backstage'], formats: makeFormats(45),
    width: 900, height: 1350, blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQcG/8QAHhAAAQQCAwEAAAAAAAAAAAAAAQIDBAURLhEx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AK/o+1z9YkwILtqFuRBiJacdaJBOeeSR/fGNK7bUy7QzJ0hxam2EBLbKSQlCR0AD96UUH//Z',
    unsplashId: 'mEZ3PoFGs_k', featured: false, sold: 37,
  },
];

export const CATEGORIES = [
  { value: 'all',      label: 'Todas las categorías', emoji: '📷' },
  { value: 'wedding',  label: 'Bodas',                emoji: '💍' },
  { value: 'festival', label: 'Festivales',            emoji: '🎵' },
  { value: 'sports',   label: 'Deportes',              emoji: '⚽' },
  { value: 'portrait', label: 'Retratos',              emoji: '👤' },
  { value: 'nature',   label: 'Naturaleza',            emoji: '🌿' },
];

export const SORT_OPTIONS = [
  { value: 'newest',     label: 'Más recientes' },
  { value: 'oldest',     label: 'Más antiguos' },
  { value: 'price-asc',  label: 'Precio: menor a mayor' },
  { value: 'price-desc', label: 'Precio: mayor a menor' },
  { value: 'popular',    label: 'Más vendidos' },
];

export const MOCK_EVENTS = [
  { id: 'ev1', title: 'Maratón de Madrid 2026',           location: 'Madrid',    date: '13 Abril 2026', author: 'Carlos Ruiz Fotografía', photoCount: 12450, unsplashId: 'Hli3R6LKibo' },
  { id: 'ev2', title: 'Trail Sierra Nevada Ultra',        location: 'Granada',   date: '6 Abril 2026',  author: 'María García Sports',  photoCount: 8320,  unsplashId: 'z2WEbHR2vkA' },
  { id: 'ev3', title: '10K Valencia Ciudad del Running',  location: 'Valencia',  date: '30 Marzo 2026', author: 'Ana Martínez Photo',     photoCount: 6750,  unsplashId: 'Pf9olvMpXNE' },
  { id: 'ev4', title: 'Triatlón Barcelona',               location: 'Barcelona', date: '23 Marzo 2026', author: 'Javier López Deportes',  photoCount: 5100,  unsplashId: 'OTXHm5wfSOM' },
  { id: 'ev5', title: 'Cicloturista Mallorca 312',        location: 'Mallorca',  date: '15 Marzo 2026', author: 'Pedro Fernández',      photoCount: 5400,  unsplashId: 'VKnk90PNrqo' },
  { id: 'ev6', title: 'Media Maratón de Sevilla',         location: 'Sevilla',   date: '3 Marzo 2026',  author: 'Lucía Hernández Foto',   photoCount: 7200,  unsplashId: 'yTwXpLO5HAA' },
];
