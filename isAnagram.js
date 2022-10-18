var isAnagram = function(s, t) {
    // const a = s.split('').sort()
    // const b = t.split('').sort()
    // return a.join('') === b.join('')

    // Cach 2
    const hashMap = []
    for (const a of s) {
        hashMap[a] = (hashMap[a] || 0) + 1
    }
    for (const b of t) {
        hashMap[b] = (hashMap[b] || 0) - 1
    }
    return Object.values(hashMap).every(character => character === 0)
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('cat', 'tar'))