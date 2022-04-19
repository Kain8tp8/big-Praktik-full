import express from 'express'
import cors from 'cors'
//Routes Import
import BRoutes from './routes/book.routes'
import ARoutes from './routes/avdbuk.routes'
import GRoutes from './routes/gift.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use('/Books',BRoutes)
app.use('/avdBuks',ARoutes)
app.use('/Gifs',GRoutes)

app.listen(2248, () => console.log('Server is running on http://localhost:2248'))
