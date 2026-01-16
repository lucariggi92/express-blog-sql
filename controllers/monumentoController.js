import connection from "../db.js";

///---------index
function index(req, res) {
    const query = "SELECT * from posts";

    connection.query(query, (err, result) => {
        if (err) {
            res.status(500);
            return res.json({
                message: "Internal server error"
            })
        }

        res.json({ results: result })
    })

}

//----------show
function show(req, res) {
    const id = req.params.id;
    const query = "SELECT * FROM `posts` WHERE `posts`.`id`=?"

    connection.query(query, [id], (err, result) => {
        if (err) {
            res.status(500);
            return res.json({
                message: "Internal server error"
            })
        }
        if (results.length === 0) {
            res.status(404);
            req.json({
                message: "cibo non trovato"
            })
        } else {
            const post = result[0];
            res.json(post)
        }

        res.json(post)
    })
}
//-----------store
function store(req, res) {
    const dati = req.body
    if (dati.titolo === undefined || dati.titolo.length <= 0) {
        res.status(400);
        return res.json({
            error: "Client error",
            message: "il Titolo è obbligatorio"
        });
    }


    const newId = monumentiSanCataldo[monumentiSanCataldo.length - 1].id + 1;
    console.log(newId)


    const newMonumento = {
        id: newId,
        titolo: dati.name,
        descrizione: dati.descrizione,
        image: dati.image
    }
    monumentiSanCataldo.push(newMonumento)
    res.status(201)
    res.json(newMonumento)
}

//------------update
function update(req, res) {
    const id = parseInt(req.params.id);
    const dati = req.body;
    console.log(dati);
    const monumento = monumentiSanCataldo.find((monumento) => monumento.id === id);

    if (monumento === undefined) {
        res.status(404)
        return res.json({
            error: "Not Found",
            message: "Monumento non trovato"
        })
    }


    monumento.titolo = dati.titolo;
    monumento.descrizione = dati.descrizione;
    monumento.image = dati.image;

    res.json(monumento)
}

//-----------modify
function modify(req, res) {
    const id = parseInt(req.params.id)
    res.send("aggiorna parzialmente info del monumento n." + id)
}

//----------destroy
function destroy(req, res) {
    const id = parseInt(req.params.id)
    const monumentoIndex = monumentiSanCataldo.findIndex((monumento) => monumento.id === id)

    if (monumentoIndex === -1) {
        res.status(404)
        return res.json({
            message: "monumento non disponibile"
        })
    }
    monumentiSanCataldo.splice(monumentoIndex, 1)
    res.sendStatus(204)
}
const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}

export default controller