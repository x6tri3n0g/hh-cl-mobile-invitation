"use client";

import { createPortal } from "react-dom";
import type { ContactGroup } from "./types";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    groups: ContactGroup[];
}

export default function ContactModal({
    isOpen,
    onClose,
    groups,
}: ContactModalProps) {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 transition-all animate-fade-in sm:items-center">
            <button
                type="button"
                className="absolute inset-0 cursor-pointer"
                aria-label="닫기"
                onClick={onClose}
            />
            <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl animate-scale-in">
                <div className="text-center">
                    <p className="rageitalic_8293c981-module__hfW8Bq__className text-[16px] text-highlight">
                        Contact
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-ink">
                        연락하기
                    </h3>
                    <p className="mt-2 text-sm text-ink/60">
                        편하신 방법으로 연락해주세요.
                    </p>
                </div>

                {groups.map((group) => (
                    <div key={group.label} className="mt-6">
                        <div className="flex items-baseline space-x-2 border-b pb-2">
                            <h3 className="text-[#333]">{group.label}</h3>
                            <h3
                                className="text-[#aaa]"
                                style={{ fontSize: "12px" }}
                            >
                                {group.enLabel}
                            </h3>
                        </div>
                        <ul className="mt-4 space-y-2">
                            {group.items.map((item) => (
                                <li
                                    key={`${group.label}-${item.role}-${item.name}`}
                                    className="flex items-center justify-between rounded-md bg-white px-3 py-2"
                                >
                                    <div className="flex-1">
                                        <div
                                            className="text-[#888]"
                                            style={{ fontSize: "13px" }}
                                        >
                                            {item.role}
                                        </div>
                                        <div className="mt-1 font-medium">
                                            {item.name}
                                        </div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <a
                                            href={`tel:${item.phone}`}
                                            className="cursor-pointer rounded-full bg-highlight p-2 text-white transition hover:opacity-80 active:opacity-70"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 256 256"
                                                height="16"
                                                width="16"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M215.94,182.08A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,215.94,182.08Z"
                                                    opacity="0.2"
                                                />
                                                <path d="M144.27,45.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,208,112a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,144.27,45.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,176,120a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,168,232C88.6,232,24,167.4,24,88A56.26,56.26,0,0,1,72.92,32.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,109.39,104c-.18.27-.37.52-.57.77L88,129.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,223.88,183.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L96,95.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,40,88,128.14,128.14,0,0,0,168,216,40.21,40.21,0,0,0,208,181.07Z" />
                                            </svg>
                                        </a>
                                        <a
                                            href={`sms:${item.phone}`}
                                            className="cursor-pointer rounded-full bg-highlight p-2 text-white transition hover:opacity-80 active:opacity-70"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 256 256"
                                                height="16"
                                                width="16"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z"
                                                    opacity="0.2"
                                                />
                                                <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-4-1.08,7.85,7.85,0,0,0-2.53.42L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,96,128Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,128Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={onClose}
                    className="mt-4 w-full py-2 text-sm text-ink/40 underline-offset-4 hover:underline"
                >
                    닫기
                </button>
            </div>
        </div>,
        document.body
    );
}
