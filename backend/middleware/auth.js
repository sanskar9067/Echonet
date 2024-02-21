import JWT from 'jsonwebtoken';

export const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, 'HSKAMNVLNSLNLKCNSL');
        next();
    } catch (err) {
        console.log(err);
    }
}