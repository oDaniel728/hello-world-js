export let cookiesEnabled: boolean = true;

export function setCookiesEnabled(value: boolean): void {
    cookiesEnabled = value;
}

export function setCookie(key: string, value: any, days?: number): void {
    if (!cookiesEnabled) return;
    const storedValue = typeof value === "object" ? JSON.stringify(value) : String(value);
    const expires = days ? "; expires=" + new Date(Date.now() + days * 864e5).toUTCString() : "";
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(storedValue)}${expires}; path=/`;
}

export function getCookie<T>(key: string, defaultValue: T): T {
    const cookies = document.cookie.split("; ").reduce<Record<string, string>>((acc, curr) => {
        const [k, v] = curr.split("=");
        acc[decodeURIComponent(k)] = decodeURIComponent(v);
        return acc;
    }, {});
    const raw = cookies[key];
    if (raw === undefined) return defaultValue as T;
    if (raw === "true") return true as unknown as T;
    if (raw === "false") return false as unknown as T;
    if (!isNaN(Number(raw))) return Number(raw) as unknown as T;
    try {
        return JSON.parse(raw) as T;
    } catch {
        return raw as unknown as T;
    }
}
