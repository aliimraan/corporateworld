import React from 'react'
import axios from 'axios'

export default function AxiosInstance() {
    axios.create ({
        baseURL : 'http://localhost:4000',
        })
}
