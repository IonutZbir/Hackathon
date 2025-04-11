<script>

</script>
<style>
    .info header {
        text-align: center;
        padding: 60px 20px 30px;
    }

    .info header h1 {
        font-size: 48px;
        font-weight: bold;
    }
    
    .info section {
        max-width: 1000px;
        margin: 0 auto;
        padding: 40px 20px;
    }
    
    .info h2 {
        color: #42a5f5;
        font-size: 28px;
        margin-top: 40px;
    }
    .info pre, .info code {
        background: #1c1b3f;
        /* color: white; */
        padding: 10px;
        border-radius: 5px;
        display: block;
        overflow-x: auto;
    }
    .info a {
        color: #42a5f5;
        text-decoration: none;
    }
    .info .platform {
        font-weight: bold;
        margin-top: 10px;
    }

</style>

<template>
    <div class="info">
    <header>
        <h1>Guida ai Primi Passi - Hackathon25</h1>
        <p>Installa gli strumenti, clona il repo e inizia a risolvere!</p>
    </header>
    <section>
        <h2>1. Installa Python</h2>

        <p class="platform">🔹 Windows</p>
        <ol>
            <li>Vai su <a href="https://www.python.org/downloads/windows/" target="_blank">python.org</a></li>
            <li>Scarica la versione consigliata</li>
            <li>Spunta "Add Python to PATH" e clicca su Install Now</li>
        </ol>
        <pre><code>python --version</code></pre>

        <p class="platform">🔸 Linux (Ubuntu)</p>
        <pre>
            <code>
                sudo apt update
                sudo apt install python3 python3-pip
                python3 --version
            </code>
        </pre>

        <h2>2. Clona un Repository GitHub</h2>

        <p class="platform">🔹 Windows</p>
        <pre>
            <code>
                git clone https://github.com/tuo-username/tuo-repo.git
            </code>
        </pre>

        <p class="platform">🔸 Linux</p>
        <pre>
            <code>
                sudo apt install git
                git clone https://github.com/tuo-username/tuo-repo.git
            </code>
        </pre>

        <h2>3. 🧠 Come Risolvere le Challenge</h2>
        <ul>
        <li>Leggi attentamente il problema: input, output, esempi.</li>
        <li>Scrivi codice modulare e testabile.</li>
        </ul>
        <pre>
            <code>
                def somma(a, b):
                return a + b
                print(somma(2, 3))  # Output: 5
            </code>
        </pre>

        <p>✅ Testa vari casi:</p>
        <pre>
            <code>
                assert somma(0, 0) == 0
                assert somma(-1, 1) == 0
                assert somma(10, 5) == 15
            </code>
        </pre>
        
        <p>📤 Versiona il tuo codice:</p>
        <pre>
            <code>
                git add .
                git commit -m "Soluzione challenge 1"
                git push origin main
            </code>
        </pre>

        <h2>🚀 Suggerimenti Finali</h2>
        <ul>
        <li>Lavora in team, comunica spesso.</li>
        <li>Non aver paura di chiedere aiuto.</li>
        <li>Pensa in modo creativo: ci sono sempre più soluzioni!</li>
        </ul>
    </section>
    </div>

</template>
