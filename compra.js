let numeroEntradas = prompt('Por favor introduzca el numero de entradas deseadas:')
let nombrePersona
let respuesta
let entradasCompradas = 0
let listaPersonas = []
if (numeroEntradas != 0 && numeroEntradas <= 4) {
    document.write(`Ha solicitado ${numeroEntradas} entradas, a continuación introduzca los datos de cada persona!!!<br> `)
    for (let entrada = 1; entrada <= numeroEntradas; entrada++) {
        nombrePersona = prompt(`
            Por favor introduzca el nombre completo para la entrada ${entrada}: `)
        respuesta = prompt(`
            Por favor informe si ${nombrePersona} esta
            vacunado(a) con SI o NO: `).toUpperCase()
        switch (respuesta) {
            case "SI":
                {
                    document.write(`
            Entrada confirmada para ${nombrePersona.toUpperCase()}<br>
            `)
                    entradasCompradas++
                    listaPersonas[entradasCompradas] = nombrePersona
                    break
                }
            case "NO":
                {
                    document.write(`
            NO podemos confirmar entrada para ${nombrePersona.toUpperCase()}<br>
            `)
                    break
                }

            default:
                {
                    document.write(`Respuesta no valida, NO podemos confirmar entrada para ${nombrePersona.toUpperCase()}
                        por favor actualice la pagina e introduzca una respuesta valida <br> `)
                }
        }
    }
    document.write(`
                        Ha podido confirmar ${entradasCompradas}
                        de la(s) ${numeroEntradas}
                        entrada(s) solicitada(s) !!!<br> `)
    if (entradasCompradas > 0) {
        document.write("Lista personas admitidas:<br>")
        for (let entrada = 1; entrada <= entradasCompradas; entrada++) {
            document.write(`
                        ${listaPersonas[entrada].toUpperCase()}<br>
                        `)

        }
    }
} else
if (numeroEntradas > 4) {
    document.write("Numero maximo de entradas permitidas son 4, por favor actualice la pagina e introduzca un numero del 1 al 4")
} else { document.write("Numero de entradas incorrecto, por favor actualice la pagina e introduzca un numero de entradas valido") }