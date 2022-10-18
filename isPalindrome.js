var isPalindrome = s => {
    const clean = s.trim().toLowerCase().replace(/[^a-z0-9]/g, '')
    for (let i = 0; i < clean.length - 1; i++) {
        if (clean[i] !== clean[clean.length - 1 - i]) {
            return false
        }
    }
    return true
}