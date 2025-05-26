export const getLanguageId = (language) => {
    const languageMap = {
        "JAVA": 62,
        "JAVASCRIPT": 63,
        "PYTHON": 71,
    }
    return languageMap[language.toUpperCase()];
}