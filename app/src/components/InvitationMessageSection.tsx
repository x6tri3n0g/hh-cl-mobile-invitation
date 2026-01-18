"use client";

export default function InvitationMessageSection() {
    return (
        <section className="animate-fade-up delay-200 rounded-[28px] border border-[#F2D3DF] bg-[#FFF4F8]/85 px-6 py-7 shadow-[0_20px_40px_rgba(152,86,116,0.12)]">
            <h2 className="invitation-serif text-lg text-[#4A2B3A]">
                마음을 전하는 글
            </h2>
            <p className="invitation-body mt-4 text-sm leading-relaxed text-[#7A5665]">
                서로 다른 길을 걸어오다 같은 방향을 바라보게 되었습니다.
                함께할 내일을 약속하며, 소중한 분들과 그 시작을 나누고
                싶습니다. 따뜻한 미소와 축복으로 자리해 주세요.
            </p>
            <div className="mt-5 flex items-center justify-between text-xs text-[#9A5D7A]">
                <span>신랑 황현 · 신부 김채린</span>
                <span>with 사랑하는 가족 및 친구들 그리고 동료들</span>
            </div>
        </section>
    );
}
