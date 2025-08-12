'use client'

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <div style={{ 
                    padding: '20px', 
                    textAlign: 'center',
                    fontFamily: 'system-ui'
                }}>
                    <h1>💥 Erro Crítico do Sistema: {error}</h1>
                    <p>Algo deu muito errado na aplicação.</p>
                    
                    <button onClick={() => reset()}>
                        🔄 Reiniciar Aplicação
                    </button>
                </div>
            </body>
        </html>
    )
}