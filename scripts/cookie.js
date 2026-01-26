export let cookiesEnabled = true;
export function setCookiesEnabled(value) {
    cookiesEnabled = value;
}
export function setCookie(key, value, days) {
    if (!cookiesEnabled)
        return;
    const storedValue = typeof value === "object" ? JSON.stringify(value) : String(value);
    const expires = days ? "; expires=" + new Date(Date.now() + days * 864e5).toUTCString() : "";
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(storedValue)}${expires}; path=/`;
}
export function getCookie(key, defaultValue) {
    const cookies = document.cookie.split("; ").reduce((acc, curr) => {
        const [k, v] = curr.split("=");
        acc[decodeURIComponent(k)] = decodeURIComponent(v);
        return acc;
    }, {});
    const raw = cookies[key];
    if (raw === undefined)
        return defaultValue;
    if (raw === "true")
        return true;
    if (raw === "false")
        return false;
    if (!isNaN(Number(raw)))
        return Number(raw);
    try {
        return JSON.parse(raw);
    }
    catch {
        return raw;
    }
}
