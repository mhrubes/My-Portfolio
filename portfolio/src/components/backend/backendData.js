// Obsah stránky Backend. Texty jsou dvojjazyčné ({ cz, en }), kód a identifikátory zůstávají beze změny.
const T = (cz, en) => ({ cz, en })

export const pick = (value, lang) => (value && typeof value === 'object' ? value[lang] : value)

/* ------------------------------ UI texty ------------------------------ */
export const UI = {
    header: T('Co se děje v backendu', 'What happens in the backend'),
    subtitle: T(
        'Interaktivní průvodce pro každého, kdo chce vidět, co se skrývá za jedním API voláním. Klikejte, spouštějte animace a sledujte Node.js a PostgreSQL při práci.',
        'An interactive guide for anyone who wants to see what hides behind a single API call. Click around, run the animations and watch Node.js and PostgreSQL at work.'
    ),
    sectionNames: [T('Cesta požadavku', 'Request flow'), T('Event loop', 'Event loop'), T('Connection pool', 'Connection pool'), T('SQL a bezpečnost', 'SQL & security')],

    /* A */
    reqTitle: T('Cesta jednoho požadavku', 'The journey of a single request'),
    reqLead: T(
        'Vyberte scénář a stiskněte Spustit. Kulička ukazuje, kudy požadavek putuje (horní dráha) a kudy se vrací odpověď (spodní dráha). Na kteroukoli komponentu a na kterýkoli krok v seznamu můžete kliknout.',
        'Pick a scenario and press Start. The dot shows where the request travels (upper lane) and where the response comes back (lower lane). You can click any component and any step in the list.'
    ),
    play: T('▶ Spustit', '▶ Start'),
    pause: T('⏸ Pauza', '⏸ Pause'),
    resume: T('▶ Pokračovat', '▶ Resume'),
    replay: T('↺ Přehrát znovu', '↺ Replay'),
    next: T('Další krok ⏭', 'Next step ⏭'),
    prev: T('⏮ Zpět', '⏮ Back'),
    again: T('↺ Znovu', '↺ Reset'),
    speed: T('Rychlost', 'Speed'),
    stepsTitle: T('Kroky scénáře', 'Scenario steps'),
    laneReq: T('požadavek →', 'request →'),
    laneRes: T('← odpověď', '← response'),
    aboutComponent: T('o komponentě', 'component info'),
    introText: T(
        'Stiskněte Spustit a sledujte, co se děje v pozadí. Nebo klikněte na libovolnou komponentu ve schématu.',
        'Press Start and watch what happens in the background. Or click any component in the diagram.'
    ),

    /* B */
    elTitle: T('Event loop: proč Node.js zvládá tisíce spojení na jednom vlákně', 'Event loop: how Node.js handles thousands of connections on one thread'),
    elLead: T(
        'Node.js spouští JavaScript na jediném vlákně. Čekání na síť, disk nebo databázi se předá systému (libuv) a výsledek se zpracuje, až je volný call stack. Projděte si kód krok za krokem.',
        'Node.js runs JavaScript on a single thread. Waiting for the network, disk or database is handed over to the system (libuv) and the result is processed once the call stack is free. Walk through the code step by step.'
    ),
    step: T('krok', 'step'),
    boxes: {
        stack: T('Call stack', 'Call stack'),
        libuv: T('libuv (timery, síť, disk)', 'libuv (timers, network, disk)'),
        tick: T('Fronta process.nextTick', 'process.nextTick queue'),
        micro: T('Microtasky (Promise)', 'Microtasks (Promise)'),
        macro: T('Fronta macrotasků (callbacky)', 'Macrotask queue (callbacks)'),
        out: T('Výstup konzole', 'Console output')
    },
    liveTitle: T('Zkuste to naživo: blokující vs. neblokující práce', 'Try it live: blocking vs. non-blocking work'),
    liveText: T(
        'Kolečko se točí pomocí JavaScriptu na jediném vlákně. Blokující smyčka ho zastaví, protože nic jiného se nedostane ke slovu. Přesně takhle jeden těžký výpočet v API zpomalí všechny ostatní požadavky. (Běží v prohlížeči, princip je stejný jako v Node.js.)',
        'The spinner is driven by JavaScript on a single thread. A blocking loop freezes it because nothing else gets a turn. This is exactly how one heavy computation in an API slows down every other request. (It runs in the browser, the principle is the same as in Node.js.)'
    ),
    block: T('🧱 Blokující smyčka (1,5 s)', '🧱 Blocking loop (1.5 s)'),
    async: T('⏳ Neblokující čekání (1,5 s)', '⏳ Non-blocking wait (1.5 s)'),
    freezeIdle: T('Zatím nic nespuštěno.', 'Nothing started yet.'),
    freezeBlocking: T('🧱 Blokuji vlákno… kolečko stojí.', '🧱 Blocking the thread… the spinner is frozen.'),
    freezeBlockedDone: T('Hotovo. Celých 1,5 s se na vlákně nic jiného nestihlo (ani překreslení).', 'Done. For the whole 1.5 s nothing else could run on the thread (not even a repaint).'),
    freezeAsync: T('⏳ Čekám asynchronně… kolečko se točí dál.', '⏳ Waiting asynchronously… the spinner keeps spinning.'),
    freezeAsyncDone: T('Hotovo. Vlákno bylo celou dobu volné pro ostatní práci.', 'Done. The thread was free for other work the whole time.'),

    /* C */
    poolTitle: T('Connection pool: proč se spojení s databází nezakládají pořád znovu', 'Connection pool: why database connections are not opened over and over'),
    poolLead: T(
        'Navázat spojení s PostgreSQL je drahé (TCP, autentizace, nový proces na straně serveru). pg.Pool proto drží několik spojení otevřených a půjčuje je. Když jsou všechna obsazená, další dotazy čekají ve frontě. Pošlete dotazy a změňte velikost poolu.',
        'Opening a PostgreSQL connection is expensive (TCP, authentication, a new server-side process). pg.Pool therefore keeps a few connections open and lends them out. When all are busy, further queries wait in a queue. Send some queries and change the pool size.'
    ),
    sendOne: T('+ Poslat 1 dotaz', '+ Send 1 query'),
    sendTen: T('+ 10 najednou', '+ 10 at once'),
    clear: T('Vyčistit', 'Clear'),
    poolSize: T('Velikost poolu', 'Pool size'),
    connection: T('spojení', 'connection'),
    query: T('dotaz', 'query'),
    busyWith: T('zpracovává dotaz', 'running query'),
    idle: T('volné (idle)', 'free (idle)'),
    queueTitle: T('Fronta čekajících dotazů', 'Queue of waiting queries'),
    queueEmpty: T('Fronta je prázdná. Všechny dotazy mají spojení.', 'The queue is empty. Every query has a connection.'),
    done: T('hotovo', 'done'),
    avgWait: T('prům. čekání ve frontě', 'avg. queue wait'),
    poolTip: T(
        'Tip: s max = 1 se dotazy zpracují jeden po druhém a fronta roste. S velkým poolem se fronta nevytváří, ale databáze musí zvládnout více souběžných dotazů. Velikost poolu je vždy kompromis.',
        'Tip: with max = 1 queries run one after another and the queue grows. With a large pool there is no queue, but the database has to handle more concurrent queries. Pool size is always a trade-off.'
    ),

    /* D */
    sqlTitle: T('Parametrizované dotazy: proč se do SQL nikdy neskládá text', 'Parameterized queries: why you never build SQL from text'),
    sqlLead: T(
        'Uživatel zadá jméno a backend hledá v databázi. Vyzkoušejte běžné jméno i útok. Vlevo je dotaz poskládaný z textu, vpravo parametrizovaný dotaz ($1), jak ho posílá pg.',
        'A user enters a name and the backend searches the database. Try a regular name and an attack. On the left the query is built from text, on the right it is a parameterized query ($1), the way pg sends it.'
    ),
    sqlInputLabel: T('Zadané jméno', 'Entered name'),
    sqlNormal: T('Běžné jméno', 'Regular name'),
    sqlAttack1: T("💉 Útok: ' OR '1'='1", "💉 Attack: ' OR '1'='1"),
    sqlAttack2: T('💥 Útok: smazání tabulky', '💥 Attack: drop a table'),
    sqlBadTitle: T('❌ Interpolace řetězce', '❌ String interpolation'),
    sqlGoodTitle: T('✅ Parametrizovaný dotaz', '✅ Parameterized query'),
    sqlTextLabel: T('// text dotazu', '// query text'),
    sqlValuesLabel: T('// hodnoty, posílají se zvlášť', '// values, sent separately'),
    sqlBadOk: T('Dotaz se chová podle očekávání. Je to ale jen náhoda, vstup nikdo neověřil.', 'The query behaves as expected. But that is pure luck, nobody validated the input.'),
    sqlBadDrop: T('💥 Databáze dostane druhý příkaz a smaže tabulku. Vstup se stal součástí SQL kódu.', '💥 The database receives a second statement and drops the table. The input became part of the SQL code.'),
    sqlBadAll: T('💥 Podmínka je vždy pravdivá, dotaz vrátí všechny uživatele. Vstup se stal součástí SQL kódu.', '💥 The condition is always true, the query returns every user. The input became part of the SQL code.'),
    sqlGoodAttack: T(
        '🛡️ Hledá se uživatel s tímto doslovným jménem. Databáze vstup nikdy nepovažuje za kód, takže se nic nestane (najde 0 řádků).',
        '🛡️ It looks for a user with this literal name. The database never treats the input as code, so nothing happens (0 rows found).'
    ),
    sqlGoodOk: T('Databáze dostane SQL a hodnotu odděleně. Hodnota je vždy jen data.', 'The database receives the SQL and the value separately. The value is always just data.')
}

/* ------------------------------ A: komponenty ------------------------------ */
export const NODES = {
    client: {
        x: 80, icon: '🌐', label: T('Klient', 'Client'), sub: T('prohlížeč / služba', 'browser / service'),
        title: T('Klient', 'Client'),
        text: T('Prohlížeč, mobilní aplikace nebo jiná služba. Posílá HTTP požadavek (metoda, URL, hlavičky, tělo) a čeká na odpověď.', 'A browser, mobile app or another service. It sends an HTTP request (method, URL, headers, body) and waits for the response.')
    },
    express: {
        x: 245, icon: '⚙️', label: T('Express', 'Express'), sub: T('Node.js server', 'Node.js server'),
        title: T('Node.js + Express', 'Node.js + Express'),
        text: T(
            'Node.js (libuv) přijme TCP spojení, HTTP parser z něj vytvoří objekty <code>req</code> a <code>res</code> a Express podle URL a metody najde správnou routu.',
            'Node.js (libuv) accepts the TCP connection, the HTTP parser creates the <code>req</code> and <code>res</code> objects and Express finds the right route based on URL and method.'
        )
    },
    mw: {
        x: 410, icon: '🛡️', label: T('Middleware', 'Middleware'), sub: T('auth + validace', 'auth + validation'),
        title: T('Middleware: autentizace a validace', 'Middleware: authentication and validation'),
        text: T(
            'Řetěz funkcí před samotnou logikou. Ověří JWT token a zkontroluje <b>všechny</b> vstupy (params, query, body). Nic nevalidovaného nesmí dotéct do SQL.',
            'A chain of functions before the actual logic. It verifies the JWT token and checks <b>all</b> inputs (params, query, body). Nothing unvalidated may reach the SQL.'
        )
    },
    svc: {
        x: 575, icon: '🧩', label: T('Služba', 'Service'), sub: T('byznys logika', 'business logic'),
        title: T('Služba (byznys logika)', 'Service (business logic)'),
        text: T(
            'Tady se rozhoduje, co se má stát: skládá se parametrizovaný dotaz, volá se databáze a výsledek se mapuje do podoby, kterou vrátí API.',
            'This is where it is decided what should happen: a parameterized query is built, the database is called and the result is mapped into the shape the API returns.'
        )
    },
    pool: {
        x: 740, icon: '🏊', label: T('Pool', 'Pool'), sub: 'pg.Pool',
        title: T('Connection pool (pg.Pool)', 'Connection pool (pg.Pool)'),
        text: T(
            'Drží otevřená spojení s PostgreSQL a půjčuje je. Není-li žádné volné, dotaz počká ve frontě. Díky tomu se spojení nezakládá při každém požadavku.',
            'It keeps PostgreSQL connections open and lends them out. If none is free, the query waits in a queue. Thanks to that, a connection is not opened for every request.'
        )
    },
    pg: {
        x: 905, icon: '🐘', label: T('PostgreSQL', 'PostgreSQL'), sub: T('databáze', 'database'),
        title: T('PostgreSQL', 'PostgreSQL'),
        text: T(
            'Dotaz projde parserem a plánovačem, který zvolí nejlevnější plán (třeba index scan), a vykonavatelem. Výsledek se pošle zpět po stejném spojení.',
            'The query goes through the parser, the planner (which picks the cheapest plan, e.g. an index scan) and the executor. The result is sent back over the same connection.'
        )
    }
}
export const ORDER = ['client', 'express', 'mw', 'svc', 'pool', 'pg']
export const Y_FWD = 98
export const Y_BACK = 132

const S = (n, dir, title, text, code, extra = {}) => ({ n, dir, title, text, code, ...extra })

export const SCENARIOS = [
    {
        id: 'get', label: T('✅ GET /invoices/42', '✅ GET /invoices/42'), kind: 'ok',
        steps: [
            S('client', 'f', T('Klient odešle požadavek', 'The client sends a request'), T('Prohlížeč pošle HTTP požadavek s tokenem v hlavičce.', 'The browser sends an HTTP request with a token in the header.'), 'GET /api/invoices/42 HTTP/1.1\nHost: api.example.com\nAuthorization: Bearer eyJhbGciOi...'),
            S('express', 'f', T('Node.js přijme spojení', 'Node.js accepts the connection'), T('Event loop dostane od systému oznámení o nových datech na socketu. Express najde routu, která odpovídá <code>GET /invoices/:id</code>.', 'The event loop gets a notification from the OS about new data on the socket. Express finds the route matching <code>GET /invoices/:id</code>.'), "router.get('/invoices/:id', auth, validate, getInvoice)"),
            S('mw', 'f', T('Token je platný, vstup je validní', 'The token is valid, the input is valid'), T('Middleware ověří podpis JWT a převede <code>id</code> z textu na číslo. Při <code>NaN</code> by se vrátilo 400 a dotaz by nešel dál.', 'The middleware verifies the JWT signature and converts <code>id</code> from text to a number. On <code>NaN</code> it would return 400 and the request would go no further.'), "const id = parseInt(req.params.id, 10)\nif (Number.isNaN(id)) return res.status(400).json({ error: 'invalid id' })"),
            S('svc', 'f', T('Služba sestaví dotaz', 'The service builds the query'), T('SQL text a hodnoty se drží odděleně (<code>$1</code>, <code>$2</code>). U dotazů přes <code>stock_id</code> se vždy přidává i <code>acc_owner</code>, aby se nemíchala data mezi sítěmi.', 'SQL text and values are kept separate (<code>$1</code>, <code>$2</code>). Queries by <code>stock_id</code> always add <code>acc_owner</code> too, so data from different networks never mixes.'), "const sql = `SELECT * FROM cbos.invoices\n             WHERE id = $1 AND acc_owner = $2`\nconst invoice = await db.getItem(sql, [id, accOwner])"),
            S('pool', 'f', T('Pool půjčí spojení', 'The pool lends a connection'), T('Pool vezme volné spojení, nebo požadavek počká ve frontě. Slovo <code>await</code> uvolní vlákno, takže Node.js mezitím obsluhuje <b>další</b> požadavky.', 'The pool takes a free connection, or the request waits in a queue. The <code>await</code> keyword frees the thread, so Node.js serves <b>other</b> requests in the meantime.'), 'pool.totalCount   // 10\npool.idleCount    // 7  → connection is lent\npool.waitingCount // 0'),
            S('pg', 'f', T('PostgreSQL vykoná dotaz', 'PostgreSQL runs the query'), T('Plánovač zvolí index scan podle primárního klíče, řádek se přečte a vrátí.', 'The planner picks an index scan on the primary key, the row is read and returned.'), 'Index Scan using invoices_pkey on invoices\n  Index Cond: (id = 42)\nExecution Time: 0.041 ms'),
            S('pool', 'b', T('Spojení se vrací do poolu', 'The connection returns to the pool'), T('Po dokončení dotazu se spojení uvolní a může ho použít další požadavek. Spojení se nezavírá.', 'When the query finishes the connection is released and the next request can use it. The connection is not closed.'), '// pool.query() releases the connection automatically\n// idleCount: 7 → 8'),
            S('svc', 'b', T('Výsledek se namapuje', 'The result is mapped'), T('<code>postgres-utils</code> převede sloupce ze <code>snake_case</code> na <code>camelCase</code>. Služba případně doplní další data a vrátí objekt.', '<code>postgres-utils</code> converts columns from <code>snake_case</code> to <code>camelCase</code>. The service may add more data and returns the object.'), "{ id: 42, invoiceNumber: '2026-042', totalAmount: 1250.5 }"),
            S('express', 'b', T('Express pošle odpověď', 'Express sends the response'), T('Handler zavolá <code>res.json()</code>. Node.js serializuje objekt do JSON, doplní hlavičky a zapíše do socketu.', 'The handler calls <code>res.json()</code>. Node.js serializes the object to JSON, adds headers and writes it to the socket.'), 'res.status(200).json(invoice)', { status: '200 OK', ok: true }),
            S('client', 'b', T('Klient dostane data', 'The client receives the data'), T('Prohlížeč přijme odpověď a vykreslí ji uživateli. Celý okruh obvykle trvá jednotky až desítky milisekund.', 'The browser receives the response and renders it for the user. The whole round trip usually takes a few to a few dozen milliseconds.'), 'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{ "id": 42, "invoiceNumber": "2026-042", ... }', { status: '200 OK', ok: true })
        ]
    },
    {
        id: 'post', label: T('✅ POST /invoices', '✅ POST /invoices'), kind: 'ok',
        steps: [
            S('client', 'f', T('Klient odešle nová data', 'The client sends new data'), T('POST nese data v těle požadavku, typicky jako JSON.', 'POST carries data in the request body, typically as JSON.'), 'POST /api/invoices HTTP/1.1\nContent-Type: application/json\nAuthorization: Bearer eyJhbGciOi...\n\n{ "customerId": 7, "amount": 1250.5 }'),
            S('express', 'f', T('Parser přečte tělo', 'The parser reads the body'), T('<code>express.json()</code> přečte tělo po částech (stream), spojí ho a převede na objekt <code>req.body</code>.', '<code>express.json()</code> reads the body in chunks (a stream), joins it and turns it into the <code>req.body</code> object.'), 'app.use(express.json())'),
            S('mw', 'f', T('Validace celého těla', 'Validation of the whole body'), T('Pro každé pole se kontroluje typ, povinnost a formát. Částka musí být číslo, ne text.', 'Every field is checked for type, requiredness and format. The amount must be a number, not text.'), "const amount = Number(req.body.amount)\nif (!Number.isFinite(amount) || amount <= 0)\n  return res.status(400).json({ error: 'invalid amount' })"),
            S('svc', 'f', T('Služba zahájí transakci', 'The service starts a transaction'), T('Faktura a její položky se musí uložit <b>společně</b>, nebo vůbec. Proto se použije transakce a jedno vyhrazené spojení.', 'The invoice and its items must be saved <b>together</b> or not at all. That is why a transaction and a dedicated connection are used.'), "const client = await pool.connect()\ntry {\n  await client.query('BEGIN')\n  ..."),
            S('pool', 'f', T('Pool vyhradí spojení', 'The pool reserves a connection'), T('Při transakci musí všechny dotazy jít po <b>stejném</b> spojení, proto se místo <code>pool.query()</code> použije <code>pool.connect()</code>. Spojení je po dobu transakce neviditelné pro ostatní.', 'In a transaction all queries must go over the <b>same</b> connection, so <code>pool.connect()</code> is used instead of <code>pool.query()</code>. The connection is invisible to others for the duration of the transaction.'), 'pool.idleCount // 8 → 7  (one connection is reserved)'),
            S('pg', 'f', T('INSERT a COMMIT', 'INSERT and COMMIT'), T('PostgreSQL zapíše změnu do WAL (write-ahead log) a po <code>COMMIT</code> ji zviditelní ostatním. Při chybě by se provedl <code>ROLLBACK</code> a nic by se neuložilo.', 'PostgreSQL writes the change to the WAL (write-ahead log) and makes it visible to others after <code>COMMIT</code>. On error a <code>ROLLBACK</code> would run and nothing would be saved.'), 'INSERT INTO cbos.invoices (customer_id, amount, acc_owner)\nVALUES ($1, $2, $3) RETURNING id;\nCOMMIT;'),
            S('pool', 'b', T('Spojení se musí vrátit', 'The connection must be returned'), T('<code>client.release()</code> patří do bloku <code>finally</code>. Zapomenuté uvolnění je klasická chyba: pool se za chvíli vyčerpá a celá aplikace přestane odpovídat.', '<code>client.release()</code> belongs in a <code>finally</code> block. A forgotten release is a classic bug: the pool soon runs dry and the whole application stops responding.'), '} finally {\n  client.release()\n}'),
            S('svc', 'b', T('Služba vrátí nové ID', 'The service returns the new ID'), T('Díky <code>RETURNING id</code> není potřeba další dotaz.', 'Thanks to <code>RETURNING id</code> no extra query is needed.'), '{ id: 1043 }'),
            S('express', 'b', T('Odpověď 201 Created', 'Response 201 Created'), T('Pro vytvoření zdroje se vrací 201 a odkaz na nový zdroj.', 'Creating a resource returns 201 and a link to the new resource.'), "res.status(201)\n   .location('/api/invoices/1043')\n   .json({ id: 1043 })", { status: '201 Created', ok: true }),
            S('client', 'b', T('Klient má potvrzení', 'The client has a confirmation'), T('Aplikace ví, že faktura vznikla, a může ji zobrazit.', 'The app knows the invoice was created and can display it.'), 'HTTP/1.1 201 Created\nLocation: /api/invoices/1043', { status: '201 Created', ok: true })
        ]
    },
    {
        id: '401', label: T('⛔ Neplatný token (401)', '⛔ Invalid token (401)'), kind: 'bad',
        steps: [
            S('client', 'f', T('Klient pošle prošlý token', 'The client sends an expired token'), T('Token má omezenou platnost. Tenhle už vypršel.', 'A token has a limited lifetime. This one has expired.'), 'GET /api/invoices/42 HTTP/1.1\nAuthorization: Bearer eyJ...(expired)'),
            S('express', 'f', T('Express předá požadavek middleware', 'Express hands the request to the middleware'), T('Routa má v řetězci nejdřív autentizaci. Logika ani databáze se zatím nespouštějí.', 'The route has authentication first in the chain. Neither the logic nor the database has been touched yet.'), "router.get('/invoices/:id', auth, ...)"),
            S('mw', 'f', T('Ověření selže, řetěz se zastaví', 'Verification fails, the chain stops'), T('<code>jwt.verify</code> vyhodí <code>TokenExpiredError</code>. Middleware odpoví hned a <b>nezavolá</b> <code>next()</code>. Do služby ani databáze se požadavek nedostane.', '<code>jwt.verify</code> throws <code>TokenExpiredError</code>. The middleware responds immediately and <b>does not call</b> <code>next()</code>. The request never reaches the service or the database.'), "try { req.user = jwt.verify(token, process.env.TOKEN_SECRET) }\ncatch { return res.status(401).json({ error: 'unauthorized' }) }", { err: true, status: '401', ok: false }),
            S('express', 'b', T('Odpověď jde rovnou zpět', 'The response goes straight back'), T('Zbylé kroky (služba, pool, databáze) se přeskočily. Neplatný požadavek tak nezatěžuje databázi.', 'The remaining steps (service, pool, database) were skipped. An invalid request does not burden the database.'), "res.status(401).json({ error: 'unauthorized' })", { err: true }),
            S('client', 'b', T('Klient dostane 401', 'The client gets 401'), T('Aplikace by teď typicky přesměrovala na přihlášení nebo si vyžádala nový token.', 'The app would now typically redirect to the login or request a new token.'), 'HTTP/1.1 401 Unauthorized', { err: true, status: '401 Unauthorized', ok: false })
        ]
    },
    {
        id: '400', label: T('⛔ Nevalidní vstup (400)', '⛔ Invalid input (400)'), kind: 'bad',
        steps: [
            S('client', 'f', T('Klient pošle špatná data', 'The client sends bad data'), T('Částka je text, ne číslo. Může to být překlep, chyba v aplikaci nebo záměrný útok.', 'The amount is text, not a number. It can be a typo, an app bug or a deliberate attack.'), 'POST /api/invoices\n{ "customerId": "7; DROP TABLE x", "amount": "abc" }'),
            S('express', 'f', T('Tělo se úspěšně přečte', 'The body is read successfully'), T('JSON je syntakticky správně, takže <code>express.json()</code> projde. Obsah ale může být cokoli.', 'The JSON is syntactically valid, so <code>express.json()</code> passes. The content can be anything though.'), 'app.use(express.json())'),
            S('mw', 'f', T('Validace zastaví požadavek', 'Validation stops the request'), T('Každé pole se kontroluje na typ a formát. Nic nevalidovaného nesmí dotéct do SQL.', 'Every field is checked for type and format. Nothing unvalidated may reach the SQL.'), 'if (!Number.isInteger(customerId)) return res.status(400)...\nif (!Number.isFinite(amount))     return res.status(400)...', { err: true, status: '400', ok: false }),
            S('express', 'b', T('Odpověď s popisem chyby', 'A response describing the error'), T('Chyba se vrací srozumitelně, ale bez interních detailů.', 'The error is returned clearly, but without internal details.'), "res.status(400).json({ error: 'invalid customerId' })", { err: true }),
            S('client', 'b', T('Klient dostane 400', 'The client gets 400'), T('Formulář může uživateli zvýraznit chybné pole.', 'The form can highlight the faulty field for the user.'), 'HTTP/1.1 400 Bad Request', { err: true, status: '400 Bad Request', ok: false })
        ]
    },
    {
        id: '500', label: T('🔥 Výpadek databáze (500)', '🔥 Database outage (500)'), kind: 'bad',
        steps: [
            S('client', 'f', T('Klient pošle běžný požadavek', 'The client sends a regular request'), T('Požadavek je v pořádku, problém bude až dál.', 'The request is fine, the problem comes later.'), 'GET /api/invoices/42'),
            S('express', 'f', T('Požadavek prochází serverem', 'The request passes through the server'), T('Token i vstup jsou v pořádku.', 'Both the token and the input are fine.'), "router.get('/invoices/:id', auth, validate, getInvoice)"),
            S('mw', 'f', T('Middleware projde', 'The middleware passes'), T('Autentizace i validace proběhnou bez problému.', 'Authentication and validation succeed.'), 'next()'),
            S('svc', 'f', T('Služba zavolá databázi', 'The service calls the database'), T('Dotaz se odešle, ale databáze neodpoví.', 'The query is sent, but the database does not respond.'), 'const invoice = await db.getItem(sql, [id, accOwner])'),
            S('pool', 'f', T('Pool nezíská spojení', 'The pool cannot get a connection'), T('Databáze je nedostupná nebo je pool vyčerpaný. Po vypršení <code>connectionTimeoutMillis</code> pool dotaz zamítne s chybou.', 'The database is unreachable or the pool is exhausted. After <code>connectionTimeoutMillis</code> expires the pool rejects the query with an error.'), 'Error: connect ECONNREFUSED 10.0.0.5:5432', { err: true }),
            S('svc', 'b', T('Služba chybu zabalí a pošle výš', 'The service wraps the error and passes it up'), T('Chyba se neloguje na každé úrovni, jen tam, kde se dál nešíří. Služba přidá kontext (čeho se to týkalo) a předá ji dál.', 'The error is not logged at every level, only where it stops propagating. The service adds context (what it was about) and passes it on.'), "catch (err) {\n  throw new Error('Cannot load invoice 42: ' + err.message, { cause: err })\n}", { err: true }),
            S('express', 'b', T('Chybu zaloguje a zpracuje error handler', 'The error handler logs and handles the error'), T('Tady se chyba šíří naposledy, proto se loguje <b>právě tady</b>, a to celý objekt (kvůli stack trace). Klient dostane jen obecnou zprávu.', 'The error propagates for the last time here, so it is logged <b>right here</b>, as the whole object (for the stack trace). The client gets only a generic message.'), "log.error('GET /invoices/42 failed: ', err)\nres.status(500).json({ error: 'internal error' })", { err: true }),
            S('client', 'b', T('Klient dostane 500', 'The client gets 500'), T('Uživatel vidí obecnou chybu. Detaily (hesla, SQL, adresy serverů) se k němu nikdy nedostanou. Ty jsou jen v logu.', 'The user sees a generic error. Details (passwords, SQL, server addresses) never reach them. They exist only in the log.'), 'HTTP/1.1 500 Internal Server Error', { err: true, status: '500 Server Error', ok: false })
        ]
    }
]

/* ------------------------------ B: event loop ------------------------------ */
export const EL_CODE = [
    "console.log('start')",
    "setTimeout(() => console.log('timeout'), 0)",
    "Promise.resolve().then(() => console.log('promise'))",
    "process.nextTick(() => console.log('nextTick'))",
    "console.log('end')"
]

const EL_STEPS = [
    { line: 0, t: T('Node.js načte skript a začne ho vykonávat. Veškerý JavaScript běží na <b>jednom vlákně</b>, jehož „pracovní stůl“ je call stack.', 'Node.js loads the script and starts executing it. All JavaScript runs on a <b>single thread</b> whose “desk” is the call stack.'), set: { stack: [], tick: [], micro: [], libuv: [], macro: [], out: [] } },
    { line: 1, t: T('Řádek 1: volání <code>console.log</code> se dostane na call stack.', 'Line 1: the <code>console.log</code> call lands on the call stack.'), set: { stack: ["console.log('start')"] }, focus: 'stack' },
    { line: 1, t: T('Vykoná se okamžitě a vypíše <b>start</b>. Synchronní kód vždy předběhne vše asynchronní.', 'It runs immediately and prints <b>start</b>. Synchronous code always overtakes anything asynchronous.'), set: { stack: [], out: ['start'] }, focus: 'out' },
    { line: 2, t: T('Řádek 2: <code>setTimeout</code> se vykoná, ale <b>nespustí</b> callback. Jen o něm někomu řekne.', 'Line 2: <code>setTimeout</code> runs, but it does <b>not</b> run the callback. It only tells someone about it.'), set: { stack: ['setTimeout(cb, 0)'] }, focus: 'stack' },
    { line: 2, t: T('Časovač spravuje libuv mimo JS vlákno. Callback čeká tam, call stack je zase volný.', 'The timer is managed by libuv outside the JS thread. The callback waits there and the call stack is free again.'), set: { stack: [], libuv: ['⏱ timer 0 ms → timeout cb'] }, focus: 'libuv' },
    { line: 3, t: T('Řádek 3: <code>Promise.then</code> se registruje.', 'Line 3: <code>Promise.then</code> is registered.'), set: { stack: ['Promise.then(cb)'] }, focus: 'stack' },
    { line: 3, t: T('Promise je už splněný, takže callback jde do fronty <b>microtasků</b>.', 'The promise is already resolved, so the callback goes to the <b>microtask</b> queue.'), set: { stack: [], micro: ['promise cb'] }, focus: 'micro' },
    { line: 4, t: T('Řádek 4: <code>process.nextTick</code> je specialita Node.js.', 'Line 4: <code>process.nextTick</code> is a Node.js specialty.'), set: { stack: ['process.nextTick(cb)'] }, focus: 'stack' },
    { line: 4, t: T('Callback jde do vlastní fronty <code>nextTick</code>, která má <b>nejvyšší prioritu</b>.', 'The callback goes to its own <code>nextTick</code> queue, which has the <b>highest priority</b>.'), set: { stack: [], tick: ['nextTick cb'] }, focus: 'tick' },
    { line: 5, t: T('Řádek 5: poslední synchronní příkaz.', 'Line 5: the last synchronous statement.'), set: { stack: ["console.log('end')"] }, focus: 'stack' },
    { line: 5, t: T('Vypíše <b>end</b>. Hlavní skript je dokončen, call stack je prázdný, a teprve <b>teď</b> se event loop dostane k frontám.', 'It prints <b>end</b>. The main script is finished, the call stack is empty and only <b>now</b> does the event loop get to the queues.'), set: { stack: [], out: ['start', 'end'] }, focus: 'out' },
    { line: 0, t: T('Event loop nejdřív vyprázdní frontu <code>nextTick</code>.', 'The event loop first drains the <code>nextTick</code> queue.'), set: { stack: ['nextTick cb'], tick: [] }, focus: 'tick' },
    { line: 0, t: T('Vypsáno <b>nextTick</b>.', '<b>nextTick</b> printed.'), set: { stack: [], out: ['start', 'end', 'nextTick'] }, focus: 'out' },
    { line: 0, t: T('Pak následují microtasky (promise callbacky).', 'Then come the microtasks (promise callbacks).'), set: { stack: ['promise cb'], micro: [] }, focus: 'micro' },
    { line: 0, t: T('Vypsáno <b>promise</b>.', '<b>promise</b> printed.'), set: { stack: [], out: ['start', 'end', 'nextTick', 'promise'] }, focus: 'out' },
    { line: 0, t: T('Časovač vypršel, libuv předá callback do fronty macrotasků. Ta se zpracovává až po microtascích.', 'The timer has expired and libuv hands the callback to the macrotask queue. It is processed only after the microtasks.'), set: { libuv: [], macro: ['timeout cb'] }, focus: 'macro' },
    { line: 0, t: T('Event loop vezme callback z fronty a spustí ho.', 'The event loop takes the callback from the queue and runs it.'), set: { stack: ['timeout cb'], macro: [] }, focus: 'stack' },
    { line: 0, t: T('✅ Hotovo. Pořadí výpisu: <b>start → end → nextTick → promise → timeout</b>. Pro backend z toho plyne: dlouhá synchronní práce blokuje všechno ostatní.', '✅ Done. Output order: <b>start → end → nextTick → promise → timeout</b>. For a backend this means: long synchronous work blocks everything else.'), set: { stack: [], out: ['start', 'end', 'nextTick', 'promise', 'timeout'] }, focus: 'out' }
]

// kumulativní snímky stavu po každém kroku
export const EL_SNAP = []
EL_STEPS.reduce((prev, s) => {
    const cur = { ...prev, ...s.set, line: s.line, t: s.t, focus: s.focus }
    EL_SNAP.push(cur)
    return cur
}, {})
export const EL_BOXES = [
    { k: 'stack', wide: false },
    { k: 'libuv', wide: false },
    { k: 'tick', wide: false },
    { k: 'micro', wide: false },
    { k: 'macro', wide: true },
    { k: 'out', wide: true }
]
