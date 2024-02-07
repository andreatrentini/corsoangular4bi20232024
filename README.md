# corsoangular4bi20232024

## Link interessanti

[Repository Andrea Trentini](https://github.com/andreatrentini/corsoangular4bi20232024)

[Nodejs](https://nodejs.org/it)

[Angular](https://angular.io/)

[Bootstrap](https://getbootstrap.com/)

[Material](https://material.angular.io/)

## Cos'è
The web development framework for building the future

Basato su Nodejs

### Cosè Nodejs?
Node.js® è un runtime JavaScript costruito sul motore JavaScript V8 di Chrome.

### Installare angular

1. Installare nodejs
2. Installare angulr CLI (common line interface)
```
npm install -g @angular/cli
```

## Angular

### Creare un'applicazione
```
ng new nome-applicazione
```

**NB: per separare più termini in un nome usare il trattino!!!**

> Per ricreare la cartella node_modules è sufficiente digitare il comando `npm install` facendo attenzione ad essere poszionati nella cartella dell'applicazione. nom usa il file **package.json** per capire quali pacchetti scaricare.

### Mandare in esecuzione il web server di sviluppo: testare la nostra applicazione
```
ng serve
```

### Dichiarazione delle variabili in TS
```
nome: tipo = valore
```

## Come usare bootstrap per l'applicazione
### 1.
```
npm install bootstrap
```
### 2.
Modifico il file angular.json (si trova nella directory principale del progetto, ed aggiungo
queste due righe a styles e scripts)
```
            "styles": [
              "./node_modules/boostrap/dist/css/bootstrap.css",
              "src/styles.css"
            ],
            "scripts": [
              "./node_modules/bootstrap/dist/js/bootstrap.bundle.js"
            ]
```