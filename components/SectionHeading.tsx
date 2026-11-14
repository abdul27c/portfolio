type Props = {
  index: string;
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ index, label, title, description }: Props) {
  return (
    <header className="mb-10 max-w-2xl sm:mb-14">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
        <span className="text-fog-500">{index} /</span> {label}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fog-100 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-fog-300">{description}</p>}
    </header>
  );
}
