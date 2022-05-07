
    function prima() {
        let U = [[], []];
        let areaPrima = "Visualizzazione:\n";

        U[0][0] = eval(document.getElementById("prodotto1A").value);
        U[0][1] = eval(document.getElementById("prodotto2A").value);
        U[0][2] = eval(document.getElementById("prodotto3A").value);
        U[1][0] = eval(document.getElementById("prodotto1B").value);
        U[1][1] = eval(document.getElementById("prodotto2B").value);
        U[1][2] = eval(document.getElementById("prodotto3B").value);
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                areaPrima += "MERCATO A: ";
            } else {
                areaPrima += "\n"
                areaPrima += "MERCATO B: ";
            }
            for (let y = 0; y < 3; y++) {
                areaPrima += U[i][y] + "   ";
            }
        }
        document.getElementById("text_area").innerHTML = areaPrima;
    }

    function dopo() {
        let V = [[],[]];
        let areaDopo = "Visualizzazione:\n";
        V[0][0] = eval(document.getElementById("prodotto1A").value);
        V[0][1] = eval(document.getElementById("prodotto2A").value);
        V[0][2] = eval(document.getElementById("prodotto3A").value);
        V[1][0] = eval(document.getElementById("prodotto1B").value);
        V[1][1] = eval(document.getElementById("prodotto2B").value);
        V[1][2] = eval(document.getElementById("prodotto3B").value);
        let option = document.getElementById("incremento");
        let numeroA;
        let numeroB;
        switch (option.selectedIndex) {
            case 0:
                numeroA = 0;
                numeroB = 0;
                break;
            case 1:
                numeroA = 15;
                numeroB = 20;
                break;
            case 2:
                numeroA = 25;
                numeroB = 30;
                break;
            case 3:
                numeroA = 35;
                numeroB = 40;
                break;
            default:
                break;
        }
        for (let ii = 0; ii < 2; ii++) {
            for (let yy = 0; yy < 3; yy++) {
                if (ii === 0)
                    V[ii][yy] += (V[ii][yy] * numeroA) / 100;
                else
                    V[ii][yy] += (V[ii][yy] * numeroB) / 100;
            }
        }
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                areaDopo += "MERCATO A: ";
            } else {
                areaDopo += "\n"
                areaDopo += "MERCATO B: ";
            }
            for (let y = 0; y < 3; y++) {
                areaDopo += V[i][y] + "   ";
            }
        }
        document.getElementById("text_area").innerHTML = areaDopo;
    }

    function resetarea() {
        document.getElementById("text_area").innerText = "Visualizzazione:";
    }