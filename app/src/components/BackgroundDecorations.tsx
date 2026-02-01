export default function BackgroundDecorations() {
    return (
        <>
            <div className="pointer-events-none absolute -left-16 -top-10 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-white/18 blur-3xl animate-float-soft" />
            <div className="pointer-events-none absolute bottom-0 left-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
        </>
    );
}
