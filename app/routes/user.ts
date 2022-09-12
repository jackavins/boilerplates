import { Router } from 'express';
const router = Router();

router
    .route('/')
    .get((req, res) => {
        res.send("<h1>All Users</h1>");
    })
    .post((req, res) => {
        res.send("<h1>Users Added</h1>");
    });

router
    .route('/:id')
    .put((req, res) => {
        res.send("<h1>Users Updated</h1>");
    })
    .delete((req, res) => {
        res.send("<h1>Users deleted</h1>");
    });

export default router;



