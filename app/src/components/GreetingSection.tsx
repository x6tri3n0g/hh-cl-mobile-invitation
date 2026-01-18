"use client";

export default function GreetingSection() {
    return (
        <section id="greeting" className="reveal">
            <div className="text-center">
                <p className="invitation-body text-xs tracking-[0.2em] text-[#9A5D7A]">
                    INVITATION GREETING
                </p>
                <h2 className="invitation-serif mt-2 text-2xl text-[#4A2B3A]">
                    우리, 결혼합니다
                </h2>
                <div className="invitation-body mt-6 text-sm leading-relaxed text-[#7A5665]">
                    <p>사랑하는 사람과</p>
                    <p>새로운 인생의 시작을 맞이하며,</p>
                    <p className="mt-4">
                        가장 소중한 분들과 함께 그 순간을 나누고 싶습니다.
                    </p>
                    <p className="mt-4 font-semibold text-[#9A5D7A]">
                        부디 오셔서 저희의 시작을 축복해 주세요.
                    </p>
                </div>
            </div>
        </section>
    );
}
