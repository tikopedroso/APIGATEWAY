const getAll = (request, response) => {
    return response.status(200).json({message: 'Controller Funcionando'});
};

module.exports = {
    getAll
};