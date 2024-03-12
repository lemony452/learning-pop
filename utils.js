module.exports = class AppErr extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = function validateAsync(asyncFn) {
    return (req, res, next) => asyncFn(req, res, next).catch(e => next(e))
}