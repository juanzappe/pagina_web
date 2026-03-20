import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 font-display text-5xl text-forest sm:text-6xl">Página no encontrada</h1>
      <p className="mt-4 max-w-md text-base leading-7 text-ink/70">
        La página que buscás no existe o fue movida. Podés volver al inicio o explorar nuestras secciones.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-ink"
        >
          Volver al inicio
        </Link>
        <Link
          href="/contacto"
          className="rounded-full border border-forest/15 bg-white/80 px-6 py-3 text-sm font-semibold text-forest transition hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
        >
          Contacto
        </Link>
      </div>
    </section>
  );
}
