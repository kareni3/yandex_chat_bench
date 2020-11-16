export default function isEmpty(value) {
    if (!value) {
        return true
    }
    if (Array.isArray(value) || typeof(value) === 'string') {
        return value.length === 0
    }
    if (value instanceof Set || value instanceof Map) {
        return value.size === 0
    }
    if (typeof(value) === 'object') {
        return Object.values(value).length === 0
    }
    return true
}
