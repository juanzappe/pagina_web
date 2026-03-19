export const siteInfo = {
  name: 'Confitería San Luis',
  tagline: 'Panadería, restaurante y catering en La Plata',
  description:
    'Desde hace más de 30 años acompañamos desayunos, almuerzos, meriendas y celebraciones con cocina casera, pastelería artesanal y atención cercana en la zona de 7 y 63.',
  shortDescription:
    'Un clásico gastronómico platense para comer rico, comprar algo fresco en el mostrador o resolver un evento con servicio profesional.',
  address: 'Zona 7 y 63, La Plata, Buenos Aires',
  neighborhood: 'Ubicados en una esquina tradicional de La Plata, con salón, terraza y mostrador para llevar.',
  whatsapp: '+54 9 221 555 1234',
  whatsappUrl: 'https://wa.me/5492215551234?text=Hola%20Confiter%C3%ADa%20San%20Luis%2C%20quiero%20hacer%20una%20consulta.',
  instagram: '@confiteriasanluis.lp',
  instagramUrl: 'https://instagram.com/confiteriasanluis.lp',
  mapsUrl: 'https://maps.google.com/?q=7%20y%2063%20La%20Plata',
  mapsEmbed: 'https://www.google.com/maps?q=7%20y%2063%20La%20Plata&z=16&output=embed',
  heroImage:
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80',
  hours: [
    { label: 'Lunes a viernes', value: '7:30 a 20:30' },
    { label: 'Sábados', value: '8:00 a 21:00' },
    { label: 'Domingos', value: '8:30 a 14:00' },
  ],
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/la-terraza', label: 'La Terraza' },
  { href: '/mostrador', label: 'Mostrador' },
  { href: '/catering', label: 'Catering' },
  { href: '/contacto', label: 'Contacto' },
];

export const heroStats = [
  { value: '30+', label: 'años de historia' },
  { value: '7 y 63', label: 'ubicación clásica en La Plata' },
  { value: '3', label: 'formas de disfrutar: salón, mostrador y eventos' },
];

export const serviceHighlights = [
  {
    title: 'La Terraza',
    description:
      'Restaurante con platos caseros, desayunos completos, meriendas abundantes y postres artesanales en un ambiente relajado.',
    href: '/la-terraza',
    cta: 'Explorar carta',
  },
  {
    title: 'Mostrador',
    description:
      'Sándwiches de miga, menú del día, panadería fresca y opciones rápidas para llevar o resolver una comida sin perder calidad.',
    href: '/mostrador',
    cta: 'Ver opciones',
  },
  {
    title: 'Catering',
    description:
      'Servicios para eventos sociales, corporativos y coffee breaks con propuestas flexibles, presentación cuidada y sabor casero.',
    href: '/catering',
    cta: 'Consultar evento',
  },
];

export const trustPoints = [
  'Producción propia de panadería, pastelería y cocina diaria.',
  'Atención ágil para quienes almuerzan en el salón o pasan a buscar.',
  'Propuestas adaptables para reuniones de trabajo, cumpleaños y celebraciones familiares.',
  'Estructura lista para sumar pedidos online y take away programado próximamente.',
];

export const aboutFeatures = [
  {
    title: 'Tradición platense',
    description:
      'San Luis nació como un punto de encuentro barrial y hoy sigue siendo una referencia para quienes buscan calidad constante y trato cercano.',
  },
  {
    title: 'Cocina con identidad',
    description:
      'La carta combina clásicos de confitería, platos de restaurante y opciones rápidas con foco en sabor, presentación y porciones equilibradas.',
  },
  {
    title: 'Pensado para el día a día',
    description:
      'Desayunos tempranos, almuerzos ejecutivos, meriendas, viandas y catering: resolvemos distintos momentos con una misma vara de calidad.',
  },
];

export interface MenuCategory {
  title: string;
  badge: string;
  description: string;
  items: string[];
}

export const terrazaIntro = {
  title: 'Una carta completa para almorzar, merendar o quedarse un rato más',
  description:
    'La Terraza reúne platos principales, opciones livianas y clásicos de confitería para quienes buscan una experiencia cómoda, rica y bien presentada en pleno ritmo de la ciudad.',
};

export const terrazaCategories: MenuCategory[] = [
  {
    title: 'Principales',
    badge: 'Platos de salón',
    description: 'Recetas caseras con impronta de restaurante y porciones pensadas para un almuerzo completo.',
    items: [
      'Sorrentinos de jamón y mozzarella con crema suave de puerro',
      'Bondiola braseada con puré rústico y cebollas caramelizadas',
      'Milanesa crocante con papas cuña y alioli de hierbas',
      'Pesca del día con vegetales asados y manteca cítrica',
    ],
  },
  {
    title: 'Sandwiches y rápidas',
    badge: 'Para resolver el almuerzo',
    description: 'Opciones abundantes, frescas y fáciles de disfrutar en una pausa corta.',
    items: [
      'Ciabatta de lomito ahumado, queso tybo y tomates confitados',
      'Focaccia caprese con pesto de albahaca y verdes frescos',
      'Wrap tibio de pollo grillado, palta y aderezo de mostaza antigua',
      'Tostón de masa madre con huevo revuelto y jamón natural',
    ],
  },
  {
    title: 'Ensaladas',
    badge: 'Frescas y completas',
    description: 'Alternativas livianas con proteína, vegetales de estación y aderezos caseros.',
    items: [
      'Caesar con pollo crocante, parmesano y croutons caseros',
      'Bowl de quinoa, calabaza asada, palta, queso y mix de hojas',
      'Ensalada mediterránea con hummus, tomates cherry y berenjenas asadas',
    ],
  },
  {
    title: 'Desayunos y meriendas',
    badge: 'Todo el día',
    description: 'Combinaciones clásicas de confitería con infusiones, jugos y panificados recién hechos.',
    items: [
      'Café con leche, medialunas de manteca y jugo de naranja',
      'Tostadas de campo con queso crema, mermelada casera y fruta fresca',
      'Yogur con granola, miel y frutas de estación',
      'Chocolate caliente con porción de budín cítrico',
    ],
  },
  {
    title: 'Postres',
    badge: 'Final dulce',
    description: 'Pastelería artesanal para cerrar la comida o acompañar la merienda.',
    items: [
      'Cheesecake de frutos rojos',
      'Tiramisú clásico al café',
      'Tarta tibia de manzana con crema chantilly',
      'Flan casero con dulce de leche y crema',
    ],
  },
];

export const terrazaMoments = [
  'Menú ejecutivo al mediodía con plato, bebida y postre o café.',
  'Opciones vegetarianas y platos livianos para reuniones de trabajo.',
  'Meriendas abundantes ideales para compartir después de la oficina o la facultad.',
];

export const mostradorIntro = {
  title: 'El sector más práctico para llevarte calidad al paso',
  description:
    'Pensado para quienes necesitan resolver desayunos, almuerzos o reuniones informales con rapidez, sin resignar presentación ni sabor.',
};

export const mostradorCategories: MenuCategory[] = [
  {
    title: 'Sándwiches de miga',
    badge: 'Clásicos de la casa',
    description: 'Variedades tradicionales y combinaciones especiales, elaboradas a diario.',
    items: [
      'Jamón cocido y queso',
      'Jamón crudo, rúcula y parmesano',
      'Pollo al curry suave',
      'Roquefort, nuez y apio',
      'Caprese con tomate y albahaca',
    ],
  },
  {
    title: 'Menú del día',
    badge: 'Listo para retirar',
    description: 'Una solución completa para el almuerzo de oficina o el mediodía en casa.',
    items: [
      'Plato principal casero',
      'Bebida sin alcohol',
      'Postre del día o fruta fresca',
    ],
  },
  {
    title: 'Opciones rápidas',
    badge: 'Panadería y viandas',
    description: 'Productos listos para acompañar la rutina, desde temprano hasta media tarde.',
    items: [
      'Tartas individuales con ensalada',
      'Empanadas al horno y porciones de pizza',
      'Viandas caseras para recalentar',
      'Medialunas, chipá, fosforitos y facturas surtidas',
    ],
  },
];

export const mostradorBenefits = [
  'Ideal para compras rápidas antes del trabajo, la facultad o reuniones informales.',
  'Posibilidad de encargar bandejas de miga y panificados para encuentros chicos.',
  'Rotación diaria para encontrar propuestas frescas y recién elaboradas.',
];

export interface CateringPlan {
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
}

export const cateringServices = [
  {
    title: 'Eventos sociales',
    description:
      'Cumpleaños, aniversarios, bautismos y celebraciones familiares con menú a medida, presentación cálida y logística simple.',
  },
  {
    title: 'Eventos corporativos',
    description:
      'Desayunos de trabajo, capacitaciones, lanzamientos y reuniones de equipo con opciones prácticas y prolijas para servir.',
  },
  {
    title: 'Servicio de café',
    description:
      'Coffee breaks con pastelería, mini salados, infusiones y reposición para jornadas largas o encuentros breves.',
  },
];

export const cateringPlans: CateringPlan[] = [
  {
    title: 'Lunch Premium',
    subtitle: 'Para celebraciones y encuentros con impronta gourmet',
    description:
      'Una propuesta de imagen elegante, gran variedad y productos premium para quienes buscan sorprender desde la mesa.',
    includes: [
      'Finger food caliente y frío',
      'Mini pâtisserie y mesa dulce',
      'Bebidas, café y logística de servicio',
    ],
  },
  {
    title: 'Lunch Gourmet',
    subtitle: 'Equilibrio entre variedad, presentación y practicidad',
    description:
      'Ideal para eventos medianos, reuniones de empresa y celebraciones donde importa comer bien y servir rápido.',
    includes: [
      'Mini sándwiches especiales y bocados salados',
      'Pastelería artesanal y opciones dulces',
      'Armado flexible según cantidad de invitados',
    ],
  },
  {
    title: 'Lunch Clásico',
    subtitle: 'La opción más versátil para reuniones familiares o laborales',
    description:
      'Sabores tradicionales y excelente relación entre variedad y practicidad para eventos de todos los días.',
    includes: [
      'Sándwiches de miga y saladitos',
      'Facturas, budines y masas secas',
      'Formato adaptable para retiro o entrega coordinada',
    ],
  },
];

export const cateringProcess = [
  'Nos contás el tipo de evento, la fecha y la cantidad de invitados.',
  'Armamos una propuesta con formato, variedad y rango estimado según tu necesidad.',
  'Coordinamos producción, entrega y servicio para que el evento salga prolijo de punta a punta.',
];

export const contactHighlights = [
  'Atención por WhatsApp para reservas, pedidos y eventos.',
  'Instagram activo para novedades, bandejas y propuestas del día.',
  'Zona accesible de La Plata para desayunar, almorzar o retirar pedidos.',
];
