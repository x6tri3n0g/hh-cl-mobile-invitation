"use client";

export default function ClosingSection() {
    return (
        <section className="animate-fade-up delay-300 text-center">
            <div className="rounded-[28px] border border-[#F2D3DF] bg-[#E07AA9] px-6 py-7 text-[#FFF7FB] shadow-[0_20px_40px_rgba(224,122,169,0.32)]">
                <h2 className="invitation-serif text-lg">함께 해주세요</h2>
                <p className="invitation-body mt-3 text-sm text-[#FADAE9]">
                    참석 여부를 미리 알려주시면 준비에 큰 도움이 됩니다.
                </p>
                <button className="invitation-body mt-5 w-full rounded-full bg-[#FFF7FB] px-5 py-3 text-sm text-[#4A2B3A] transition hover:-translate-y-0.5">
                    참석 여부 전달하기
                </button>
            </div>
            <p className="invitation-body mt-6 text-xs text-[#9A5D7A]">
                바쁜 일정 속에서도 찾아주셔서 감사합니다.
            </p>
        </section>
    );
}
