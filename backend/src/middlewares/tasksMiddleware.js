const validateBody= (request, response, next) => {
    const{body} = request

    if(body.title === undefined){
        return response.status(400).json({message: 'O Campo title é necessário'});
    }

    if(body.title === ''){
        return response.status(400).json({message: 'O Campo title não pode ser vazio!'});
    }

    next();
};


const validateFieldsStatus= (request, response, next) => {
    const{body} = request;

    if(body.title === undefined){
        return response.status(400).json({message: 'O Campo title é necessário'});
    }

    if(body.title === ''){
        return response.status(400).json({message: 'O Campo title não pode ser vazio!'});
    }

    next();
};
module.exports = {
    validateBody,
    validateFieldsStatus
}