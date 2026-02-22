import React, { lazy, Suspense } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Main = lazy(() => import('./pages/Main'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path="/">
                        <Route index element={<Main />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        {/* <Route path="*" element={<NoPage />} /> */}
                    </Route>
                </Routes>
            </Suspense>
            <Analytics debug={false} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </BrowserRouter>
    )
}

export default App
