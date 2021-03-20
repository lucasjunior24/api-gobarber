import { Router } from 'express'

import User from './app/models/User'

const routes = new Router()

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Lucas Junior',
        email: 'lucas@gmail.com',
        password_hash: '12345',
    })
    return res.json(user)

    // return res.json({ message: 'Hello Lucas' })

})

export default routes