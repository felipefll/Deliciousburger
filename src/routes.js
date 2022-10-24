import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import ProductController from './app/controllers/ProductController'
import SessionController from './app/controllers/SessionController'
import CategoryController from './app/controllers/CategoryController'
import UserController from './app/controllers/UserController'
import OrderController from './app/controllers/OrderController'
import authMiddlewares from './app/middlewares/auth'

const upload = multer(multerConfig)
const routes = new Router()

routes.post('/users', UserController.store )
routes.post('/sessions', SessionController.store )

routes.use(authMiddlewares)

routes.post('/products', upload.single('file'), ProductController.store)
routes.get('/products', ProductController.index)
routes.put('/products/:id', upload.single('file'), ProductController.update )

routes.post('/categories', CategoryController.store)
routes.get('/categories', CategoryController.index)

routes.post('/orders', OrderController.store)
routes.put('/orders/:id', OrderController.update)
routes.get('/orders', OrderController.index)

export default routes
