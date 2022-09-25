const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        const {
            isIntersecting,
            target,
            intersectionRatio,
        } = entry;
        if (isIntersecting) {
            if (intersectionRatio > 0.5) {
                target.classList.add('visible')
            }
        } else {
            target.classList.remove('visible')
        }
    }
}, { threshold: [0, 0.5, 1] })
const items = document.querySelectorAll('.item')
for (const item of items) {
    observer.observe(item)
}
