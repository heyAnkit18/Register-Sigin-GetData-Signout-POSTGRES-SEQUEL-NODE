module.exports = {
    formatJoiErrorMessage: (message) => {
        console.log(message)
        return (message
            .replace(/['"]/g, '')  // Remove quotes
            .replace(/\\/g, '')    // Remove backslashes
        )
    }
}