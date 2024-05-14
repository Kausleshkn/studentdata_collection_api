import express from 'express';
import userfun from '../controllers/userControllers.js';

const router = express.Router();

router.get('/', userfun.userControllers)
router.post('/', userfun.createDoc)
router.get('/edit/:id', userfun.editController)
router.post('/update/:id', userfun.editDoc)
router.post('/delete/:id', userfun.deleteDoc)

export default router;