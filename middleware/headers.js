const headers = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Contol-Allow-Methods', 'POST, PUT, GET, DELET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Authorization')
    return next();
};

module.exports = headers;
