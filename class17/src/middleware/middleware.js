module.exports = (req,res, next) => {
    console.log();
    console.log('Estou no middleware da pasta');
    console.log();
    next();
};

exports.checkCsrfError = (err, req, res, next) =>{
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.send('BAD CSRF')
    }
};

exports.csrfMiddleware = ( req, res, next){
    res.locals.csrfToken = req.csrfToken();
}