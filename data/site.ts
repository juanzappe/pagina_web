export const siteInfo = {
  name: 'San Luis',
  tagline: 'Cosas ricas y más · Confitería en La Plata',
  description:
    'Desde hace más de 30 años acompañamos desayunos, almuerzos, meriendas y celebraciones con cocina casera, pastelería artesanal, cerámica pintada a mano y atención cercana en la zona de 7 y 63.',
  shortDescription:
    'Un clásico platense para comer rico, llevarte algo del mostrador, encontrar objetos artesanales para tu hogar o resolver un evento con servicio profesional.',
  address: 'Zona 7 y 63, La Plata, Buenos Aires',
  neighborhood: 'Ubicados en una esquina tradicional de La Plata, con salón, terraza y mostrador para llevar.',
  whatsapp: '+54 221 357-0076',
  whatsappUrl: 'https://wa.me/542213570076?text=Hola%20Confiter%C3%ADa%20San%20Luis%2C%20quiero%20hacer%20una%20consulta.',
  instagram: '@confiteriasanluislp',
  instagramUrl: 'https://instagram.com/confiteriasanluislp',
  mapsUrl: 'https://maps.google.com/?q=Confiter%C3%ADa+San+Luis+La+Plata',
  mapsEmbed: 'https://www.google.com/maps?q=Confiter%C3%ADa+San+Luis+La+Plata&z=16&output=embed',
  heroImage:
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80',
  hours: [
    { label: 'Lunes a sábados', value: '8:00 a 20:00' },
    { label: 'Domingos', value: 'Cerrado' },
  ],
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/la-terraza', label: 'La Terraza' },
  { href: '/mostrador', label: 'Mostrador' },
  { href: '/catering', label: 'Catering' },
  { href: '/decoracion', label: 'Decoración' },
  { href: '/contacto', label: 'Contacto' },
];

export const heroStats = [
  { value: '30+', label: 'años de historia' },
  { value: '7 y 63', label: 'ubicación clásica en La Plata' },
  { value: '4', label: 'formas de disfrutar: salón, mostrador, eventos y ambiente' },
];

export const serviceHighlights = [
  {
    title: 'La Terraza',
    description:
      'Restaurante con platos caseros, plato del día, meriendas abundantes y postres artesanales en un ambiente relajado.',
    href: '/la-terraza',
    cta: 'Explorar carta',
  },
  {
    title: 'Mostrador',
    description:
      'Sándwiches de miga, panadería fresca y opciones rápidas para llevar o resolver una comida sin perder calidad.',
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
  {
    title: 'Decoración',
    description:
      'Un espacio con identidad propia: ambientación cálida, detalles artesanales y rincones diseñados para hacer de cada visita una experiencia memorable.',
    href: '/decoracion',
    cta: 'Ver el espacio',
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
      'San Luis nació como un punto de encuentro barrial y hoy sigue siendo una referencia para quienes buscan calidad constante, cerámica artesanal y trato cercano.',
  },
  {
    title: 'Cocina y objetos con identidad',
    description:
      'La carta combina clásicos de confitería con platos de restaurante, y el espacio suma vajilla pintada a mano, textiles artesanales y objetos para el hogar.',
  },
  {
    title: 'Cosas ricas y más',
    description:
      'Desayunos, almuerzos, meriendas, catering y además un rincón con cosas lindas para tu hogar: tazas, platos y cerámicas que podés llevar.',
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
    title: 'Plato del día',
    badge: 'Especial del mediodía',
    description: 'Una propuesta casera que cambia seguido para quienes buscan almorzar rico en el salón.',
    items: [
      'Plato principal casero',
      'Bebida sin alcohol',
      'Postre del día o fruta fresca',
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

export const decoracionIntro = {
  title: 'Un espacio pensado para que cada detalle cuente',
  description:
    'La ambientación de San Luis combina calidez, estilo y funcionalidad. Cada rincón está diseñado para que te sientas cómodo, ya sea en un desayuno tranquilo, un almuerzo de trabajo o una merienda con amigos.',
};

export const decoracionHighlights = [
  {
    title: 'Ambiente cálido',
    description:
      'Iluminación tenue, materiales nobles y detalles florales que generan un clima acogedor desde que entrás.',
  },
  {
    title: 'Espacios versátiles',
    description:
      'Terraza al aire libre, salón interior y rincones íntimos que se adaptan a distintos momentos del día y tipos de encuentro.',
  },
  {
    title: 'Identidad visual',
    description:
      'Cada elemento de la decoración refuerza la personalidad de San Luis: tradición platense con un toque contemporáneo y atención al detalle.',
  },
];

export const decoracionFeatures = [
  'Terraza con vegetación natural y mobiliario de diseño.',
  'Salón interior con iluminación cálida y detalles artesanales.',
  'Vajilla seleccionada para una presentación cuidada en cada servicio.',
  'Rincones fotogénicos que reflejan la identidad del local.',
];

export const googleReviews = [
  {
    name: 'María Laura G.',
    rating: 5,
    text: 'Las medialunas son las mejores de La Plata, no exagero. Vamos todos los sábados con mi familia y siempre salimos contentos. La atención es de primera.',
    timeAgo: 'Hace 2 meses',
  },
  {
    name: 'Sebastián R.',
    rating: 5,
    text: 'Pedimos catering para un evento de la empresa y fue impecable. Llegó todo a tiempo, muy bien presentado y la comida riquísima. Súper recomendable.',
    timeAgo: 'Hace 3 meses',
  },
  {
    name: 'Carolina M.',
    rating: 5,
    text: 'Un lugar hermoso para merendar. La terraza es un sueño, la pastelería artesanal increíble y los precios muy razonables para la calidad que ofrecen.',
    timeAgo: 'Hace 1 mes',
  },
  {
    name: 'Martín P.',
    rating: 5,
    text: 'Almorcé el plato del día y quedé sorprendido. Comida casera de verdad, abundante y con una presentación que no esperás para ese precio. Vuelvo seguro.',
    timeAgo: 'Hace 2 semanas',
  },
  {
    name: 'Luciana T.',
    rating: 5,
    text: 'Encargué sándwiches de miga para un cumpleaños y fueron un éxito total. Frescos, variados y con ingredientes de calidad. Ya los pedí tres veces más.',
    timeAgo: 'Hace 4 meses',
  },
  {
    name: 'Fernando D.',
    rating: 5,
    text: 'Conozco San Luis desde que era chico y sigue manteniendo la misma calidad de siempre. Es un clásico platense que no defrauda. La atención siempre cálida y familiar.',
    timeAgo: 'Hace 1 mes',
  },
];

export const contactHighlights = [
  'Atención por WhatsApp para reservas, pedidos y eventos.',
  'Instagram activo para novedades, bandejas y propuestas del día.',
  'Zona accesible de La Plata para desayunar, almorzar o retirar pedidos.',
];
