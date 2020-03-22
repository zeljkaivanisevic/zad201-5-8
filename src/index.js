import express from 'express';
const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati


var studenti = [
  { oib: "12312349172", ime: "Hrvoje", prezime: "Horvat" },
  { oib: "82723412342", ime: "Ivana", prezime: "Ivić" },
  { oib: "97283742342", ime: "Stjepan", prezime: "Stjepanović" },
]

// zadatak 201
app.get('/zbrajanje', (req, res) => {
  let a = parseInt(req.query.a)
  let b = parseInt(req.query.b)
  let c = a + b
  res.send(`Rezultat je ${c}!`)
})

app.get('/oduzimanje', (req, res) => {
  let a = parseInt(req.query.a)
  let b = parseInt(req.query.b)
  let c = a - b
  res.send(`Rezultat je ${c}!`)

})

app.get('/mnozenje', (req, res) => {
  let a = parseInt(req.query.a)
  let b = parseInt(req.query.b)
  let c = a * b
  res.send(`Rezultat je ${c}!`)
})

app.get('/dijeljenje', (req, res) => {
  let a = parseInt(req.query.a)
  let b = parseInt(req.query.b)
  let c = a / b
  res.send(`Rezultat je ${c}!`)
})

//zadatak 202

app.get('/202', (req, res) => {
  let k = parseInt(req.query.k)
  let t1 = 0
  let t2 = 1
  let nextt = 0

  if (k == 0) res.send(`${t1}`)
  if (k == 1) res.send(`${t2}`)

  for (let i = 1; i < k; ++i) {
    nextt = t1 + t2;
    t1 = t2;
    t2 = nextt;
  }
  res.send(`${nextt}`)
})


//zadatak 203
app.get('/203', (req, res) => {
  let q = " "
  let rezultat = studenti.map(a => a.ime + q + a.prezime + q + a.oib)
  console.log(rezultat)
  // ["Hrvoje Horvat (12312349172)", "Ivana Ivić (82723412342)", "Stjepan Stjepanović (97283742342)"]

  res.send(` ${rezultat}`)
})

//zadatak 204
app.get('/204', (req, res) => {
  let a1 = studenti.map(a => a.ime.length)
  let suma = a1.reduce((s, e) => s + e, 0)
  res.send(` ${suma}`)
})

//zadatak 205
app.get('/205', (req, res) => {
  let a1 = ["aa", "b1", "b1", "ce", "aa", "ce", "b1", "z"]
  let brojac = a1.reduce((json, val) => ({ ...json, [val]: (json[val] | 0) + 1 }), {})
  console.log(brojac)
  res.send(` ${brojac}`)
})




//zadatak 208
app.get('/208', (req, res) => {

  let lista = [
    {id: 10001, createdBy: "nikola@tankovic.me"},
    {id: 10002, createdBy: "marko@markovic.me" },
    {id: 10003, createdBy: "iva@ivkovic.me"}
   ]
let a1 = lista.map(a => a.id)
let su = a1.reduce((s, e) => s > e ? s : e)
res.send(` ${su}`)



})

app.listen(port, () => console.log(`Slušam na portu ${port}!`))

