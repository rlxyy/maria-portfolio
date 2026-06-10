import { ref } from 'vue'

const isDark = ref(localStorage.getItem('theme') === 'dark')

const applyTheme = () => {
    if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
}

applyTheme()

export function useTheme() {
    const toggleTheme = () => {
        isDark.value = !isDark.value
        applyTheme()
    }

    return {
        isDark,
        toggleTheme
    }
}