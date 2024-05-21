
export default function useLocalStorage () {
    const localeItem = localStorage.getItem('user')
    return localeItem
}
