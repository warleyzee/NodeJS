module.exports = (req,res, next) => {
    console.log();
    console.log('Estou no middleware da pasta');
    console.log();
    next();
};