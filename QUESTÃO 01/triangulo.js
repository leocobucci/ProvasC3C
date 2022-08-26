var a, b, c, resultado;
        function triangulo() {
            a = parseFloat(document.ladosdotriangilo.lado1.value);
            b = parseFloat(document.ladosdotriangilo.lado2.value);
            c = parseFloat(document.ladosdotriangilo.lado3.value);
            if (a < b + c && b < a + c && c < a + b) {
                if (a == b && b == c) {
                    resultado = 'TRIANGULO EQUILÁTERO';
                }
                else {
                    if (a == b || a == c || c == b) {
                        resultado = 'TRIANGULO ISÓSCELES';
                    }
                    else {
                        resultado = 'TRIANGULO ESCALENO';
                    }
                }
            }
            else {
                resultado = 'NÃO É UM TRIANGULO.';
            }
            document.ladosdotriangilo.saida.value = resultado;
        }