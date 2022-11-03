export default function formatNumber(number) {
    return new Intl.NumberFormat(
        'EUR',
    ).format(number)
}