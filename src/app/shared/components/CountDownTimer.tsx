'use client';
import { useEffect, useRef, useState } from 'react';

interface CountDownTimerProps {
    /** Target end time. If provided, it takes precedence over duration/durationType */
    endAt?: Date | string | number;
    /** Duration amount (used when endAt is not provided) */
    duration?: number;
    /** Unit for duration (used when endAt is not provided) */
    durationType?: 'seconds' | 'minutes' | 'hours' | 'days';
    /** Controls whether the timer is running (true = counting down) */
    isRunning?: boolean;
    /** Display type - currently only 'default' is supported */
    type?: 'default' | 'round';
    /** Called once when the countdown reaches zero */
    onComplete?: () => void;
}

const toMilliseconds = (value: number, unit: CountDownTimerProps['durationType']) => {
    switch (unit) {
        case 'seconds':
            return value * 1000;
        case 'minutes':
            return value * 60 * 1000;
        case 'hours':
            return value * 60 * 60 * 1000;
        case 'days':
            return value * 24 * 60 * 60 * 1000;
        default:
            return value * 1000;
    }
};

const formatTwoDigits = (n: number) => String(n).padStart(2, '0');

const getTimeParts = (ms: number) => {
    if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const totalSeconds = Math.floor(ms / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const days = Math.floor(totalHours / 24);
    return { days, hours, minutes, seconds };
};

const parseEndAt = (endAt?: Date | string | number) => {
    if (!endAt) return null;
    if (endAt instanceof Date) return endAt.getTime();
    const n = typeof endAt === 'number' ? endAt : Date.parse(String(endAt));
    return Number.isNaN(n) ? null : n;
};

const CountDownTimer = ({
    endAt,
    duration = 0,
    durationType = 'seconds',
    isRunning = true,
    type = 'default',
    onComplete,
}: CountDownTimerProps) => {
    const running = isRunning;

    // Store computed target timestamp (ms)
    const targetRef = useRef<number | null>(null);

    // Remaining milliseconds drives rendering
    const [remainingMs, setRemainingMs] = useState<number>(() => {
        const parsed = parseEndAt(endAt);
        if (parsed != null) return Math.max(parsed - Date.now(), 0);
        return Math.max(toMilliseconds(duration, durationType), 0);
    });

    // Track whether onComplete has been called to ensure single invocation
    const completedRef = useRef<boolean>(false);

    // (Re)compute target when inputs change
    useEffect(() => {
        const parsed = parseEndAt(endAt);
        if (parsed != null) {
            targetRef.current = parsed;
        } else {
            targetRef.current = Date.now() + toMilliseconds(duration, durationType);
        }
        // reset completed flag; the interval effect will update remainingMs on next tick
        completedRef.current = false;
    }, [endAt, duration, durationType]);

    // Interval that updates remainingMs every second while running
    useEffect(() => {
        if (!running || targetRef.current == null) return;

        const tick = () => {
            const r = Math.max(targetRef.current! - Date.now(), 0);
            setRemainingMs(r);
        };

        // run an immediate tick then start interval
        tick();
        const id = window.setInterval(tick, 1000);
        return () => window.clearInterval(id);
    }, [running, endAt, duration, durationType]);

    // Call onComplete once when reaching zero
    useEffect(() => {
        if (remainingMs === 0 && !completedRef.current) {
            completedRef.current = true;
            try {
                onComplete?.();
            } catch (e) {
                // swallow errors from callback to avoid breaking timer
                console.error('CountDownTimer onComplete callback error', e);
            }
        } else if (remainingMs > 0) {
            completedRef.current = false;
        }
    }, [remainingMs, onComplete]);

    const { days, hours, minutes, seconds } = getTimeParts(remainingMs);

    if (type === 'round') {
        return (
            <div className="flex gap-5">
                <div className="flex flex-col items-center justify-center bg-white rounded-full w-24 h-24">
                    <span className="text-4xl font-semibold">{formatTwoDigits(days)}</span>
                    <span className="py-1 font-medium">Days</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-full w-24 h-24">
                    <span className="text-4xl font-semibold">{formatTwoDigits(hours)}</span>
                    <span className="py-1 font-medium">Hours</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-full w-24 h-24">
                    <span className="text-4xl font-semibold">{formatTwoDigits(minutes)}</span>
                    <span className="py-1 font-medium">Minutes</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-full w-24 h-24">
                    <span className="text-4xl font-semibold">{formatTwoDigits(seconds)}</span>
                    <span className="py-1 font-medium">Seconds</span>
                </div>
            </div>
        )
    }
    return (
        <div className="flex gap-5">
            <div className="flex flex-col items-center">
                <span className="py-1 font-medium">Days</span>
                <span className="text-4xl font-semibold">{formatTwoDigits(days)}</span>
            </div>
            <div className="flex items-center pt-2 text-4xl text-[#E07575]">:</div>
            <div className="flex flex-col items-center">
                <span className="py-1 font-medium">Hours</span>
                <span className="text-4xl font-semibold">{formatTwoDigits(hours)}</span>
            </div>
            <div className="flex items-center pt-2 text-4xl text-[#E07575]">:</div>
            <div className="flex flex-col items-center">
                <span className="py-1 font-medium">Minutes</span>
                <span className="text-4xl font-semibold">{formatTwoDigits(minutes)}</span>
            </div>
            <div className="flex items-center pt-2 text-4xl text-[#E07575]">:</div>
            <div className="flex flex-col items-center">
                <span className="py-1 font-medium">Seconds</span>
                <span className="text-4xl font-semibold">{formatTwoDigits(seconds)}</span>
            </div>
        </div>
    );
};

export default CountDownTimer;
