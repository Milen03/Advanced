function requestValidator(request) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriPattern = /^[\w.]+$/; // Allows letters, numbers, and dots
    const msgPattern = /[<>&'"\\]/; // Check for invalid characters

    // Method validation
    if (!request.hasOwnProperty('method') || !methods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    // URI validation
    if (!request.hasOwnProperty('uri') || !uriPattern.test(request.uri) || request.uri === '') {
        throw new Error('Invalid request header: Invalid URI');
    }

    // Version validation
    if (!request.hasOwnProperty('version') || !versions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    // Message validation
    if (!request.hasOwnProperty('message') || msgPattern.test(request.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
