"use client";

export default function ClosingSection() {
    return (
        <section className="animate-fade-up delay-300 text-center">
            <div className="rounded-[28px] border border-line bg-accent px-6 py-7 text-ink shadow-[0_20px_40px_rgba(214,182,114,0.32)]">
                <h2 className="text-lg">함께 해주세요</h2>
                <p className="mt-3 text-sm text-ink/70">
                    참석 여부를 미리 알려주시면 준비에 큰 도움이 됩니다.
                </p>
                <button className="mt-5 w-full rounded-full bg-background px-5 py-3 text-sm text-ink transition hover:-translate-y-0.5">
                    참석 여부 전달하기
                </button>
            </div>
            <p className="mt-6 text-xs text-ink/55">
                바쁜 일정 속에서도 찾아주셔서 감사합니다.
            </p>
        </section>
    );
}
