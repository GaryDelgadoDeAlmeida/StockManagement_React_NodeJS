/**
 * renvoie un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaîne
 * 
 * @param {*} val 
 * @returns 
 */
const normalizePort = (val) => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
        return val;
    }
    
    if (port >= 0) {
        return port;
    }
    
    return false;
};

/**
 * recherche les différentes erreurs et les gère de manière appropriée. Elle est ensuite enregistrée dans le serveur
 * 
 * @param {*} error 
 */
const errorHandler = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;

        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;

        default:
            throw error;
    }
};

const checkContentBody = (content, entityType) => {
    let isValid = true
    
    if(entityType === "entity") {
        for(let item in content) {
            if(["name", "socialName", "legalStatus", "siret", "siren", "address", "zipCode", "city", "country"].indexOf(item) !== -1) {
                // 
            }
        }
    }

    return isValid
}

const checkInputsByType = (entityType, val) => {
    let isValid = true

    switch(entityType) {
        case "name":
            if(val.length > 255) {
                isValid = false
            }
            break

        default:
            break
    }

    return isValid
}

module.exports = {
    normalizePort, 
    errorHandler,
    checkContentBody
}