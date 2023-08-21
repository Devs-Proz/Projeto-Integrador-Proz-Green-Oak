// const express = require('express');
// const router = express.Router();
// const db = require('../app'); 
// // Rota GET para obter dados de login
// router.get('/', (req, res) => {
//     const sql = 'SELECT * FROM usuarios';
//     db.query(sql, (err, result) => {
//         if (err) {
//             console.error('Erro ao obter dados do banco de dados: ' + err.stack);
//             res.status(500).json({ error: 'Erro ao obter dados.' });
//             return;
//         }

//         if (result.length) {
//             console.log('Dados obtidos com sucesso.');
//             res.json(result);
//         } else {
//             console.log('Nenhum registro encontrado.');
//             res.json({ message: 'Nenhum registro encontrado.' });
//         }
//     });
// });

// // Rota POST para lidar com a submissão do formulário de login
// router.post('/', (req, res) => {
//     const { username, password } = req.body;

//     const sql = 'SELECT * FROM login WHERE username = ? AND password = ?';
//     db.query(sql, [username, password], (err, result) => {
//         if (err) {
//             console.error('Erro ao obter dados do banco de dados: ' + err.stack);
//             res.status(500).json({ error: 'Erro ao efetuar login.' });
//             return;
//         }

//         if (result.length) {
//             console.log('Login efetuado com sucesso.');
//             res.json({ message: 'Login efetuado com sucesso.' });
//         } else {
//             console.log('Usuário ou senha incorretos.');
//             res.json({ message: 'Usuário ou senha incorretos.' });
//         }
//     });
// });

// module.exports = router;
