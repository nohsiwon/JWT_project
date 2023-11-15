async function main() {
    const jwt = require('jsonwebtoken');

    const token = jwt.sign({ myPayloadData: 1234 }, 'mysecretkey', {
        expiresIn: '1s',
    });
    // console.log(token); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJteVBheWxvYWREYXRhIjoxMjM0LCJpYXQiOjE2Njc1NjE0NDB9.nvYSsLsT8jp7IfkbB2seCNeuLqRBgrrzDjKRFXjvoUE

    setTimeout(() => {
        const decodeToken = jwt.decode(token); //payload 확인
        console.log(decodeToken);

        const verifyToken = jwt.verify(token, 'mysecretkey');
        console.log(verifyToken);
    }, 1500);
}
main();
