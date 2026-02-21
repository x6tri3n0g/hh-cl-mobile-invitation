"use client";

export default function GreetingSection() {
    return (
        <section id="greeting" className="">
            <div className="text-center">
                <p className="text-[10px] tracking-[0.3em] text-ink/40 uppercase">
                    Invitation Greeting
                </p>
                <h2 className="mt-2 text-2xl text-ink">우리, 결혼합니다</h2>
                <div className="mt-6 text-sm leading-relaxed text-ink/70">
                    <p className="whitespace-pre-line">
                        사랑하는 사람과{"\n"}새로운 인생의 시작을 맞이하며,
                        {"\n"}가장 소중한 분들과 함께 그 순간을 나누고 싶습니다.
                        {"\n"}부디 오셔서 저희의 시작을 축복해 주세요.
                    </p>
                </div>
            </div>
        </section>
    );
}
