const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    return Array.from(
        { length: currentYear - 1944 + 1 },
        (_, i) => ({ id: currentYear - i, name: String(currentYear - i) })
    );
};

export default getYearOptions