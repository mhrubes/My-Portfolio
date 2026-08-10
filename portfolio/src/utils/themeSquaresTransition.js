const SQUARE_SIZE = 48
const STAGGER_SPREAD_MS = 480
const FADE_DURATION_MS = 420

const playThemeSquaresTransition = (backgroundColor, borderColor) => {
    const main = document.querySelector('.main')
    if (!main) return

    const cols = Math.ceil(window.innerWidth / SQUARE_SIZE) + 1
    const rows = Math.ceil(window.innerHeight / SQUARE_SIZE) + 1

    const overlay = document.createElement('div')
    overlay.className = 'theme-transition-overlay'
    main.insertBefore(overlay, main.firstChild)

    const squares = []

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const square = document.createElement('span')
            square.className = 'theme-transition-square'
            square.style.left = `${col * SQUARE_SIZE}px`
            square.style.top = `${row * SQUARE_SIZE}px`
            square.style.width = `${SQUARE_SIZE}px`
            square.style.height = `${SQUARE_SIZE}px`
            square.style.background = backgroundColor
            square.style.borderColor = borderColor

            overlay.appendChild(square)
            squares.push({ el: square, row })
        }
    }

    requestAnimationFrame(() => {
        squares.forEach(({ el, row }) => {
            const delay = rows <= 1 ? 0 : (row / (rows - 1)) * STAGGER_SPREAD_MS
            el.style.transitionDelay = `${delay}ms`
            el.style.opacity = '0'
        })
    })

    setTimeout(() => {
        overlay.remove()
    }, STAGGER_SPREAD_MS + FADE_DURATION_MS + 80)
}

export default playThemeSquaresTransition
