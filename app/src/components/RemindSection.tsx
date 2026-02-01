"use client";

export default function RemindSection() {
    return (
        <section id="remind" className=" text-center">
            <p className="text-xs tracking-[0.2em] text-ink/55">REMIND</p>
            <h2 className="mt-2 text-2xl text-ink">리마인드 알림</h2>
            <p className="mt-6 text-sm leading-relaxed text-ink/70">
                소중한 날을 잊지 않도록,
                <br />
                <strong>결혼식 일주일, 하루 전</strong>
                <br />
                리마인드 메세지를 보내드립니다.
            </p>
            <p className="mt-4 text-xs text-ink/55">
                연락처는 리마인드 메세지용으로만 사용됩니다.
            </p>
            <div className="mt-6 flex justify-center">
                <button
                    type="button"
                    className="rounded-full bg-accent px-5 py-2 text-sm text-ink shadow-[0_12px_24px_rgba(214,182,114,0.3)] transition hover:-translate-y-0.5 hover:bg-accent/85"
                >
                    리마인드 메세지 받기
                </button>
            </div>
        </section>
    );
}
