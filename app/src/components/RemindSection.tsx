"use client";

const REMIND_MESSAGE_URL = "https://calendar.app.google/yGqbSPJNRMakctDy9";

export default function RemindSection() {
    const handleClickRemindMessage = () => {
        window.open(REMIND_MESSAGE_URL, "_blank");
    };

    return (
        <section id="remind" className=" text-center">
            <p className="text-xs tracking-[0.2em] text-ink/55">REMIND</p>
            <h2 className="mt-2 text-2xl text-ink">리마인드 알림</h2>
            <p className="mt-6 text-sm leading-relaxed text-ink/70 whitespace-pre-line">
                소중한 날을 잊지 않도록,
                {"\n"}
                <strong>결혼식 일주일, 하루 전</strong>
                {"\n"}리마인드 메세지를 보내드립니다.
            </p>
            <div className="mt-6 flex justify-center">
                <button
                    type="button"
                    onClick={handleClickRemindMessage}
                    className="rounded-full bg-white px-5 py-2 text-base text-ink border border-line"
                >
                    리마인드 메세지 받기
                </button>
            </div>
        </section>
    );
}
