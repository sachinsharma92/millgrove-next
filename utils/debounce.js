

const debounce = ({ callback, delay, timerRef }) => {
    return (args) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            callback.call(this, args)
        }, delay);
    }
}

export default debounce