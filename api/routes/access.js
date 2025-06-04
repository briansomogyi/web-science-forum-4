import { Router } from 'express';
const router = Router();
let users = [];
router.post('/new-user', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    users.push({
        name,
        email
    });
    res.send('saved');
})
router.put('/edit-user', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const id = users.findIndex(user => user.name == name);
    if (id > -1) {
        users[id].email = email
        res.send('edited');
    } else {
        res.send('not found');
    }
})
export default router;