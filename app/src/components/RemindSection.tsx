"use client";

export default function RemindSection() {
    return (
        <section id="remind" className="reveal text-center">
            <p className="invitation-body text-xs tracking-[0.2em] text-[#9A5D7A]">
                REMIND
            </p>
            <h2 className="invitation-serif mt-2 text-2xl text-[#4A2B3A]">
                리마인드 알림
            </h2>
            <p className="invitation-body mt-6 text-sm leading-relaxed text-[#7A5665]">
                소중한 날을 잊지 않도록,
                <br />
                <strong>결혼식 일주일, 하루 전</strong>
                <br />
                리마인드 메세지를 보내드립니다.
            </p>
            <p className="invitation-body mt-4 text-xs text-[#9A5D7A]">
                연락처는 리마인드 메세지용으로만 사용됩니다.
            </p>
            <div className="mt-6 flex justify-center">
                <button
                    type="button"
                    className="invitation-body rounded-full bg-[#E07AA9] px-5 py-2 text-sm text-[#FFF7FB] shadow-[0_12px_24px_rgba(224,122,169,0.28)] transition hover:-translate-y-0.5 hover:bg-[#C96593]"
                >
                    리마인드 메세지 받기
                </button>
            </div>
        </section>
    );
}
