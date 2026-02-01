"use client";

export default function RsvpSection() {
    return (
        <section id="rsvp" className=" text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-accent/50" />
            <p className="text-sm text-ink/70">
                함께해 주시는 마음,
                <br />
                오래 기억하겠습니다.
            </p>
            <div className="mt-6 flex justify-center">
                <button
                    type="button"
                    className="rounded-full bg-white px-5 py-2 text-sm text-ink border border-line"
                >
                    참석 여부 전달
                </button>
            </div>
        </section>
    );
}
