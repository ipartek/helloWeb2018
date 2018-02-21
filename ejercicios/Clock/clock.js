"use strict";

function calcularHorario() {
    const horario = new Date();
    const hora = horario.getHours();
    const minutos = horario.getMinutes();
    const segundos = horario.getSeconds();
    const gradosSegundero = ((segundos/60)*360);
    console.log(hora + ":" + minutos + ":" + segundos);
}



setInterval (calcularHorario,1000);

