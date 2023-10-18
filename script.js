let v1, v2, v3;
let totalPagar = 0;
let totalVentas = 0;
let salarioBase = 0;
let com = 0;

salarioBase = Number(prompt('Ingrese el salario base'));
v1 = Number(prompt('Ingrese el valor de la venta 1'));
v2 = Number(prompt('Ingrese el valor de la venta 2'));
v3 = Number(prompt('Ingrese el valor de la venta 3'));

totalVentas = v1+v2+v3;
com = totalVentas * 0.1;

totalPagar = salarioBase + com;


alert(`El total a pagar para el vendedor es: ${totalPagar}`);
