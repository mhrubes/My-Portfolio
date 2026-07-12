const applyStoredTheme = () => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode')
    }
}

applyStoredTheme()

export default applyStoredTheme
