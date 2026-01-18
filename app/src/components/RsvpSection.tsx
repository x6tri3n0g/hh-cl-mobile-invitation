"use client";

export default function RsvpSection() {
    return (
        <section id="rsvp" className="reveal text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#F2D3DF]" />
            <p className="invitation-body text-sm text-[#7A5665]">
                함께해 주시는 마음,
                <br />
                오래 기억하겠습니다.
            </p>
            <div className="mt-6 flex justify-center">
                <button
                    type="button"
                    className="invitation-body rounded-full bg-[#E07AA9] px-5 py-2 text-sm text-[#FFF7FB] shadow-[0_12px_24px_rgba(224,122,169,0.28)]"
                >
                    참석 여부 전달
                </button>
            </div>
        </section>
    );
}
