function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next)
    }
}

module.exports = wrapAsync;


/* either you can use trhe above code snippet or you can simply modify it a little bit 
        and use its shorter code snippet consists of arrow functions in it.
        
        module.exports = (fn)=>{
            return (req,res,next) =>{
                fn(req, res, next).catch(next);
            };
        };
     
*/