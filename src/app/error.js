'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error('Erro capturado:', error)
    }, [error])

    return (
        <div>
            <h2>🚨 Ops! Algo deu errado</h2>
            <p>Nosso sistema detectou um problema.</p>
            <button onClick={() => reset()}>
                Tentar novamente
            </button>
        </div>
    )
}
