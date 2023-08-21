// const express = require('express');
// const router = express.Router();
// const db = require('../app');

// // Rota POST para lidar com a submissão do formulário de cadastro
// router.post('/', (req, res) => {
//     const { username, email, password } = req.body;

//     const sql = 'INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)';
//     db.query(sql, [username, email, password], (err, result) => {
//         if (err) {
//             console.error('Erro ao inserir no banco de dados: ' + err.stack);
//             res.status(500).json({ error: 'Erro ao cadastrar.' });
//             return;
//         }

//         console.log('Registro inserido com sucesso.');
//         res.json({ message: 'Cadastro efetuado com sucesso.' });
//     });
// });

// module.exports = router;
